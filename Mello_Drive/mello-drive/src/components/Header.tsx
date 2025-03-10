import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">Mello Drive</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#servicos" className="text-gray-700 hover:text-blue-600">
                            Serviços
                        </Link>
                        <Link href="#sobre" className="text-gray-700 hover:text-blue-600">
                            Sobre
                        </Link>
                        <Link href="#contato" className="text-gray-700 hover:text-blue-600">
                            Contato
                        </Link>
                        <Link
                            href="#orcamento"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Solicitar Orçamento
                        </Link>
                    </div>

                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
} 