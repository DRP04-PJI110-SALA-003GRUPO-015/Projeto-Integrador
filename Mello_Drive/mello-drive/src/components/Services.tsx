import { FaTruck, FaHome, FaWarehouse, FaShieldAlt } from 'react-icons/fa';

const services = [
    {
        icon: FaTruck,
        title: 'Transporte de Cargas',
        description: 'Transporte seguro e eficiente de cargas em todo o território nacional.'
    },
    {
        icon: FaHome,
        title: 'Mudanças Residenciais',
        description: 'Serviço completo de mudança residencial com embalagem e montagem de móveis.'
    },
    {
        icon: FaWarehouse,
        title: 'Armazenagem',
        description: 'Espaço seguro e climatizado para armazenamento de seus bens e mercadorias.'
    },
    {
        icon: FaShieldAlt,
        title: 'Segurança e Rastreamento',
        description: 'Monitoramento 24h e rastreamento em tempo real de toda a frota.'
    }
];

export default function Services() {
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Oferecemos soluções completas em transporte e logística para atender todas as suas necessidades
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 