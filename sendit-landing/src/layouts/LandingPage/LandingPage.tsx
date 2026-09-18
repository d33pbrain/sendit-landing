import Header from "../Header";
import { bgLogo } from "../../assets/images";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Footer from "./Footer";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { motion } from "framer-motion";
import LaunchCountdown from "./LaunchCountdown";

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fullText = "Sending packages shouldn’t be this stressful, yet it often is: expensive, slow, and filled with uncertainty, and when you turn to informal options, you’re left with no tracking, and no peace of mind.";
    const words = fullText.split(" ");

    // Animation variants
    const container = {
        hidden: { color: "#00000099" },
        visible: {
            color: "#000000",
            transition: {
                staggerChildren: 0.08, // This creates the "reading" speed
            },
        },
    };

    const child = {
        visible: {
            color: "#000000",
            transition: {
                duration: 0.4,
            },
        },
        hidden: { color: "#00000099" },
    };

    return (
        <div className="bg-primary overflow-hidden  flex flex-col">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            {/* Hero */}
            <img src={bgLogo} alt="bgLogo" className="z-0 absolute   sm:top-0 h-[80vh] sm:w-[110vh] right-0 sm:h-fit  !overflow-hidden bottom-[-30px]"/>
            <div className="!overflow-hidden relative ">
                
                {/* Content */}
                <div className=" mt-30 sm:mt-50  p-4 sm:p-8 py-12 text-center  sm:text-left text-white">
                    <div className="sm:w-[70%] md:w-[70%]">
                        <h1 className="!leading-tight">
                            Send packages faster with travelers already going your way
                        </h1>
                        <p className="mt-4">Connect with verified travelers, agree on a price, and deliver your package the same day.</p>
                        
                    </div>
                     {/*Buttons  */}
                    <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:w-fit">
                        <Button onClick={() => setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !sm:w-fit  "/>
                        <Button onClick={() => setIsModalOpen(true)} title="Earn money as a Carrier" className="!bg-[#F0F3FE] !text-primaryAlt whitespace-nowrap !sm:w-fit !border-0 "/>
                    </div>
                    {/* Features */}
                    <div className="mt-4 gap-4 whitespace-nowrap flex-wrap text-white flex justify-center sm:justify-start items-center">
                        <div className="flex justify-center items-center gap-1">
                            <Icon icon="tabler:shield-check" width={20} className="text-white" />
                            <p>Secure payments</p>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <Icon icon="material-symbols:verified-outline" width={20} className="text-white" />
                            <p>Verified users</p>
                        </div>
                        <div className="w-fit flex justify-center items-center gap-1">
                            <Icon icon="lucide:route" width={20} className="text-white" />
                            <p>Real-time tracking</p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Other sections */}
            <div className="z-2 mt-[10vh] sm:mt-[12vw] ">
                
                {/* Section 2 - Staggered Reading Animation */}
                <div className="text-center flex flex-col justify-center items-center p-4 sm:p-8 sm:px-20 !py-16 bg-[#F5F4DF]">
                    <motion.h2 
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                        className="max-w-[600px] flex flex-wrap justify-center"
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                className="mr-[0.25em]" // Keeps standard word spacing
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <LaunchCountdown/>
                </div>

                {/* Section 3 */}
                <Section3/>
                {/* Section 4 */}
                <Section4/>
                {/* Section 5 */}
                <Section5/>
                {/* Header */}
                <div className="z-100 w-full fixed top-0">
                    <Header/>
                </div>
                {/* Footer */}
                <Footer/>
            </div>
            
        </div>
    )
}

export default LandingPage;