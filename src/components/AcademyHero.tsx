
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, UserCheck, Calendar } from "lucide-react";
import { useTimeBasedTheme } from "@/hooks/useTimeBasedTheme";
import { useTelegramStats } from "@/hooks/useTelegramStats";

const AcademyHero = () => {
  const { isDarkMode } = useTimeBasedTheme();
  const { memberCount, onlineCount, loading } = useTelegramStats();

  const handleJoinTelegram = () => {
    window.open('https://t.me/+PjMkLI2DZIthYmYx', '_blank', 'noopener,noreferrer');
  };

  const handlePrivateSession = () => {
    window.open('https://t.me/BTCyberpunk', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-bitcoin-500 via-bitcoin-600 to-bitcoin-700 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-bitcoin-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-bitcoin-300/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-bitcoin-200/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e8166443-33b7-4a58-8bdc-ab6b3b3a83a2.png" 
              alt="21 Bitcoin Academy" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-white">
            <a 
              href="https://21bitcoinacademy.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-bitcoin-600 px-4 py-2 rounded-full font-semibold hover:bg-bitcoin-50 transition-colors"
            >
              Página de inicio de 21Bitcoin Academy
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Aprende sobre <span className="text-bitcoin-200 animate-pulse">Bitcoin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-bitcoin-100">
            Descubre cómo Bitcoin está transformando el mundo financiero y por qué es considerado una revolución tecnológica y económica.
          </p>
          <Button size="lg" className="bg-white text-bitcoin-600 hover:bg-bitcoin-50 px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105 mb-8">
            Comenzar Aprendizaje
          </Button>

          {/* Membership Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Únete a nuestra <span className="text-bitcoin-500">Comunidad</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Acelera tu aprendizaje con acceso exclusivo a recursos premium y una comunidad activa de bitcoiners.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-center justify-center p-6 bg-bitcoin-50 rounded-2xl">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-bitcoin-500 rounded-full">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-bitcoin-700 mb-2">Sesiones Privadas</h3>
                      <p className="text-bitcoin-600 font-semibold mb-4">Agenda tu cita personalizada</p>
                      <Button 
                        onClick={handlePrivateSession}
                        className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white px-6 py-2 rounded-full"
                      >
                        Conectar Ahora
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-6 bg-green-50 rounded-2xl">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-green-500 rounded-full">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Recursos Educativos</h3>
                      <p className="text-green-600 font-semibold">Herramientas y productos premium</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={handleJoinTelegram}
                    size="lg" 
                    className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Unirse a la Academia
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Acceso de por vida con un solo pago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Bitcoin Symbol */}
      <div className="absolute bottom-20 right-20 text-6xl text-bitcoin-200/30 animate-float">
        ₿
      </div>
    </div>
  );
};

export default AcademyHero;
