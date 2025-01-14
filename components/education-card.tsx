import React, { useState } from 'react';
import Image from "next/image";

type CardProps = {
    level: string;
    duration: string;
    logo: string;
    background: string;
};

const EducationCard = ({ level, duration, logo, background }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-48 group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow border-2 border-muted duration-300 ease-in-out hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={background}
                alt="Background image"
                className="h-full transition-transform duration-300 ease-in-out"
                width={600}
                height={600}
            />

            <div
                className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out"/>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity ease-in-out ${isHovered ? 'opacity-0' : 'duration-1000 opacity-100'}`}>
                    <Image
                        src={logo}
                        alt="Company logo"
                        className="max-w-[80%] max-h-[50%] object-contain"
                        width={300}
                        height={200}
                    />
                </div>

                <div
                    className={`absolute inset-0 flex items-center justify-center overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="transition-transform duration-300 ease-in-out transform-gpu" style={{
                        transform: isHovered ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                        transformOrigin: 'bottom'
                    }}>
                        <h2 className="text-white text-2xl font-bold text-center px-4">
                            {level}
                        </h2>
                        <h4 className={"text-muted-foreground text-lg font-semibold text-center px-4"}>
                            {duration}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EducationCard;