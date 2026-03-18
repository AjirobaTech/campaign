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
              <a href="https://www.facebook.com/share/1BvVA6ERkU/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.266 4.832-5.266 1.469 0 2.247.11 2.614.16v3.082h-1.835c-1.42 0-1.891.533-1.891 2.1v1.504h3.726l-.497 3.667h-3.229v7.98H9.101z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@AjirobaMedia" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 pl-0.5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@ajiroba.tech?_t=ZS-8yexHRqXwIs&_r=1" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.04 7.86-.02 2.73-.82 5.39-2.55 7.5-1.88 2.37-4.75 3.65-7.73 3.44-2.84-.22-5.41-1.7-6.91-4.13-1.3-2.13-1.61-4.76-1.02-7.18.67-2.7 2.48-5.06 4.93-6.24 1.14-.56 2.38-.83 3.64-.81.04 1.49.01 2.98.03 4.47-1.14-.06-2.31.2-3.28.82-1.07.64-1.8 1.71-2.02 2.93-.31 1.74.24 3.59 1.45 4.88 1.1 1.14 2.7 1.78 4.26 1.74 2.16-.01 4.12-1.48 4.63-3.6.14-.51.18-1.05.18-1.58V.02z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ajirobatech?utm_source=qr&igsh=ODY5NWZtcmE0dDNk" target="_blank" rel="noopener noreferrer" className="w-11 h-11 transition-transform hover:scale-110">
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
                <span>(+234) 7038 809 512</span>
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
