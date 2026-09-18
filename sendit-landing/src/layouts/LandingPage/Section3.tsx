import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { plane, OptionalInsurance, RealTimeChat, FlexiblePricing, VerifiedCarriers, SecurePayments, SameDayDelivery } from "../../assets/images";
import { Button } from "../../components/Button";
import HowItWorks from "./HowItWorks";
import CustomModal from "../../components/CustomModal";

const Section3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const words = ["faster way", "safer way", "cheaper way"];

    // Cycle through the words
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % words.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 260, damping: 20 } 
        }
    };

    return (
        <div id="perks" className="flex flex-col justify-center items-center text-center w-full text-white bg-primaryAlt overflow-hidden">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            <div className="p-4 sm:p-8 sm:px-20 flex flex-col justify-center items-center text-center w-full max-w-7xl">
                
                {/* Animated Header Section */}
                <div className="relative flex flex-col items-center">
                    <motion.img 
                        initial={{ x: -100, opacity: 0, rotate: -10 }}
                        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src={plane} 
                        alt="plane" 
                        className="w-20 mb-[-20px] z-[2] ml-18 sm:ml-12 md:ml-[-40px]"
                    />
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="sm:w-[70%] md:w-full !font-bold flex flex-wrap justify-center items-center gap-x-2"
                    >
                        A smarter, 
                        <div className="relative inline-flex flex-col h-[1.2em] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={words[textIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-black px-2 bg-customYellow transform -rotate-1"
                                >
                                    {words[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div> 
                        to deliver anything.
                    </motion.h2>
                </div>

                {/* Staggered Perks Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 sm:flex-wrap justify-center w-full"
                >
                    <Card variants={cardVariants} icon={SameDayDelivery} title="Same-Day Delivery" description="Send packages through travelers already heading to your destination."/>
                    <Card variants={cardVariants} icon={FlexiblePricing} title="Flexible Pricing" description="Accept a price or receive bids, choose what works for you."/>
                    <Card variants={cardVariants} icon={SecurePayments} title="Secure Payments" description="Your money is held safely and only released after delivery."/>
                    <Card variants={cardVariants} icon={VerifiedCarriers} title="Verified Carriers" description="Every carrier is verified, so you know who you’re trusting."/>
                    <Card variants={cardVariants} icon={RealTimeChat} title="Real-Time Chat" description="Coordinate easily with in-app messaging."/>
                    <Card variants={cardVariants} icon={OptionalInsurance} title="Optional Insurance" description="Protect high-value items for extra peace of mind."/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                >
                    <Button onClick={()=>setIsModalOpen(true)} title="Post your package for free" className="!bg-[#F0F3FE] !text-primaryAlt !w-fit !py-2 mt-12 hover:scale-105 transition-transform"/>
                </motion.div>
            </div>

            {/* How it works section - Slides up smoothly */}
            <motion.div 
                id="how" 
                className="mt-16 w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <h2 className="!font-bold mb-4">Simple. Transparent. Reliable.</h2>
                <HowItWorks/>
            </motion.div>
        </div>
    )
}

const Card = ({title, description, icon, variants}: {title: string, description: string, icon: string, variants: any}) => {
    return (
        <motion.div 
            variants={variants}
            whileHover={{ y: -8, }}
            className="bg-primary text-white p-6 rounded-2xl w-full sm:w-[280px] lg:w-[300px] flex flex-col gap-3 items-start text-left shadow-lg border border-white/5 transition-colors cursor-default group"
        >
            <div className="p-2 rounded-lg bg-white/10 transition-colors duration-300">
                <img src={icon} alt={title} className="w-8 h-8 object-contain  transition-all" />
            </div>
            <p className="text-xl !font-extrabold">{title}</p>
            <p className="text-sm !font-extralight opacity-80 leading-relaxed">{description}</p>
        </motion.div>
    )
}

export default Section3;