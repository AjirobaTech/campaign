import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer-bg text-footer-foreground py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-2">
              <img src="/footerlogo.svg" alt="AJÍRÓBA Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm italic text-footer-foreground mb-4">
              ... Your foremost consumer<br />Raffle draw platform
            </p>
            <div className="flex gap-4 items-center mt-6">
              {/* Facebook */}
              <a href="#" className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.266 4.832-5.266 1.469 0 2.247.11 2.614.16v3.082h-1.835c-1.42 0-1.891.533-1.891 2.1v1.504h3.726l-.497 3.667h-3.229v7.98H9.101z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 pl-0.5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-11 h-11 rounded-xl bg-white flex items-center justify-center transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-11 h-11 transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-11 h-11 fill-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.68.822.897 1.382.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.68-1.382.897-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.475-1.382-.897-.422-.422-.68-.822-.897-1.382-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.475-.96.897-1.382.422-.422.822-.68 1.382-.897.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
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
