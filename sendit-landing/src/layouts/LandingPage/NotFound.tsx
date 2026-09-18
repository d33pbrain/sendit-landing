import { useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react";
import { logo3 } from "../../assets/images"; // Adjust path to your logo

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#010413] flex flex-col items-center justify-center px-6 py-12 overflow-hidden relative">
      
      {/* Background Decorative Elements - Matching your Landing style */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#1E368E]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-[#335CF4]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        
        {/* Logo */}
        <img 
          src={logo3} 
          alt="SendIt Logo" 
          className="w-32 mb-12 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => navigate('/')}
        />

        {/* 404 Visual */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-white/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon 
              icon="solar:box-minimalistic-broken" 
              className="text-8xl md:text-9xl text-[#335CF4] animate-bounce"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          This package went to the wrong address.
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all active:scale-95"
          >
            <Icon icon="solar:arrow-left-linear" width={20} />
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#335CF4] to-[#1E368E] hover:opacity-90 shadow-lg shadow-blue-900/20 transition-all active:scale-95"
          >
            <Icon icon="solar:home-2-linear" width={20} />
            Back to Home
          </button>
        </div>

        {/* Support Link */}
        <p className="mt-12 text-gray-500 text-sm">
          Think this is a mistake? <span onClick={()=>navigate('/#contact')} className="cursor-pointer text-[#335CF4] hover:underline">Contact Support</span>
        </p>
      </div>

      {/* Brand Watermark (matching your footer style) */}
      <div className="absolute bottom-[-5%] whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[20vw] font-bold text-white">Sendittt.</h1>
      </div>
    </div>
  );
};

export default NotFound;