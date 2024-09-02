import React from 'react'
import { motion } from "framer-motion";
import icon from "/icon.ico";

function Loading() {
    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                src={icon} alt="o" className='grayscale contrast-50 animate-pulse h-[7rem]' />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='text-black font-bold text-lg text-zinc-600'>Loading...</motion.p>
        </div>
    )
}

export default Loading