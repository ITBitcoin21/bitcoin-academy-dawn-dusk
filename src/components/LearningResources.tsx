
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Vault } from "lucide-react";

const LearningResources = () => {
  const resources = [
    {
      icon: Eye,
      title: "Privacidad",
      description: "La privacidad es un derecho, por eso nos enfocamos en ayudarte a entender su importancia y guiarte para proteger a ti y tus bitcoins.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "La seguridad es primordial cuando se trata de dinero, por eso te llevamos por las buenas prácticas y estándares que garanticen que tú y solo tú tengas acceso a tus fondos.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Vault,
      title: "Autocustodia",
      description: "Para nosotros bitcoin pierde su esencia si lo dejamos en propiedad de un tercero, es nuestra filosofía no depender de bancos exchanges ni ETFs para Hold o DCA.",
      color: "from-bitcoin-500 to-bitcoin-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Quieres aprender más sobre <span className="text-bitcoin-500">Bitcoin</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            En nuestra comunidad te ofrecemos todo tipo de recursos para acelerar tu proceso de aprendizaje. 
            Desde conceptos básicos hasta estrategias avanzadas, siempre siguiendo las buenas prácticas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
              <CardContent className="p-8 bg-white dark:bg-gray-900">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-gradient-to-r ${resource.color} rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  {resource.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
