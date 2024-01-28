

function MisionVisionObjetivos() {
  return (
    <div className="container mx-auto ">
      <div className="max-w-3xl mx-auto mt-16">
        <div className="grid p-5 grid-cols-1  md:grid-cols-1 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-lg shadow-lg p-6 ">
            
            <h2 className="text-xl font-bold mb-4 ">Misión</h2>
            <p className="text-justify">
              Nuestra misión en Oasis es proporcionar a nuestros huéspedes una experiencia única y memorable, ofreciendo servicios de hospedaje de alta calidad, atención personalizada y comodidades excepcionales para garantizar su satisfacción y bienestar durante su estadía con nosotros.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <h2 className="text-xl font-bold mb-4">Visión</h2>
            <p className="text-justify">
              Nuestra visión en Oasis es convertirnos en el referente líder en la industria hotelera, reconocidos por nuestra excelencia en servicio al cliente, nuestra innovación constante y nuestro compromiso con la sostenibilidad ambiental, creando experiencias inolvidables para nuestros huéspedes en cada una de nuestras propiedades.
            </p>
          </div>

          {/* Objetivos */}
          <div className="bg-white rounded-lg shadow-lg p-6">
      
            <h2 className="text-xl font-bold mb-4">Objetivos</h2>
            <ul className="list-disc text-justify">
              <li>Proporcionar un servicio excepcional que supere las expectativas de nuestros huéspedes.</li>
              <li>Crear un ambiente acogedor y seguro que fomente la comodidad y el bienestar.</li>
              <li>Desarrollar e implementar prácticas sostenibles que minimicen nuestro impacto ambiental.</li>
              <li>Comprometerse con el crecimiento profesional y personal de nuestro equipo.</li>
              <li>Innovar constantemente para mantenernos a la vanguardia de la industria hotelera.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisionVisionObjetivos;
