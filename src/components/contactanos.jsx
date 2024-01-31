function Contactanos() {
  return (
    <div className="container mx-auto py-10 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl mb-4">Contáctanos</h1>
        <div className="flex flex-col space-y-4">
          <p className="text-base">
            ¡Gracias por visitarnos! Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.
          </p>
          <p className="text-base">
            Puedes escribirnos a nuestro correo electrónico de soporte: <a href="mailto:leonardoyarleque.21@gmail.com" className="text-blue-600 hover:underline">oasis@oasis.com</a>
          </p>
          <p className="text-base">
            También puedes encontrarnos en nuestras redes sociales:
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
