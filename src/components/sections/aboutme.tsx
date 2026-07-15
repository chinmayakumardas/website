'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slidesRef.current.filter(Boolean);
      if (slides.length === 0) return;

      gsap.set(slides.slice(1), { opacity: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=480%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      slides.forEach((_, i) => {
        if (i === 0) return;
        const start = i * 0.88;
        tl.to(slides[i - 1], { 
          opacity: 0, 
          y: -90, 
          ease: "power3.out" 
        }, start)
          .to(slides[i], { 
            opacity: 1, 
            y: 0, 
            ease: "power3.out" 
          }, start);
      });
    });

    return () => ctx.revert();
  }, []);

  const addSlideRef = (el: HTMLDivElement | null) => {
    if (el) slidesRef.current.push(el);
  };

  return (
    <>
      {/* Heading */}
      <div    className="min-h-[22vh] bg-white flex items-center justify-center">
        <h1 className="text-black font-semibold tracking-[-0.05em] text-[13vw] md:text-[9vw] lg:text-[6vw] leading-none">
          ABOUT ME
        </h1>
      </div>

      {/* Story Section */}
      <div 
       id="about"
        ref={sectionRef} 
        className="relative bg-black h-screen overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center px-6">

          {/* Slide 1 */}
          <div 
            ref={addSlideRef} 
            className="absolute inset-0 flex items-center justify-center text-center max-w-4xl mx-auto"
          >
            <div>
              <div className="text-xs tracking-[4px] text-white/40 mb-6">01</div>
              <p className="text-[42px] md:text-[56px] leading-[1.05] font-light tracking-tighter">
                Software Engineering undergraduate from Bhubaneswar, India.
              </p>
              <p className="mt-8 text-[26px] md:text-[32px] text-white/75 font-light">
                2 years crafting meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div 
            ref={addSlideRef} 
            className="absolute inset-0 flex items-center justify-center text-center max-w-4xl mx-auto opacity-0"
          >
            <div>
              <div className="text-xs tracking-[4px] text-white/40 mb-6">02</div>
              <p className="text-[42px] md:text-[56px] leading-[1.05] font-light tracking-tighter">
                Curiosity became passion.
              </p>
              <p className="mt-8 text-[26px] md:text-[32px] text-white/75 font-light max-w-3xl mx-auto">
                From learning web development to mastering modern full‑stack and UI/UX.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div 
            ref={addSlideRef} 
            className="absolute inset-0 flex items-center justify-center text-center max-w-4xl mx-auto opacity-0"
          >
            <div>
              <div className="text-xs tracking-[4px] text-white/40 mb-6">03</div>
              <p className="text-[42px] md:text-[56px] leading-[1.05] font-light tracking-tighter">
                Two Years of Experience
              </p>
              <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Built production applications focused on beautiful, fast, and accessible user experiences.
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div 
            ref={addSlideRef} 
            className="absolute inset-0 flex items-center justify-center text-center max-w-4xl mx-auto opacity-0"
          >
            <div>
              <div className="text-xs tracking-[4px] text-white/40 mb-6">04</div>
              <p className="text-[42px] md:text-[56px] leading-[1.05] font-light tracking-tighter mb-10">
                Built with
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[27px] md:text-[34px] font-light text-white/90">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
                <span>Node.js</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div 
            ref={addSlideRef} 
            className="absolute inset-0 flex items-center justify-center text-center max-w-4xl mx-auto opacity-0"
          >
            <div>
              <div className="text-xs tracking-[4px] text-white/40 mb-6">05</div>
              <p className="text-[42px] md:text-[56px] leading-[1.05] font-light tracking-tighter">
                My Philosophy
              </p>
              <div className="mt-10 space-y-6 text-[26px] md:text-[32px] leading-tight text-white/75 font-light">
                <p>Beautiful interfaces</p>
                <p>Performance obsessed</p>
                <p>Accessibility first</p>
                <p className="text-white/60">Continuous learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/40">
          SCROLL TO CONTINUE
        </div>
      </div>
    </>
  );
};

export default AboutMe;