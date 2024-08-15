import { Servicios } from '../interfaces/Index';

export const Services = ({ title, description, image }: Servicios) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 p-4 shadow-md hover:scale-105 xl:h-[35vh]">
            <img
                src={image}
                alt={title}
                className="h-32 w-32 rounded-t-md object-cover"
            />
            <div className="p-4">
                <h4 className="mb-2 text-xl font-semibold">{title}</h4>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};
