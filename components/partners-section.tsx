export default function PartnersSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-12 max-w-[998px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-primary/10 rounded-[40px] py-[10px] px-4 flex items-center">
              <span className="text-primary font-bold text-sm">الشركاء</span>
            </div>
          </div>

          <h2 className="text-primary text-[32px] lg:text-[42px] font-extrabold leading-[1.2] text-center">
            نفتخر بشراكاتنا مع رواد القطاعات المختلفة !.
          </h2>

          <p className="text-black text-base lg:text-lg font-medium leading-relaxed text-center">
            شراكاتنا... أساس نجاحنا واستمرارنا
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-16">
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[320px] rounded-2xl">
            <img
              src="/part.png"
              alt="شريك"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[320px] rounded-2xl">
            <img
              src="/part2.png"
              alt="شريك"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[320px] rounded-2xl">
            <img
              src="/part4.png"
              alt="شريك"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[320px] rounded-2xl">
            <img
              src="/part1.png"
              alt="شريك"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
