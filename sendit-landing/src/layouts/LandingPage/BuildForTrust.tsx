import { useState } from "react";
import { motion, type Variants } from "framer-motion"; // Added Variants type
import { builtForTrust, ratings, escrowProtection, verifiedIdentities, insurance } from "../../assets/images"
import { Button } from "../../components/Button"
import CustomModal from "../../components/CustomModal";

// 1. Explicitly type the variants outside the component
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
};

const BuiltForTrust = () => {  
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-customOrange w-full rounded-t-[50px] flex flex-col items-center justify-center p-4 sm:p-8 !py-16 sm:!px-[5vw] overflow-hidden">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:items-start text-left gap-8">
                
                {/* Left Side: Text and Cards */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:w-[50%] flex flex-col justify-start"
                >
                    <motion.h2 variants={itemVariants} className="mb-8 text-customBrown !font-extrabold leading-tight">
                        Built for trust, from the ground up.
                    </motion.h2>

                    {/* Mobile Image */}
                    <div className="sm:hidden gap-6 mb-10 flex flex-col items-center">
                        <motion.h2 variants={itemVariants} className="text-white !text-lg text-left sm:text-center">
                            Sending with a stranger shouldn’t feel risky. That’s why SendIt is designed to protect you at every step.
                        </motion.h2>
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            src={builtForTrust} 
                            alt="Built for Trust" 
                            className="w-full max-w-[400px]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Card icon={escrowProtection} title="Escrow Protection" description="Your payment is held securely and only released after delivery."/>
                        <Card icon={verifiedIdentities} title="Verified Identities" description="Carriers go through ID and profile verification."/>
                        <Card icon={ratings} title="Ratings & Reviews" description="Choose based on real experiences from other users."/>
                        <Card icon={insurance} title="Insurance Option" description="Extra protection for valuable packages."/>
                    </div>
                    
                    <motion.div variants={itemVariants}>
                        <Button onClick={()=>setIsModalOpen(true)} title="Start Enjoying Safe Delivery" className="!bg-customBrown !w-fit mt-8 hover:shadow-xl transition-shadow"/>
                    </motion.div>
                </motion.div>

                {/* Right Side: Desktop Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="hidden gap-12 w-[45%] sm:flex flex-col justify-center items-end"
                >
                    <h2 className="text-white !text-xl max-w-[400px] leading-relaxed">
                        Sending with a stranger shouldn’t feel risky. That’s why SendIt is designed to protect you at every step.
                    </h2>
                    <motion.img 
                        animate={{ 
                            y: [0, -15, 0],
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        src={builtForTrust} 
                        alt="Built for Trust" 
                        className="w-full max-w-[480px] drop-shadow-2xl"
                    />
                </motion.div>

            </div>
        </div>
    )
}

const Card = ({title, description, icon}: {title: string, description: string, icon: string}) => {
    return (
        <motion.div 
            variants={cardItemVariants} // Now properly typed and globally defined
            whileHover={{ x: 5 }}
            className="text-white p-4 pb-2 rounded-lg w-full flex flex-col items-start text-left group"
        >
            <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-2"
            >
                <img src={icon} alt={title} className="w-12 h-12 object-contain filter brightness-110"/>
            </motion.div>
            
            <h2 className="text-xl font-bold mb-1 group-hover:text-customBrown transition-colors">{title}</h2>
            <p className="!font-extralight text-sm opacity-90">{description}</p>
        </motion.div>
    )
}

export default BuiltForTrust;