import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { postPackage, getMatched, chooseCarrier, trackPackage } from "../../assets/images"
import { Button } from "../../components/Button"
import BuiltForTrust from "./BuildForTrust"
import CustomModal from "../../components/CustomModal";

const HowItWorks = () => {  
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div 
            ref={containerRef}
            className="bg-customYellow w-full rounded-t-[50px] flex flex-col items-center justify-center mt-8 pt-16"
        >
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            <div className="flex justify-center items-center">
                <h1 className="mb-[-100vh] text-customBrown !text-[50px] sm:!text-[80px] lg:!text-[180px]">
                    HOW IT WORKS
                </h1>
            </div>

            {/* Main Cards Container */}
            <div className="flex flex-col justify-center items-center gap-6 mt-8">
                <Card 
                    title="Post Your Package" 
                    description="Enter details, destination, and your price." 
                    icon={postPackage} 
                    index={1}
                    scrollYProgress={scrollYProgress}
                />
                <Card 
                    title="Get Matched or Receive Bids" 
                    description="Travelers going your way can accept or make an offer." 
                    icon={getMatched} 
                    index={2}
                    scrollYProgress={scrollYProgress}
                />
                <Card 
                    title="Choose Your Carrier" 
                    description="Pick the best option based on price, rating, or timing." 
                    icon={chooseCarrier} 
                    index={3}
                    scrollYProgress={scrollYProgress}
                />
                <Card 
                    title="Track & Receive" 
                    description="Follow your package in real time and confirm delivery." 
                    icon={trackPackage} 
                    index={4}
                    scrollYProgress={scrollYProgress}
                />
                <Button 
                onClick={()=>setIsModalOpen(true)} 
                title="Get Started for Free" 
                className="!bg-customBrown !w-fit mt-[-170px]"
            />
                
            </div>

            
            
            {/* Built for Trust */}
            <div className="w-full mt-20">
                <BuiltForTrust/>
            </div>
        </div>
    )
}

const Card = ({
    title, 
    description, 
    icon, 
    index,
    scrollYProgress
}: {
    title: string, 
    description: string, 
    icon: string, 
    index: number,
    scrollYProgress: any
}) => {

    const isEven = index % 2 === 0;

    // Each card moves at a different rate → creates overlap
    let y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -index * 100] // higher index = more upward movement
    );

    return (
        <motion.div 
            initial={{ opacity: 0, x: isEven ? 200 : -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ 
                once: true,
                amount: 0.3,
                margin: "0px 0px -50px 0px"
            }}
            transition={{ duration: 0.8 }}
            style={{ y, zIndex: index }}
            className="sticky top-28 border-1 border-customYellow bg-customBrown text-white p-4 py-6 rounded-lg w-[270px] flex flex-col gap-2 items-start text-left shadow-2xl"
        >
            <h2 className="p-1 px-3 rounded-[50%] bg-customYellow text-customBrown font-bold">
                {index}
            </h2>

            <div className="w-full flex justify-center">
                <img src={icon} alt={title} className="w-40"/>
            </div>

            <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="!font-extralight opacity-80">{description}</p>
            </div>
        </motion.div>
    )
}

export default HowItWorks;