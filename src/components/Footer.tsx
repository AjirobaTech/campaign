import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer-bg text-footer-foreground py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-2">
              <img src="/logo.svg" alt="AJÍRÓBA Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm italic text-footer-foreground mb-4">
              ... Your foremost consumer<br />Raffle draw platform
            </p>
            <div className="flex gap-3">
              {["f", "yt", "in", "ig"].map((s) => (
                <div key={s} className="w-7 h-7 rounded-full bg-footer-foreground/20 flex items-center justify-center text-xs text-footer-foreground">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-white font-bold text-base mb-3">Need Help?</h3>
            <p className="text-sm leading-relaxed mb-3">
              Contact Our Support Team Via WhatsApp For Any Questions About The Campaign Or Prize Redemption.
            </p>
            <p className="text-sm mb-3">Available 24/7</p>
            <p className="text-xs leading-relaxed">
              Your Privacy Is Protected. We Only Use Your Information To Verify Winners And Deliver Rewards.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white font-bold text-base mb-3">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1, Praisehill Estate, Arepo, Ogun State</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(+234) 9169 881 005</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>Support@ajiroba.Com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-footer-bottom-bg text-primary-foreground text-center py-3 text-xs">
        © 2026. Ajiroba Technologies. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
