import React from "react";
import { ArrowRight } from "lucide-react";

// const PromoBanner = () => {
//   return (
//     <section className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg my-10">
//       {/* Background Image */}
//       <img
//         src="/coins.png"
//         alt="Luxury Bedroom Interior"
//         className="absolute inset-0 w-full h-full object-cover brightness-90"
//       />

//       {/* Overlay for gradient effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-xl">
//         <h3 className="text-amber-400 font-semibold tracking-wide mb-2">
//           EXCLUSIVE FESTIVE DEAL
//         </h3>

//         <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//           Upgrade Your Furniture,<br /> Elevate Your Lifestyle
//         </h1>

//         <p className="text-gray-200 mb-6">
//           Discover handcrafted elegance — quality wooden furniture designed to
//           bring timeless charm and comfort to your home.
//         </p>

//         <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200">
//           Shop Now <ArrowRight className="w-5 h-5" />
//         </button>
//       </div>
//     </section>
//   );
// };
const PromoBanner = () => {
  return (
    <section className="relative w-full min-h-[350px]  overflow-hidden shadow-lg my-10">
      {/* Background Image */}
      <img
        src="/coins.png"
        alt="Luxury Bedroom Interior"
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 py-10 text-white max-w-xl">
        <h3 className="text-amber-400 font-semibold tracking-wide mb-3 text-sm md:text-base">
          EXCLUSIVE FESTIVE DEAL
        </h3>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Upgrade Your Furniture,<br /> Elevate Your Lifestyle
        </h1>

        <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed">
          Discover handcrafted elegance — quality wooden furniture designed to
          bring timeless charm and comfort to your home.
        </p>

        <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 w-fit text-sm md:text-base">
          Shop Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
};
export default PromoBanner;
