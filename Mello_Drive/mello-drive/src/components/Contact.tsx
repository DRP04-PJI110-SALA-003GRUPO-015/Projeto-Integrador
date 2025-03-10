import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contato" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Estamos prontos para atender você. Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <FaPhone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                            <p className="text-gray-600 text-center">(11) 1234-5678</p>
                            <p className="text-gray-600 text-center">(11) 98765-4321</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <FaEnvelope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                            <p className="text-gray-600 text-center">contato@mellodrive.com.br</p>
                            <p className="text-gray-600 text-center">comercial@mellodrive.com.br</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                            <p className="text-gray-600 text-center">
                                Av. Principal, 1000
                                <br />
                                Centro - São Paulo/SP
                                <br />
                                CEP: 01234-567
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
                    <form className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Seu e-mail"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="subject">
                                Assunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Assunto da mensagem"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="message">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Sua mensagem"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
} 