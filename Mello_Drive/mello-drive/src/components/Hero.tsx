import Image from 'next/image';

export default function Hero() {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Transporte e Logística de Excelência
                        </h1>
                        <p className="text-lg mb-8 text-blue-100">
                            Soluções completas em transporte de cargas, mudanças e logística para sua empresa ou residência.
                            Atendemos em todo o Brasil com segurança e pontualidade.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#orcamento"
                                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Solicitar Orçamento
                            </a>
                            <a
                                href="#servicos"
                                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                            >
                                Nossos Serviços
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 bg-white/10 p-8 rounded-lg">
                        <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
                            <span className="text-white/60">Imagem Ilustrativa</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 