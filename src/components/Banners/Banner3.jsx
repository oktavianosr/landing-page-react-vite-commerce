import React from "react";
import BannerPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const bgStyle ={
    backgroundImage : `url(${BannerPng})`,
    backgroundSize : "cover",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat"
}
const Banner3 = () => {
  return (
    <section className="">
        <div 
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
            {/* blank div  */}
            <div></div>
            {/* Brand Info */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y4 lg:max-w-[400px]">
                    <motion.h1 
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once : true}}
                    className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</motion.h1>
                    <motion.p 
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once : true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam vitae unde, obcaecati nulla iure ipsa? Illum ea alias vel repellat eius. Iste assumenda eligendi quia voluptatem magnam officia culpa.</motion.p>
                    <motion.p
                    variants={FadeLeft(1.1)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once : true}}
                    >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, soluta voluptate? Saepe consequuntur pariatur eius molestias voluptates iusto iure dolor, iste, eum deserunt laborum autem quia in sit eligendi provident!
                    </motion.p>
                    <motion.div 
                    variants={FadeLeft(1.5)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center md:justify-start">
                        <button className="primary-btn">
                            Selengkapnya</button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner3
