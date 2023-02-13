import { useState } from "react";
const Item = ({ title, children }: { title: string | null; children: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border w-full rounded shadow-sm">
      <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg viewBox="0 0 24 24" className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}>
            <polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" points="2,7 12,17 22,7" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
export const Faq = () => {
  return (
    <div className="px-4 py-16 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl w-full sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">Principais Perguntas</h2>
        </div>
        <div className="space-y-4">
          <Item title="The quick, brown fox jumps over a lazy dog?">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</Item>
          <Item title="The first mate and his Skipper too will do?">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</Item>
          <Item title="Is the Space Pope reptilian!?">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</Item>
          <Item title="How much money you got on you?">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</Item>
        </div>
      </div>
    </div>
  );
};
