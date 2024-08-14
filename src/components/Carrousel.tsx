import React, { useState, useEffect, useRef } from 'react';
import { ButtonCarrouselRight } from './ButtonCarrouselRight';
import { ButtonCarrouselLeft } from './ButtonCarrouselLeft';
import { ImageSlider } from '../interfaces/Index';

const arrayImagesSlider: ImageSlider[] = [
    {
        id: 1,
        ruta: '../../public/buenosAires-1.jpg',
        text: 'edificio 1',
    },
    {
        id: 2,
        ruta: '../../public/buenosAires-2.jpg',
        text: 'edificio 2',
    },
    {
        id: 3,
        ruta: '../../public/buenosAires-3.jpg',
        text: 'edificio 3',
    },
    {
        id: 4,
        ruta: '../../public/buenosAires-4.jpg',
        text: 'edificio 4',
    },
    {
        id: 5,
        ruta: '../../public/buenosAires-5.jpg',
        text: 'edificio 5',
    },
    {
        id: 6,
        ruta: '../../public/buenosAires-6.jpg',
        text: 'edificio 6',
    },
];

const Carousel: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const divSliderRef = useRef<HTMLDivElement>(null);
    const sliderIntervalRef = useRef<number | null>(null);

    const widthImg = 100 / arrayImagesSlider.length;

    const moveRight = () => {
        setCounter(prevCounter => (prevCounter + 1) % arrayImagesSlider.length);
    };

    const moveLeft = () => {
        setCounter(
            prevCounter =>
                (prevCounter - 1 + arrayImagesSlider.length) %
                arrayImagesSlider.length,
        );
    };

    useEffect(() => {
        const operation = widthImg * counter;
        if (divSliderRef.current) {
            divSliderRef.current.style.transform = `translate(-${operation}%)`;
            divSliderRef.current.style.transition = 'transform ease .6s';
        }
    }, [counter]);

    useEffect(() => {
        sliderIntervalRef.current = setInterval(moveRight, 5000);
        return () => {
            if (sliderIntervalRef.current) {
                clearInterval(sliderIntervalRef.current);
            }
        };
    }, []);

    return (
        <div
            id="slider"
            className="relative mt-20 h-[500px] w-full overflow-hidden bg-gray-300 shadow-none xl:h-[600px]">
            <div className="flex h-full w-[600%]" ref={divSliderRef}>
                {arrayImagesSlider.map(imagen => (
                    <div key={imagen.id} className="h-full w-[calc(100%/6)]">
                        <img
                            className="h-full w-full select-none object-cover"
                            src={imagen.ruta}
                            alt={imagen.text}
                        />
                    </div>
                ))}
            </div>
            <ButtonCarrouselLeft
                onClickMoveLeft={moveLeft}
                arrowButtonLeft={'❮'}
            />
            <ButtonCarrouselRight
                onClickMoveRight={moveRight}
                arrowButtonRight={'❯'}
            />
        </div>
    );
};

export default Carousel;
