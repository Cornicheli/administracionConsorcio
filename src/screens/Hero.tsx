const Hero = () => {
    return (
        <section
            className="relative flex h-[50vh] items-center justify-center bg-cover bg-fixed bg-center text-white"
            style={{
                backgroundImage:
                    "url('https://blog.lemontech.com/wp-content/uploads/2021/11/elementos-de-control-de-una-empresa-1.jpg')",
            }}>
            <div className="rounded-md bg-black bg-opacity-50 p-8 text-center">
                <h2 className="mb-4 text-4xl font-bold">
                    Gestionamos Consorcios con Eficiencia
                </h2>
                <p className="text-lg">
                    Servicios integrales para la administración de su edificio.
                </p>
                <p className="text-lg">Trayectoria - Confianza - Seguridad</p>
            </div>
        </section>
    );
};

export default Hero;
