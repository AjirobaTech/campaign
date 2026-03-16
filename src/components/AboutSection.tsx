
const features = [
  {
    icon: "/secure.svg",
    title: "Secure & Official",
    desc: "This is an officially organized promotional campaign",
  },
  {
    icon: "/verified.svg",
    title: "Verified Winners",
    desc: "All winners are verified through our whatsapp support channel",
  },
  {
    icon: "/community.svg",
    title: "Community First",
    desc: "Designed to reward our amazing community members",
  },
  {
    icon: "/reward.svg",
    title: "Real Rewards",
    desc: "This is an officially organized promotional campaign",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-4">About This Campaign</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-4">
          This promotional campaign is designed to reward members of our community through a fun and interactive experience.
        </p>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-12">
          Winners will redeem their prizes through our verified support channel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-icon-circle-bg flex items-center justify-center mb-4">
                <img src={f.icon} className="w-8 h-8" alt={f.title} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
