
import { Instagram, Youtube } from "lucide-react";

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
              <li><a href="https://21bitcoinacademy.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Inicio</a></li>
              <li><a href="https://21bitcoinacademy.com/herramientas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Herramientas</a></li>
              <li><a href="https://21bitcoinacademy.com/mineria/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Minería</a></li>
              <li><a href="https://21bitcoinacademy.com/tienda/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Tienda</a></li>
              <li><a href="https://21bitcoinacademy.com/blog/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-bitcoin-500">Redes Sociales</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.instagram.com/21bitcoinacademy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-bitcoin-500 transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/21btcacademy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-bitcoin-500 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@21bitcoinacademy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-bitcoin-500 transition-colors flex items-center gap-2"
                >
                  <Youtube size={16} />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@21bitcoinacademy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-bitcoin-500 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </li>
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
