import { FaCheckCircle } from 'react-icons/fa';

const highlights = [
    'Mais de 10 anos de experiência no mercado',
    'Frota moderna e bem equipada',
    'Profissionais altamente qualificados',
    'Cobertura em todo território nacional',
    'Compromisso com prazo e qualidade',
    'Atendimento personalizado'
];

export default function About() {
    return (
        <section id="sobre" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 bg-gray-100 p-8 rounded-lg">
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Imagem Ilustrativa</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Sobre a Mello Drive
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Somos uma empresa especializada em transporte e logística,
                            comprometida em oferecer as melhores soluções para nossos clientes.
                            Nossa missão é garantir a excelência em cada serviço prestado,
                            com segurança, pontualidade e profissionalismo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 