
import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Lock, Users, Database, Pickaxe, Shield } from "lucide-react";

const BitcoinFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Descentralizado",
      description: "Funciona sin una autoridad central o institución bancaria."
    },
    {
      icon: Banknote,
      title: "Oferta Limitada",
      description: "Solo existirán 21 millones de bitcoins, lo que lo hace resistente a la inflación."
    },
    {
      icon: Database,
      title: "Transferencias P2P",
      description: "Permite enviar dinero directamente a cualquier persona sin intermediarios."
    },
    {
      icon: Database,
      title: "Blockchain",
      description: "Utiliza una tecnología de registro distribuido para verificar y registrar transacciones."
    },
    {
      icon: Pickaxe,
      title: "Minería PoW",
      description: "Trabajo por el cual se procesan transacciones y se emiten nuevos bitcoins."
    },
    {
      icon: Shield,
      title: "Seguridad Criptográfica",
      description: "Bitcoin utiliza algoritmos como SHA-256 y firmas digitales para blindar su red, haciéndola imposible de hackear y la más segura globalmente."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Entendiendo lo que hace a Bitcoin <span className="text-bitcoin-500">revolucionario</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-bitcoin-500 dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-bitcoin-100 dark:bg-bitcoin-900 rounded-full group-hover:bg-bitcoin-500 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-bitcoin-600 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BitcoinFeatures;
