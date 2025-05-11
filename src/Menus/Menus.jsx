import React from "react";
import Taso from "../assets/TahuBakso.jpg";
import TahuAyam from "../assets/TahuAyamSuwir.jpg";
import {delay, motion} from "framer-motion";
import { FadeLeft } from "../utility/animation";

const MenusData = [
    {
        id: 1,
        title: "Tahu Ayama Suwir",
        link: "/",
        price : "Rp20.000",
        img : TahuAyam,
        delay : 0.3
    },
    {
        id: 2,
        title: "Ceker Nyonyor",
        link: "#",
        price : "Rp15.000",
        delay : 0.6
    },
    {
        id: 3,
        title: "Tahu Bakso ",
        link: "#",
        price : "Rp10.000",
        img: Taso,
        delay : 0.9
    },
    {
        id: 4,
        title: "Krengsengan Ceker",
        link: "#",
        price : "Rp25.000",
        delay : 1.2
    },
];

const Menus = () => {
    return <section>
        <div className="container pt-12 pb-20 ">
            <motion.h1 
            initial={{opacity: 0 , x: -200 }}
            whileInView={{opacity: 1, x: 0 }}
            transition={{duration: 1 , delay : 0.3}}
            className="text-2xl font-bold text-left pb-10 uppercase">
                Menu Kita
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {MenusData.map((menu) => (
                    <motion.div 
                    variants={FadeLeft(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{scale : 1.1}}
                    className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col justify-around items-center gap-3 overflow-hidden">
                        <img src={menu.img} alt="" className="w-[200px]  object-cover mb-1 rounded-3xl"/>
                        <div>
                            <h1 className="text-lg text-center font-semibold">{menu.title}</h1>
                            <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                        </div>
                    </motion.div>
                )
                )}
            </div>
        </div>
    </section>
}

export default Menus