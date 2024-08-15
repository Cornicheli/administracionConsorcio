import React, { useState, useEffect, useRef } from 'react';
import { ButtonCarrouselRight } from './ButtonCarrouselRight';
import { ButtonCarrouselLeft } from './ButtonCarrouselLeft';
import { ImageSlider } from '../interfaces/Index';
import {
    buenosAires1,
    buenosAires2,
    buenosAires3,
    buenosAires4,
    buenosAires5,
    buenosAires6,
} from '../assets/index';

const arrayImagesSlider: ImageSlider[] = [
    {
        id: 1,
        ruta: buenosAires1, // Asignar la ruta directamente
        text: 'edificio 1',
    },
    {
        id: 2,
        ruta: buenosAires2,
        text: 'edificio 2',
    },
    {
        id: 3,
        ruta: buenosAires3,
        text: 'edificio 3',
    },
    {
        id: 4,
        ruta: buenosAires4,
        text: 'edificio 4',
    },
    {
        id: 5,
        ruta: buenosAires5,
        text: 'edificio 5',
    },
    {
        id: 6,
        ruta: buenosAires6,
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
            className="relative h-[500px] w-full overflow-hidden bg-black bg-opacity-50 shadow-none xl:h-[800px]">
            <div className="relative flex h-full w-[600%]" ref={divSliderRef}>
                {arrayImagesSlider.map(imagen => (
                    <div
                        key={imagen.id}
                        className="h-full w-[calc(100%/6)] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${imagen.ruta})`,
                        }}
                    />
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
