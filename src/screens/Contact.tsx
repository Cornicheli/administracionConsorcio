export const Contact = () => {
    return (
        <section className="grid h-[70vh] grid-cols-1 place-items-center md:grid-cols-1 xl:grid-cols-2">
            <iframe
                className="h-96 w-full rounded-md p-5 xl:w-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.33124774531!2d-58.51570571522674!3d-34.6157512701812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1723651543968!5m2!1sen!2sar"
                loading="lazy"
            />
            <div className="grid grid-cols-1 content-center p-10 xl:p-32">
                <h2 className="m-1 text-lg">
                    Nuestas Oficinas Direccion: Calle Falsa 123, Buenos Aires,
                    Argentina.
                </h2>
                <h2 className="m-1 text-lg">Teléfono: (+54) 4444-4444 </h2>
                <h2 className="m-1 text-lg">Email:contacto@ejemplo.com</h2>
            </div>
        </section>
    );
};
