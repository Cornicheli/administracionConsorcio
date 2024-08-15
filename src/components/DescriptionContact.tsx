import { DesciptionContact } from '../interfaces/Index';

export const DescriptionContact = ({
    photo,
    photoAlt,
    description,
}: DesciptionContact) => {
    return (
        <section className="flex h-auto flex-col xl:flex-row xl:items-center">
            <figure className="m-2 h-7 w-7">
                <img className="h-full w-full" src={photo} alt={photoAlt} />
            </figure>
            <h2 className="m-1 xl:text-lg">{description}</h2>
        </section>
    );
};
