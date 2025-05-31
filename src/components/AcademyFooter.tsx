
const AcademyFooter = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/e8166443-33b7-4a58-8bdc-ab6b3b3a83a2.png" 
              alt="21 Bitcoin Academy" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Tu guía completa para entender y dominar el mundo de Bitcoin. 
              Desde los conceptos básicos hasta estrategias avanzadas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-bitcoin-500">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Herramientas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Minería</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Tienda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-bitcoin-500">Comunidad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Academia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Recursos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Soporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 21 Bitcoin Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;
