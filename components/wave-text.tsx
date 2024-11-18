import React, {FC, useEffect} from 'react';

type WaveTextProps = {
    text: string;
}

const WaveText: FC<WaveTextProps> = ({ text }) => {
    useEffect(() => {
        const letters = document.querySelectorAll('.wave-letter');
        letters.forEach((letter, index) => {
            (letter as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <div>
            {text.split("").map((letter, index) => (
                <span
                    key={index}
                    className="wave-letter inline-block "
                    style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
            <style jsx>{`
                @keyframes wave {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-2px);
                    }
                }

                .wave-letter {
                    animation: wave 2.5s ease-in-out infinite;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};

export default WaveText;
