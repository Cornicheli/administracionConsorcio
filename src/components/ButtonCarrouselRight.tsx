import { PropsCarrouselRight } from '../interfaces/Index';

export const ButtonCarrouselRight = ({
    onClickMoveRight,
    arrowButtonRight,
}: PropsCarrouselRight) => {
    return (
        <button
            className="absolute right-[10px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 transform select-none items-center justify-center rounded-full bg-transparent font-semibold text-gray-600 transition duration-500 ease-in-out hover:bg-black hover:text-white"
            onClick={onClickMoveRight}>
            {arrowButtonRight}
        </button>
    );
};
