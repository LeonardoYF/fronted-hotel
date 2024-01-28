import Image from "next/image";
import { Button, Typography, Textarea } from "@material-tailwind/react";
import { useUser } from "@/context/useContex";

export function NewComment() {
  const {user} = useUser()
  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
          <Image
            width={768}
            height={768}
            src="/image/avatar1.jpg"
            alt="img"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <Typography
          variant="small"
          className=" font-bold flex items-center gap-2 !text-gray-900"
        >
          {user?.name}
        </Typography>
      </div>
      <div className="flex-col mt-4 pl-14 h-full">
        <form action="#" className="flex flex-col items-end">
          {/* @ts-ignore */}
          <Textarea
            label="Tu Mensaje"
            variant="static"
            placeholder="Escribelo Aqui"
          />
          <Button color="gray" className="mt-4" size="md">
            button
          </Button>
        </form>
      </div>
    </div>
  );
}
