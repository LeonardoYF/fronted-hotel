"use client";
import Datepicker from "tailwind-datepicker-react";
import moment from "moment";
import { useState } from "react";
import { useReservacion } from "@/hooks/reservacion";
import { Card, Button, Input, Typography } from "@material-tailwind/react";
import { useHabitacion } from "@/context/useHabitacion";
import { useRouter } from "next/navigation";
import ModalExito from "@/components/modal-exito";
import { useModalExito } from "@/context/modalContex";
const options = {
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: "Limpiar",
  maxDate: new Date("2050-01-01"),
  minDate: new Date(),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => <span>Anterior</span>,
    next: () => <span>Siguiente</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "es",
  disabledDates: [],
  weekDays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Selecciona la fecha",
  inputDateFormatProp: {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  },
};

export default function FormClientes() {
  const router = useRouter();
  const { habitacion } = useHabitacion();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [show1, setShow1] = useState(false);
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const { reservar } = useReservacion();
  const [error, setError] = useState<string | null>(null);
  const { calculoTotal,total } = useHabitacion();
  const { isOpen } = useModalExito();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fechaInicioDate = moment(fechaInicio).format("YYYY-MM-DD");
    const fechaFinDate = moment(fechaFin).format("YYYY-MM-DD");
    try {
      await reservar({ title, fechaInicioDate, fechaFinDate, habitacion,total });
      isOpen()
      setTimeout(() => {
        router.push("/home");
      }, 1500);
      
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };
  const handleChangeInicio = (selectedDate: Date) => {
    setFechaInicio(selectedDate);
    if (fechaFin) {
      calcularDiferenciaEnDias(
        selectedDate,
        fechaFin
      );
      
    }
  };
  const handleChangeFin = (selectedDate: Date) => {
    setFechaFin(selectedDate);
    if (fechaInicio) {
      calcularDiferenciaEnDias(
        fechaInicio,
        selectedDate
      );
      
    }
  };
  function calcularDiferenciaEnDias(fechaInicio: Date, fechaFin: Date) {
    const unDiaEnMS = 1000 * 60 * 60 * 24; // milisegundos en un día
    const diferenciaEnMS = fechaFin.getTime() - fechaInicio.getTime();
    const diferenciaEnDias = Math.floor(diferenciaEnMS / unDiaEnMS);

    calculoTotal(diferenciaEnDias)
  }
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  const handleClose1 = (state: boolean) => {
    setShow1(state);
  };
  return (
    <div className="h-screen">
      <Card color="transparent" className="w-9/12 ml-6 mt-2 p-10" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Detalles de Reservacion
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-1/2 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingresa el titulo de tu reservacion"
              label="Titulo Reservacion"
            />
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Ingresa la Fecha de inicio
            </Typography>
            <Datepicker
              options={options}
              onChange={handleChangeInicio}
              show={show}
              setShow={handleClose}
            />
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Ingresa la Fecha de fin
            </Typography>
            <Datepicker
              options={options}
              onChange={handleChangeFin}
              show={show1}
              setShow={handleClose1}
            />
          </div>

          <Button type="submit" color="green" className="mt-6" fullWidth>
            Registrar
          </Button>
        </form>
      </Card>
      <ModalExito mensaje="¡Exito en generar tu reservacion!"/>
    </div>
  );
}
