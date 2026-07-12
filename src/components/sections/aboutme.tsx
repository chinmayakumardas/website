// "use client";



// export default function AboutMe() {

 
//   return (
//     <section className="relative w-full">

    

    
//       <div className="bg-black min-h-[30vh] px-6 md:px-16 py-20 flex items-center justify-center">
        
//       </div>

//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full bg-black" id="about">

      {/* PART 1 */}
      <div className=" min-h-screen flex items-center justify-center px-6 md:px-16 text-center">
        <p className="text-white/80 text-lg md:text-3xl leading-[1.7] max-w-5xl">
          I am a full stack developer and UI/UX designer focused on building
          modern, scalable and performance-driven digital products. I combine
          design thinking with engineering precision to create interfaces that
          are not only visually strong but also highly functional, intuitive,
          and smooth in real-world usage.
        </p>
      </div>

      {/* PART 2 */}
      <div className=" min-h-screen flex items-center justify-center px-6 md:px-16 text-center">
        <p className="text-white/70 text-lg md:text-3xl leading-[1.7] max-w-5xl">
          My expertise includes React, Next.js and GSAP-based motion systems. I
          focus on building reusable components, scalable architecture, and
          smooth user experiences with strong attention to performance,
          animation timing, and visual hierarchy.
        </p>
      </div>

      {/* PART 3 - IMAGE */}
      <div className=" min-h-screen flex items-center justify-center px-6 md:px-16">
        <div className="max-w-4xl w-full">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={900}
            height={1100}
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
          />
        </div>
      </div>

      {/* PART 4 */}
      <div className=" min-h-screen flex items-center justify-center px-6 md:px-16 text-center">
        <p className="text-white/70 text-lg md:text-3xl leading-[1.7] max-w-5xl">
          I have built multiple projects including portfolios, dashboards, and
          landing pages where the focus is always on balancing design with
          usability. I enjoy creating interfaces that feel alive, responsive,
          and emotionally engaging for users.
        </p>
      </div>

    

    </section>
  );
}