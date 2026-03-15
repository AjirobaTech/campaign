import { useState } from "react";
import EntryFormModal from "./EntryFormModal";
import SpinWheelPage from "./SpinWheelPage";

const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [spinOpen, setSpinOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleContinue = (data: { name: string; email: string; phone: string }) => {
    setUserName(data.name);
    setUserEmail(data.email);
    setUserPhone(data.phone);
    setFormOpen(false);
    setSpinOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-hero-gradient-start to-hero-gradient-end pt-16 pb-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-start justify-center gap-2 mb-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
            🎉 Welcome to the Ajiroba SPIN<br />& WIN Giveaway
          </h1>
        </div>

        <p className="text-foreground font-semibold text-base mb-1">
          Spin the wheel for a chance to win exciting rewards.
        </p>
        <p className="text-muted-foreground text-sm mb-8">
          Click on the button below to participate.
        </p>

        <div className="bg-notice-bg border border-notice-border rounded-lg px-6 py-4 mb-8 max-w-2xl mx-auto">
          <p className="text-sm text-foreground">
            <span className="text-primary font-semibold">✓ Official Campaign:</span>{" "}
            This promotional campaign is officially organized by our team to reward our amazing community.
          </p>
        </div>

        <button
          onClick={() => setFormOpen(true)}
          className="bg-primary text-primary-foreground font-semibold text-base px-8 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
        >
          <img src="/star.svg" className="w-5 h-5" alt="Icon" />
          Start Now
        </button>
      </div>

      <EntryFormModal open={formOpen} onOpenChange={setFormOpen} onContinue={handleContinue} />
      <SpinWheelPage open={spinOpen} onOpenChange={setSpinOpen} userName={userName} userEmail={userEmail} userPhone={userPhone} />
    </section>
  );
};

export default HeroSection;
