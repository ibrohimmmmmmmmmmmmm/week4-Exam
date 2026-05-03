import React, { useState } from "react";
import { X, Check } from "lucide-react";
import img from "./Rectangle 157.png";

export default function FormRequest() {
  const [isOpen, setIsOpen] = useState(true);
  const [agreed, setAgreed] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-[#e39a54] text-white px-6 py-3 rounded-full shadow-lg text-xs font-bold uppercase"
      >
        Задать вопрос
      </button>
    );
  }

  return (
    <div className=" bg-gray-200 fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-2 md:px-4">

      <div className="bg-white w-full max-w-[1000px] flex flex-col md:flex-row shadow-2xl overflow-hidden">

        <div className="hidden md:block md:w-[45%] lg:w-[420px]">
          <img
            src={img}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[55%] p-6 md:p-10 relative flex flex-col justify-center">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-lg md:text-xl font-bold text-center leading-tight mb-2">
            Укажите контакты для связи и напишите вопрос
          </h2>

          <p className="text-xs md:text-sm text-center text-gray-500 mb-6">
            Наш менеджер свяжется с вами в ближайшее время
          </p>

          <form className="space-y-4">

            <div>
              <p className="text-xs mb-1">Имя *</p>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-[#e39a54]"
              />
            </div>

            <div>
              <p className="text-xs mb-1">Телефон *</p>
              <input
                type="tel"
                className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-[#e39a54]"
              />
            </div>

            <div>
              <p className="text-xs mb-1">Комментарий *</p>
              <textarea
                className="w-full border border-gray-300 px-3 py-2 h-[90px] resize-none outline-none focus:border-[#e39a54]"
              />
            </div>

            <button
              disabled={!agreed}
              className={`w-full py-3 text-sm font-bold transition ${
                agreed
                  ? "bg-[#e39a54] text-white hover:opacity-90"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              Задать вопрос
            </button>

            <div
              onClick={() => setAgreed(!agreed)}
              className="flex gap-2 items-start cursor-pointer"
            >
              <div
                className={`w-4 h-4 border flex items-center justify-center mt-[2px] ${
                  agreed ? "bg-black text-white border-black" : "border-gray-400"
                }`}
              >
                {agreed && <Check size={12} />}
              </div>

              <p className="text-[11px] text-gray-500 leading-tight">
                Я согласен с политикой обработки персональных данных
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
