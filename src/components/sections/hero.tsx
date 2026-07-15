

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col pt-20"
    >
      {/* Hero Title */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <h1
          className="
            text-center
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.08em]
            text-[18vw]
            sm:text-[15vw]
            md:text-[11vw]
            lg:text-[9vw]
            xl:text-[8vw]
            2xl:text-[7vw]
          "
        >
          CREATIVE
          <br />
          DESIGNER
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="pb-4 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
<div className="mx-auto max-w-350 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-end">

          {/* Left */}
          <div className="md:col-span-4 order-2 md:order-1">
            <div
              className="
                space-y-2
                font-black
                uppercase
                tracking-tight
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                leading-relaxed
              "
            >
              <p>/ ART DIRECTION</p>
              <p>/ WEB DESIGN (UX/UI)</p>
              <p>/ WEB DEVELOPMENT</p>
            </div>
          </div>

         {/* Center Image */}
<div className="md:col-span-4 order-1 md:order-2 flex justify-center">
  <div
    className="
      relative
      w-[68vw]
      max-w-[220px]

      sm:w-[58vw]
      sm:max-w-[250px]

      md:w-[26vw]
      md:max-w-[260px]

      lg:w-[24vw]
      lg:max-w-[290px]

      xl:w-[22vw]
      xl:max-w-[320px]

      2xl:w-[20vw]
      2xl:max-w-[340px]

      aspect-[4/5]
      overflow-hidden
      rounded-sm
      shadow-xl
    "
  >
    <Image
      src="/images/profile.png"
      alt="Portrait"
      fill
      priority
      className="
        object-cover
        grayscale
        transition-all
        duration-700
        hover:grayscale-0
        hover:scale-[1.03]
      "
    />
  </div>
</div>

          {/* Right */}
          <div className="md:col-span-4 order-3 max-w-sm md:ml-auto">
            <p
              className="
                text-sm
                sm:text-[15px]
                lg:text-base
                leading-7
                text-black/70
              "
            >
              I&apos;m an experienced Web &amp; UI/UX Designer creating memorable
              digital experiences that blend aesthetics, usability and modern
              development for brands of every size.
            </p>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-[11px]
                  text-black/50
                "
              >
                Based In
              </p>

              <p
                className="
                  mt-2
                  text-lg
                  md:text-xl
                  lg:text-2xl
                  font-semibold
                "
              >
                India
              </p>
            </div>

          
          </div>

        </div>
      </div>
    </section>
  );
}