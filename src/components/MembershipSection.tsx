
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Zap } from "lucide-react";

const MembershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bitcoin-500 via-bitcoin-600 to-bitcoin-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-bitcoin-700 mb-2">90</h3>
                    <p className="text-bitcoin-600 font-semibold">Miembros Activos</p>
                  </div>
                </div>

                <div className="flex items-center justify-center p-6 bg-bitcoin-50 rounded-2xl">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-bitcoin-500 rounded-full">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-bitcoin-700 mb-2">100 sats</h3>
                    <p className="text-bitcoin-600 font-semibold">Pago Único</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
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
    </section>
  );
};

export default MembershipSection;
