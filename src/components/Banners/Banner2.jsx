import React from "react";
import BannerPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";


const Banner2 = () => {
    return (
        <section className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
                {/* Brand Info */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y4 lg:max-w-[400px]">
                        <motion.h1 
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{once : true}}
                        className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</motion.h1>
                        <motion.p 
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{once : true}}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam vitae unde, obcaecati nulla iure ipsa? Illum ea alias vel repellat eius. Iste assumenda eligendi quia voluptatem magnam officia culpa.</motion.p>
                        <motion.p
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{once : true}}
                        >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, soluta voluptate? Saepe consequuntur pariatur eius molestias voluptates iusto iure dolor, iste, eum deserunt laborum autem quia in sit eligendi provident!
                        </motion.p>
                        <motion.div 
                        variants={FadeUp(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center md:justify-start">
                            <button className="primary-btn">
                                Selengkapnya</button>
                        </motion.div>
                    </div>
                </div>
                {/* Banner Image */}
                <div className="flex justify-center items-center">
                    <motion.img 
                    initial={{opacity: 0 , x:200 , rotate: 75 }}
                    whileInView={{opacity: 1, x: 0 , rotate : 0}}
                    transition={{ duration : 1, delay: 0.2}}
                    viewport={{once : true}}
                    src={BannerPng} alt="" className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow" />
                </div>
            </div>
        </section>
    )
}

export default Banner2;