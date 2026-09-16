import { logo3, package as package_, luggage } from "../../assets/images";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../../api/axios.ts"; 
import { type LegalDocument, legalDocuments } from "./Documents/privacyPolicy.ts";

const Footer = () => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const [legalModalKey, setLegalModalKey] = useState<string | null>(null);

    // Robust document lookup that handles camelCase, kebab-case, or lowercase mismatches
    const getActiveDoc = (): LegalDocument | null => {
        if (!legalModalKey) return null;
        if (legalDocuments[legalModalKey]) return legalDocuments[legalModalKey];
        
        const normalizedKey = legalModalKey.toLowerCase().replace(/[-_]/g, '');
        const foundKey = Object.keys(legalDocuments).find(
            k => k.toLowerCase().replace(/[-_]/g, '') === normalizedKey
        );
        
        return foundKey ? legalDocuments[foundKey] : null;
    };

    const activeDoc: LegalDocument | null = getActiveDoc();

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage(null);

        try {
            const response = await api.post('/landing/subscribe/', { email });

            if (response.status === 201 || response.status === 200) {
                setStatusMessage({ 
                    type: 'success', 
                    text: response.data.message || "You're in! 🚀 Check your inbox soon." 
                });
                setEmail('');
            }
        } catch (error: any) {
            const errorMsg = error.response?.data?.email?.[0] || 
                             error.response?.data?.message || 
                             "Something went wrong. Try again!";
            
            setStatusMessage({ type: 'error', text: errorMsg });
        } finally {
            setLoading(false);
            setTimeout(() => setStatusMessage(null), 5000);
        }
    };

    return (
        <div className="relative flex flex-col justify-center items-center text-center w-full text-white pt-10 bg-[#010413] overflow-hidden">
            {/* Background Icons - Added pointer-events-none so they never block clicks */}
            <img src={package_} alt="Package" className="absolute w-[20vw] bottom-0 left-[5vw] z-0 pointer-events-none opacity-40 sm:opacity-100" />
            <img src={luggage} alt="Luggage" className="absolute w-[20vw] right-0 bottom-0 z-0 pointer-events-none opacity-40 sm:opacity-100"/>
            
            <div className="px-4 sm:px-8 flex flex-col gap-8 w-full sm:flex-row justify-between relative z-20 max-w-7xl mx-auto">
                {/* First Column */}
                <div className="flex flex-col text-left sm:w-[45%] gap-4 justify-start items-start">
                    <img onClick={() => window.location.reload()} src={logo3} alt="logo2" className="w-30 cursor-pointer" />
                    <p className="text-gray-300">Connect with verified travelers, save on delivery, and earn from trips you’re already making.</p>
                    
                    {/* Form Section */}
                    <div className="flex flex-col w-full items-start justify-center gap-3">
                        <form 
                            onSubmit={handleSubscribe}
                            className="relative flex items-center w-full"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                disabled={loading}
                                className="w-full px-8 py-3 text-gray-700 bg-white border-2 border-transparent rounded-full outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 disabled:bg-gray-100"
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-1.5 px-6 py-2 font-medium text-white transition-all bg-gradient-to-r from-[#335CF4] to-[#1E368E] rounded-full hover:opacity-95 active:scale-95 shadow-md disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center min-w-[110px] cursor-pointer"
                            >
                                {loading ? (
                                    <Icon icon="line-md:loading-twotone-loop" className="text-xl" />
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>

                        {/* Status Feedback */}
                        {statusMessage && (
                            <div className={`flex items-center gap-2 px-4 py-1 rounded-lg transition-all animate-in fade-in slide-in-from-top-2 duration-300 ${
                                statusMessage.type === 'success' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                            }`}>
                                <Icon icon={statusMessage.type === 'success' ? "circle-flags:check" : "material-symbols:error-outline"} />
                                <span className="text-sm font-medium">{statusMessage.text}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex flex-col text-left sm:w-fit gap-4 sm:items-start">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#perks" className="text-gray-300 hover:text-white transition-colors">Perks</a></li>
                        <li><a href="#how" className="text-gray-300 hover:text-white transition-colors">How it works</a></li>
                        <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">Faqs</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact us</a></li>
                        <li>
                            <button 
                                onClick={() => setLegalModalKey('termsOfService')} 
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                            >
                                Terms of Service
                            </button>
                        </li>  
                        <li>
                            <button 
                                onClick={() => setLegalModalKey('privacyPolicy')} 
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                            >
                                Privacy Policy
                            </button>
                        </li>  
                    </ul>
                </div>

                {/* Third Column */}
                <div className="flex flex-col text-left sm:w-fit gap-4 justify-start sm:items-start">
                    <h2 className="text-xl font-bold">Follow Us</h2>
                    <div className="flex gap-3">
                        <a href="#" className="p-2.5 rounded-full bg-white hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"><Icon icon="prime:twitter" width={20} className="text-primaryAlt"/></a>
                        <a href="#" className="p-2.5 rounded-full bg-white hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"><Icon icon="mdi:linkedin" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/senditt26" className="p-2.5 rounded-full bg-white hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"><Icon icon="ri:instagram-fill" width={20} className="text-primaryAlt"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@senditt26" className="p-2.5 rounded-full bg-white hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"><Icon icon="ic:baseline-tiktok" width={20} className="text-primaryAlt"/></a>
                    </div>
                </div>
            </div>

            {/* Giant Background Watermark Text - Added pointer-events-none so it never blocks clicks */}
            <h1 className="!text-[22vw] !font-bold select-none leading-none mt-10 relative z-10 pointer-events-none text-white/90">
                Send<span className="!font-light">ittt</span>.
            </h1>

            {/* Legal Document Modal Popup */}
            {activeDoc && (
                <div className="fixed inset-0 !z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
                    <div className="bg-[#0b1021] text-white w-full max-w-3xl max-h-[85vh] rounded-2xl border border-gray-800 flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#060917]">
                            <h3 className="text-xl font-bold">{activeDoc.title}</h3>
                            <button 
                                onClick={() => setLegalModalKey(null)}
                                className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <Icon icon="material-symbols:close" width={22} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto space-y-6 text-left text-gray-300 text-sm">
                            {(activeDoc.effectiveDate || activeDoc.lastUpdated) && (
                                <div className="text-xs text-gray-400 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                                    {activeDoc.effectiveDate && <span>Effective Date: <strong>{activeDoc.effectiveDate}</strong></span>}
                                    {activeDoc.effectiveDate && activeDoc.lastUpdated && <span className="mx-2">|</span>}
                                    {activeDoc.lastUpdated && <span>Last Updated: <strong>{activeDoc.lastUpdated}</strong></span>}
                                </div>
                            )}

                            {activeDoc.sections.map((section) => (
                                <div key={section.id} className="space-y-2">
                                    <h4 className="text-base font-semibold text-white border-b border-gray-800 pb-1">
                                        {section.index}. {section.title}
                                    </h4>

                                    {section.content && section.content.map((paragraph, idx) => (
                                        <p key={idx} className="leading-relaxed text-gray-300">
                                            {paragraph}
                                        </p>
                                    ))}

                                    {section.subsections && (
                                        <div className="space-y-3 mt-3">
                                            {section.subsections.map((sub, sIdx) => (
                                                <div key={sIdx} className="pl-4 border-l-2 border-blue-500/40 space-y-1">
                                                    <h5 className="font-medium text-white">{sub.title}</h5>
                                                    
                                                    {Array.isArray(sub.content) ? (
                                                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                                            {sub.content.map((item, cIdx) => (
                                                                <li key={cIdx}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-gray-400">{sub.content}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-gray-800 bg-[#060917] flex justify-end">
                            <button 
                                onClick={() => setLegalModalKey(null)}
                                className="px-6 py-2 text-xs font-semibold bg-gradient-to-r from-[#335CF4] to-[#1E368E] text-white rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;