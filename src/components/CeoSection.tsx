const CeoSection = () => {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">A Message from Our CEO</h2>
        {/* Main Card */}
        <div className="bg-white rounded-[45px] shadow-[0_40px_100px_-20px_rgba(234,88,12,0.18)] flex flex-col md:flex-row items-center p-3 md:p-5 border-l-[18px] border-primary">
    
          {/* CEO Image - Framed with brown background */}
          <div className="w-full md:w-[320px] flex-shrink-0">
            <div className="bg-[#46281D] p-2.5 rounded-[38px] aspect-[4/5] md:aspect-auto md:h-[400px] overflow-hidden">
              <img
                src="/woman.svg"
                alt="Yeye Ajiroba"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>

          {/* Quote and Author Info */}
          <div className="flex-1 px-8 md:px-12 py-8 md:py-0 text-left">
            <div className="mb-6">
              <span className="text-2xl font-bold block mb-4">"</span>
              <p className="text-foreground text-base md:text-lg font-medium leading-relaxed max-w-md">
                We created this campaign to appreciate and reward our growing community. Thank you for being part of our journey and we hope you enjoy the experience.
              </p>
              <span className="text-2xl font-bold block text-right pr-12">"</span>
            </div>

            <div className="mt-12">
              <p className="font-extrabold text-black text-lg mb-0.5">Yeye Ajiroba</p>
              <p className="text-muted-foreground text-sm font-semibold tracking-tight">CEO/Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
