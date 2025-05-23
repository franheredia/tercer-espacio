import React from 'react';

interface IconProps {
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export const Arrow: React.FC<IconProps> = ({
    className = '',
    direction = 'right'
}) => {

    const directionProps = {
        up: 'rotate(-90deg)',
        down: 'rotate(90deg)',
        left: 'rotate(180deg)',
        right: 'rotate(0deg)'
    }
    return (
        <div
            style={{ transform: directionProps[direction] }}
        >
            <svg
                className={className}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default Arrow; 