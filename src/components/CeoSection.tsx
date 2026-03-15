const CeoSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-8">A Message from Our CEO</h2>

        <div className="bg-ceo-bg rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
          {/* CEO Image */}
          <div className="w-full md:w-64 h-64 md:h-96 bg-primary/20 flex-shrink-0 relative">
            <img
              src="/woman.svg"
              alt="Yeye Ajiroba"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote */}
          <div className="flex-1 p-8 md:p-10 text-left flex flex-col justify-center">
            <span className="text-4xl text-foreground font-bold leading-none mb-2">"</span>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4">
              We created this campaign to appreciate and reward our growing community. Thank you for being part of our journey and we hope you enjoy the experience.
            </p>
            <span className="text-4xl text-foreground font-bold leading-none text-right mb-4">"</span>
            <div>
              <p className="font-bold text-foreground text-sm">Yeye Ajiroba</p>
              <p className="text-muted-foreground text-xs">CEO/Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
