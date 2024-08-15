import { DesciptionContact } from '../interfaces/Index';

export const DescriptionContact = ({
    photo,
    photoAlt,
    description,
}: DesciptionContact) => {
    return (
        <section className="flex flex-row items-center">
            <figure className="w7 m-3 h-7">
                <img className="h-full w-full" src={photo} alt={photoAlt} />
            </figure>
            <h2 className="m-1 text-lg">{description}</h2>
        </section>
    );
};
