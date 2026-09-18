import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import api from '../api/axios'; 
import { Icon } from "@iconify/react";
import Confetti from 'react-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Internal state for window size to avoid library hook conflicts
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle Window Resize for Confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFinalClose = () => {
    setFormData({ firstName: '', lastName: '', email: '' });
    setIsSuccess(false);
    setError(null);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
      };

      const response = await api.post('/landing/waitlist/', payload);

      if (response.status === 201 || response.status === 200) {
        setIsSuccess(true);
      }
    } catch (err: any) {
      const serverError = err.response?.data;
      setError(serverError?.email?.[0] || serverError?.detail || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleFinalClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleFinalClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      {/* Confetti Overlay */}
      {isSuccess && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={150}
          recycle={false}
          colors={['#1E368E', '#335CF4', '#F5F4DF', '#FFD700']}
        />
      )}

      <div 
        ref={modalRef}
        className="relative w-full max-w-md bg-[#F5F4DF] rounded-2xl shadow-2xl p-8 transform transition-all animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button 
          onClick={handleFinalClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className='flex flex-col text-center items-center justify-center gap-2'>
          {isSuccess ? (
            <div className="py-8 flex flex-col items-center animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon icon="solar:check-circle-bold" className="text-primary text-5xl" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Welcome to the inner circle!</h2>
              <p className="text-[#333333E5] mt-2">
                You've successfully secured your spot. We've sent a confirmation to <br/>
                <strong>{formData.email}</strong>. Stay tuned for your exclusive invite!
              </p>
              <button 
                onClick={handleFinalClose} 
                className="mt-6 w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all"
              >
                Awesome, I'll keep an eye out!
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">You're early.</h2>
              <p className='text-[#333333E5]'>
                We’re opening SendIt in waves. Join now and be among the first to send packages or earn from trips.
              </p>

              <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4 text-left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    disabled={loading}
                    className="w-full px-6 py-3 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all disabled:opacity-50"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    disabled={loading}
                    className="w-full px-6 py-3 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all disabled:opacity-50"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  disabled={loading}
                  className="w-full px-6 py-3 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all disabled:opacity-50"
                  required
                />

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <div className="pt-2 flex flex-col gap-4 items-center justify-center">
                  <button 
                    disabled={loading}
                    type="submit"
                    className='flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-[#1E368E] bg-[#F0F3FE] border border-[#1E368E] hover:bg-white transition-all active:scale-95 disabled:opacity-70'
                  >
                    {loading ? (
                      <Icon icon="line-md:loading-twotone-loop" className="text-2xl" />
                    ) : (
                      "Save my spot"
                    )}
                  </button>
                  <p className='text-xs text-[#333333] italic text-center'>
                    By joining, you’ll be first to know when SendIt goes live in your area.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;