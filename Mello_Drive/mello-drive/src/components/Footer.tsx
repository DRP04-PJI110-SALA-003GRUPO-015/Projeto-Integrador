import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
                        <p className="text-gray-400">
                            A Mello Drive é especializada em soluções de transporte e logística,
                            oferecendo serviços de qualidade em todo o Brasil.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#servicos" className="text-gray-400 hover:text-white">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="#sobre" className="text-gray-400 hover:text-white">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="#contato" className="text-gray-400 hover:text-white">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="#orcamento" className="text-gray-400 hover:text-white">
                                    Orçamento
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contato</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>(11) 1234-5678</li>
                            <li>(11) 98765-4321</li>
                            <li>contato@mellodrive.com.br</li>
                            <li>
                                Av. Principal, 1000
                                <br />
                                Centro - São Paulo/SP
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Mello Drive. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
} 