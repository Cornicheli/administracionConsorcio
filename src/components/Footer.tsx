export const Footer = () => {
    return (
        <footer className="bg-gray-800 p-8 text-white">
            <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Primera columna */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Sobre Nosotros
                    </h3>
                    <p className="text-sm">
                        Somos una empresa dedicada a la administración de
                        consorcios, brindando servicios de calidad y confianza
                        para nuestros clientes.
                    </p>
                </div>

                {/* Segunda columna */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Enlaces Útiles
                    </h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">
                                Inicio
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">
                                Servicios
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Tercera columna */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <span className="font-medium">Email:</span>{' '}
                            contacto@ejemplo.com
                        </li>
                        <li className="mb-2">
                            <span className="font-medium">Teléfono:</span> +54
                            11 1234-5678
                        </li>
                        <li>
                            <span className="font-medium">Dirección:</span>{' '}
                            Calle Falsa 123, Buenos Aires, Argentina
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sección de derechos reservados */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs">
                © 2024 Desarrollado Gabriel Cornide. Todos los derechos
                reservados.
            </div>
        </footer>
    );
};
