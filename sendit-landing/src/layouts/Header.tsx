import { Icon } from "@iconify/react/dist/iconify.js";
import { logo2, logo3 } from "../assets/images";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomModal from "../components/CustomModal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    
    const { scrollY } = useScroll();

    useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 640); 
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    // 1. Logo transformations
    const mainLogoOpacity = useTransform(scrollY, [0, 50], [1, 0]);
    const mainLogoScale = useTransform(scrollY, [0, 50], [1, 0.9]);

    // 2. Nav Logo transformations
    const navLogoOpacity = useTransform(scrollY, [50, 100], [0, 1]);
    const navLogoWidth = useTransform(scrollY, [50, 100], ["0px", "80px"]);

    // 3. Conditional Background Logic
    const scrollBgMobile = useTransform(
        scrollY, 
        [0, 50], 
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
    );
    const scrollBgDesktop = useTransform(
        scrollY, 
        [0, 50], 
        ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.7)"]
    );

    const pillBg = isDesktop ? scrollBgDesktop : scrollBgMobile;

    // 4. Effects
    const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
    const pillShadow = useTransform(
        scrollY, 
        [0, 50], 
        ["none", "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"]
    );

    // 5. Positioning
    const pillLeft = useTransform(scrollY, [0, 150], ["100%", "50%"]);
    const pillX = useTransform(scrollY, [0, 150], ["-100%", "-50%"]);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="fixed top-0 left-0 w-full z-[80] pointer-events-none">
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            
            {/* Top Announcement Banner */}
            <div className="w-full  bg-black text-white text-center py-2.5 px-4 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 flex-wrap pointer-events-auto">
                <p className="text-gray-200">
                    🚀 We're almost here. Launching <span className="font-bold text-white">September 21.</span>
                </p>
                <p className="text-gray-300">
                    Be among the first to send and earn.
                </p>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="underline underline-offset-4 font-bold text-white hover:text-gray-200 transition-colors mt-0.5"
                >
                    Join the waitlist
                </button>
            </div>

            {/* Navigation Bar Wrapper */}
            <div className="p-2 pt-4 sm:p-4 md:px-8">
                <div className="relative w-full h-12 flex items-center">
                    <motion.img 
                        style={{ opacity: mainLogoOpacity, scale: mainLogoScale }}
                        onClick={() => window.location.reload()} 
                        src={logo3} 
                        alt="sendit" 
                        className="ml-2 w-24 md:w-26 pointer-events-auto cursor-pointer"
                    />

                    <motion.div 
                        style={{ 
                            left: pillLeft,
                            x: pillX,
                            backgroundColor: pillBg,
                            backdropFilter: backdropBlur,
                            WebkitBackdropFilter: backdropBlur,
                            boxShadow: pillShadow,
                        }}
                        className="w-full sm:w-fit flex absolute items-center justify-between gap-2 md:gap-4 p-2 px-4 pr-2 rounded-full text-primary pointer-events-auto whitespace-nowrap"
                    >
                        <motion.div 
                            style={{ opacity: navLogoOpacity, width: navLogoWidth }}
                            className="overflow-hidden flex items-center"
                        >
                            <img 
                                src={logo2} 
                                alt="sendit" 
                                className="min-w-[70px] w-[90px] mr-2 cursor-pointer" 
                                onClick={() => window.location.reload()} 
                            />
                        </motion.div>

                        <div className="w-fit hidden sm:flex gap-2 items-center">
                            <a href="#perks" className=" cursor-pointer hover:text-primaryAlt">Perks</a>
                            <a href="#how" className="cursor-pointer hover:text-primaryAlt">How it works</a>
                            <a href="#faq" className="cursor-pointer hover:text-primaryAlt">Faq</a>
                            <div onClick={() => setIsModalOpen(true)} className="hover:-translate-y-1 !text-primaryAlt hover:text-primary cursor-pointer rounded-full !bg-none !w-fit !px-2 !py-2 hover:bg-[#F0F3FE]"><p className="!font-semibold !tracking-wider sm:block">Become a Carrier</p></div>
                            <Button onClick={()=>setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !w-fit !px-2 !py-2"/>
                        </div>
                        <div onClick={handleMenuClick} className="ml-auto cursor-pointer sm:hidden rounded-full p-4 py-2 bg-primaryAlt pointer-events-auto">
                            <Icon icon="tabler:menu" width={24} className="cursor-pointer text-white" />     
                        </div>
                    </motion.div>
                </div>

                {isMenuOpen && (
                    <div className="sm:hidden pb-12 rounded-b-xl absolute top-0 left-0 w-full bg-white text-black flex flex-col items-start p-4 gap-4 py-4 pointer-events-auto">
                        <div className="mb-4 flex justify-between w-full">
                            <img src={logo2} alt="sendit" className="w-24 md:w-42"/>
                            <div onClick={handleMenuClick} className="cursor-pointer rounded-full p-4 py-2 bg-primaryAlt">
                                <Icon icon="tabler:x" width={24} className="cursor-pointer text-white" />
                            </div>
                        </div>
                        <a href="#perks" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">Perks</a>
                        <a href="#how" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">How it works</a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-primaryAlt !text-lg">Faq</a>
                        <Button onClick={() => setIsModalOpen(true)} title="Become a Carrier" className="!bg-[#F0F3FE] !text-primaryAlt !border-0 !py-2"/>
                        <Button onClick={() => setIsModalOpen(true)} title="Post a package" className="bg-gradient-to-r from-[#335CF4] to-[#1E368E] !py-2"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;