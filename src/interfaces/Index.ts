export interface Index {
    photo: string;
    photoDescription: string;
    description: string;
}

export interface Servicios {
    title: string;
    description: string;
    image: string;
}

export interface PropsCarrouselRight {
    onClickMoveRight: () => void;
    arrowButtonRight: string;
}

export interface PropsCarrouselLeft {
    onClickMoveLeft: () => void;
    arrowButtonLeft: string;
}

export interface ImageSlider {
    id: number;
    ruta: string;
    text: string;
}

export interface DesciptionContact {
    photo: string;
    photoAlt: string;
    description: string;
}
