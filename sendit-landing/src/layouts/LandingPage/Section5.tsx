import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { plane, cloudLarge, cloudSmall, star } from "../../assets/images";
import { Button } from "../../components/Button";
import CustomModal from "../../components/CustomModal";

const Section5 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Scroll tracking for parallax clouds
    const { scrollYProgress } = useScroll();
    const cloudLeftX = useTransform(scrollYProgress, [0.7, 1], [-50, 50]);
    const cloudRightX = useTransform(scrollYProgress, [0.7, 1], [50, -50]);
    
    return (
        <div className="relative overflow-hidden flex flex-col justify-center items-center text-center w-full text-white px-4 sm:px-8 py-24 pt-20 bg-primaryAlt">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            {/* Parallax & Animated Background Elements */}
            <motion.img 
                style={{ x: cloudLeftX }}
                src={cloudSmall} alt="cloud" 
                className="absolute top-[10vw] left-[10vw] w-24 sm:w-30 z-1 opacity-60"
            />
            
            <motion.img 
                style={{ x: cloudRightX }}
                src={cloudSmall} alt="cloud" 
                className="absolute bottom-[20vh] right-[5vw] w-24 sm:w-30 z-1 opacity-60"
            />

            <motion.img 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src={star} alt="star" 
                className="absolute top-[15vw] right-[15vw] z-1 w-6 sm:w-8"
            />

            <img src={cloudLarge} alt="cloud" className="absolute bottom-0 left-0 w-full object-cover z-1 pointer-events-none opacity-80"/>

            {/* Main Content Area */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-4 z-10 sm:p-8 sm:px-20 flex flex-col gap-4 justify-center items-center text-center w-full max-w-4xl"
            >
                <motion.img 
                    animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    src={plane} 
                    alt="plane" 
                    className="w-26 mb-[-25px] z-2 ml-20 sm:ml-40"
                />
                
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                    Start sending <br className="sm:hidden" /> smarter today.
                </h2>
                
                <p className="text-lg sm:text-xl opacity-90 max-w-2xl font-light">
                    Connect with verified travelers, save on delivery, and earn from trips you’re already making.
                </p>
                
                {/* Buttons with Hover Effects */}
                <div className="z-10 flex gap-4 mt-8 flex-col sm:flex-row w-full sm:w-fit">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                            onClick={()=>{setIsModalOpen(true)}} 
                            title="Start Sending Package" 
                            className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-full sm:!w-fit !py-4 shadow-xl shadow-blue-900/20"
                        />
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                            onClick={()=>{setIsModalOpen(true)}} 
                            title="Earn While You Travel" 
                            className="!bg-white !text-primaryAlt whitespace-nowrap !w-full sm:!w-fit !border-0 !py-4 shadow-lg"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                <div className="border-[14vh] sm:border-[10vw] w-fit rounded-full border-primary">
                    <div className="z-[1] rounded-full w-[75vh] h-[75vh] sm:w-[80vw] sm:h-[80vw] bg-[#103db9] border-[8vh] sm:border-[6vw] border-primaryAlt" />
                </div>
            </div>
        </div>
    );
};

export default Section5;