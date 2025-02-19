import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0 object-cover">
        <Image
          alt="clouds background"
          src="/images/field.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/drone.png"
          width={1583}
          height={554}
          className="animate-hover"
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
            <p className="before:absolute before:top-0 before:right-full before:content-['“'] after:text-gray-900/70 after:content-['”']">
              <strong className="font-semibold">
                Buildease made us more efficient and profitable.
              </strong>{" "}
              <span className="text-gray-900/70">
                It transformed our construction operations dramatically. By streamlining our project management processes, we experienced a significant reduction in administrative overhead and communication delays. The platform's intelligent scheduling system helped us optimize crew assignments and resource allocation, resulting in a 30% improvement in project completion times.
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
            <Image
              alt="Gabriel Gratton"
              src="/images/gratton.png"
              width={56}
              height={56}
              className="rounded-full border object-contain"
            />
          </div>
          <div>
            <div className="text-base font-medium text-gray-900">
              Gabriel Gratton
            </div>
            <div className="text-sm text-[#C33621]/80">
              CEO of Visionary Enterprise
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
