// "use client";

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section id="hero" className="relative min-h-screen overflow-hidden bg-[#f8f8f6] pt-24">
//       <div className="mx-auto max-w-[1800px] px-6 md:px-10 xl:px-16">
//         {/* Top */}
//         <div className="mb-4 flex items-end justify-between">
//           <span className="text-xl font-bold tracking-tight text-black">
//             01
//           </span>

//           <span className="hidden text-[12px] font-semibold uppercase tracking-[0.9em] text-black/70 lg:block">
//             BASED IN INDIA
//           </span>
//         </div>

//         {/* Huge Title */}
//         <div className="relative">
//           <h1 className="select-none text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-black sm:text-[16vw] lg:text-[13vw]">
//             CREATIVE
//             <br />
//             DEVELOPER
//           </h1>

//           {/* Floating Image */}
//           <div className="absolute left-1/2 top-[42%] z-20 w-[230px] -translate-x-1/2 md:w-[320px] lg:w-[380px] xl:w-[430px]">
//             <div className="overflow-hidden shadow-2xl">
//               <Image
//                 src="/images/profile.png"
//                 alt="Portrait"
//                 width={700}
//                 height={900}
//                 priority
//                 className="h-auto w-full object-cover grayscale transition duration-700 hover:scale-105"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-14 flex flex-col justify-between gap-12 lg:mt-6 lg:flex-row">
//           <div className="space-y-3">
//             <p className="text-2xl font-black uppercase tracking-tight">
//               / Full Stack Development
//             </p>

//             <p className="text-2xl font-black uppercase tracking-tight">
//               / UI / UX Design
//             </p>

//             <p className="text-2xl font-black uppercase tracking-tight">
//               / Motion & GSAP
//             </p>
//           </div>

//           <div className="max-w-md">
//             <p className="text-sm leading-8 text-black/65 md:text-base">
//               I build modern websites and digital experiences with
//               performance, motion, and clean design. Focused on creating
//               memorable products using React, Next.js, Three.js and GSAP.
//             </p>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// }








"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#f8f8f6] flex flex-col">
      {/* Big Title Area */}
      <div className="flex-1 flex items-center justify-center min-h-[55vh] pt-20 pb-12 px-6">
        <h1 
          className="text-[16vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-[-0.07em] leading-[0.82] text-center text-black"
        >
          CREATIVE
          <br />
          DESIGNER
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-end">
          
          {/* Left - Services */}
          <div className="md:col-span-4">
            <div className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tight">
              <p>/ ART DIRECTION</p>
              <p>/ WEB DESIGN (UX/UI)</p>
              <p>/ WEB DEVELOPMENT</p>
            </div>
          </div>

          {/* Center - Portrait */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Portrait"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right - Description */}
          <div className="md:col-span-4 max-w-md">
            <p className="text-[15px] md:text-base leading-relaxed text-black/70">
              I&apos;m an experienced Web &amp; UI/UX Designer who creates memorable digital experiences for brands of all sizes.
            </p>

            <div className="mt-10 pt-8 border-t border-black/10">
              <p className="uppercase text-xs tracking-widest text-black/60 mb-1">BASED IN</p>
              <p className="text-xl font-semibold">India</p>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-sm font-semibold hover:underline"
              >
                AVAILABLE FOR COLLABORATION →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME Header - Transition to next section */}
      <div className="min-h-[30vh] flex items-center justify-center  ">
        <h2
          className="text-[14vw] md:text-[10vw] font-black uppercase tracking-[-0.06em] text-black leading-none"
        >
          ABOUT ME
        </h2>
      </div>
    </section>
  );
}

