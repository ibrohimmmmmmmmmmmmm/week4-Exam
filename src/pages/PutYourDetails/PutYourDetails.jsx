import React, { useState, useEffect } from "react";
import { X, Phone, Check, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function PutYourDetails() {
  const [isOpen, setIsOpen] = useState(true);
  const [agreed, setAgreed] = useState(true);

  // FORCE FIX: Ensure body doesn't scroll and modal stays visible
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Added for iOS Safari "bounce" issues
      document.documentElement.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  if (!isOpen) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="w-full max-w-xs bg-[#1a1a1a] text-white px-8 py-4 uppercase tracking-widest text-[11px] font-bold hover:bg-[#EFA35A]"
        >
          Заказать звонок
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col justify-end sm:justify-center items-center">
      <div
        className="fixed inset-0  backdrop-blur-sm transition-opacity"
        style={{ height: '100dvh', width: '100vw' }}
        onClick={handleClose}
      />
      <div className="relative w-full sm:max-w-[450px] bg-white shadow-2xl animate-slide-up sm:animate-fade-in overflow-hidden rounded-t-[20px] sm:rounded-[2px] z-[100000]">
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1 sm:hidden" />

        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-black z-20"
        >
          <X size={24} />
        </button>

        <div className="px-6 py-10 sm:px-12 sm:py-12 max-h-[85dvh] overflow-y-auto">
          <h2 className="mb-8 text-center text-xl font-medium leading-tight text-gray-900">
            Оставьте свои данные и мы перезвоним вам
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Имя *</label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 bg-gray-50 px-4 py-4 text-base outline-none focus:border-[#EFA35A] focus:bg-white"
                placeholder="Иван"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Телефон *</label>
              <input
                type="tel"
                required
                className="w-full border border-gray-200 bg-gray-50 px-4 py-4 text-base outline-none focus:border-[#EFA35A] focus:bg-white"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <NavLink
  to="/formrequest"
  className={`w-full flex items-center justify-center py-4 md:py-5 rounded-xl text-sm md:text-base font-semibold uppercase tracking-widest transition-all duration-300
  ${
    agreed
      ? "bg-[#EFA35A] text-white shadow-md hover:bg-[#d9924c] hover:shadow-lg active:scale-[0.98]"
      : "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
  }`}
>
  Перезвоните мне
</NavLink>


            <div className="flex cursor-pointer items-start gap-3" onClick={() => setAgreed(!agreed)}>
              <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-all
                ${agreed ? "border-[#EFA35A] bg-[#EFA35A] text-white" : "border-gray-300 bg-white"}`}>
                {agreed && <Check size={14} strokeWidth={3} />}
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                Я согласен с политикой обработки данных
              </p>
            </div>
          </form>
        </div>
        <div className="bg-gray-50 py-4 flex items-center justify-center gap-2 border-t border-gray-100">
          <ShieldCheck size={14} className="text-green-600" />
          <span className="text-[9px] uppercase tracking-widest text-gray-400">Ваши данные защищены</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up { animation: slideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}} />
    </div>
  );
}