const testimonials = [
    {
        name: 'Juan Pérez',
        text: 'Excelente servicio, siempre atentos a nuestras necesidades.',
    },
    {
        name: 'María Gómez',
        text: 'La mejor administración que hemos tenido en años.',
    },
    {
        name: 'Carlos Rodríguez',
        text: 'Profesionales y responsables, los recomiendo 100%.',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gray-200 p-4 xl:py-16">
            <div className="container mx-auto text-center">
                <h3 className="mb-12 text-3xl font-semibold">Testimonios</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-md bg-white p-6 shadow-md">
                            <p className="mb-4 italic text-gray-600">
                                {testimonial.text}
                            </p>
                            <h4 className="text-lg font-semibold">
                                {testimonial.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
