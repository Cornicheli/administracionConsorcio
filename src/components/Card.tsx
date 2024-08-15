import { Index } from '../interfaces/Index';
import Hero from '../screens/Hero';

export const Card = ({ photo, photoDescription, description }: Index) => {
    return (
        <>
            <div className="my-14 grid place-items-center md:grid-cols-1 xl:h-[65vh] xl:grid-cols-2">
                <figure className="w-82 rounded-sm p-2 lg:w-72 xl:h-[400px] xl:w-[550px]">
                    <img
                        className="h-full w-full rounded-sm"
                        src={photo}
                        alt={photoDescription}
                    />
                </figure>
                <section className="m-4 flex w-auto flex-col justify-center xl:h-72">
                    <h2 className="p-4 text-4xl">Bienvenido la empresa</h2>
                    <p className="w-5/6 p-4 text-2xl">{description}</p>
                    <p className="w-5/6 p-4 text-2xl">{description}</p>
                </section>
            </div>
            <Hero />
        </>
    );
};
