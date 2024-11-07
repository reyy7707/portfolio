import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FollowCursor: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const updateCursorPosition = (e: MouseEvent) => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setCursorPosition({
            x: e.clientX,
            y: e.clientY + scrollY,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                top: 0,
                left: 0,
            }}
            animate={{
                x: cursorPosition.x - 10,
                y: cursorPosition.y - 10,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="cursor-follow"
        >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
        </motion.div>
    );
};

export default FollowCursor;
