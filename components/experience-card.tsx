import React, { useState } from 'react';
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import { motion } from 'framer-motion';

type CardProps = {
    companyLogo: string;
    role: string;
    backgroundImage: string;
};

const Card = ({ companyLogo, role, backgroundImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-48 group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow border-2 border-muted duration-300 ease-in-out hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <img
                src={backgroundImage}
                alt="Background image"
                className="transition-transform duration-300 ease-in-out"
            />

            {/* Shadow Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out" />

            {/* Company Logo and Role Text Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Company Logo */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ease-in-out ${isHovered ? 'opacity-0' : 'duration-1000 opacity-100'}`}>
                    <img
                        src={companyLogo}
                        alt="Company logo"
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                </div>

                <div
                    className={`absolute inset-0 flex items-center justify-center overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="transition-transform duration-300 ease-in-out transform-gpu" style={{
                        transform: isHovered ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                        transformOrigin: 'bottom'
                    }}>
                        <h2 className="text-white text-2xl font-bold text-center px-4">
                            {role}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

