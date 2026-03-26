import Link from 'next/link'
import { Facebook, Instagram, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

function TikTokIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#fdf8f5] via-white to-[#f6e7df] text-spa-dark">

      {/* soft luxury glow */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-br from-[#c97c5d]/10 via-transparent to-[#a65a3a]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-rose-gold/10 via-transparent to-terra-cotta/10 blur-3xl rounded-full" />

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">

       
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">

          {/* BRAND */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <img
                src="/hi-beauty-logo.png"
                alt="Hi Beauty Spa Logo"
                className="w-11 h-11 object-contain"
              />

              <div>
                <p className="font-bold tracking-tight text-base leading-tight">
                  Hi Beauty Spa
                </p>
                <p className="text-xs text-spa-dark/50">
                  Massage & Wellness
                </p>
              </div>
            </div>

            <p className="text-xs text-spa-dark/70 leading-relaxed max-w-[260px]">
              Experience ultimate relaxation and wellness at Antel Spa Residences, Makati. Open late — every day.
            </p>

            {/* TRUST MICRO ROW */}
            <div className="flex flex-wrap gap-4 text-xs text-spa-dark/60">
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#c97c5d]" />
                Fast replies
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#c97c5d]" />
                Private booking
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#c97c5d]" />
                Trusted clients
              </span>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { href: 'https://www.facebook.com/people/HI-BeautySPA/61564870212732/', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/beautyasha888/', Icon: Instagram, label: 'Instagram' },
                { href: 'https://www.tiktok.com/@hibeautyspa888', Icon: TikTokIcon, label: 'TikTok' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-spa-dark/20 flex items-center justify-center text-spa-dark/60 hover:text-[#c97c5d] hover:border-[#c97c5d] transition"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-spa-dark/40 mb-2">
              Contact
            </p>

            <div className="space-y-3">

              <div className="flex gap-2">
                <Phone size={13} className="text-[#c97c5d] mt-1" />
                <div>
                  <p className="text-[10px] text-spa-dark/50 uppercase">Phone</p>
                  <a href="tel:+639684504504" className="text-xs hover:text-[#c97c5d] transition">
                    0968 450 4504
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <Instagram size={13} className="text-[#c97c5d] mt-1" />
                <div>
                  <p className="text-[10px] text-spa-dark/50 uppercase">Instagram</p>
                  <a href="https://www.instagram.com/beautyasha888/" className="text-xs hover:text-[#c97c5d] transition">
                    @beautyasha888
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <Facebook size={13} className="text-[#c97c5d] mt-1" />
                <div>
                  <p className="text-[10px] text-spa-dark/50 uppercase">Facebook</p>
                  <a href="https://www.facebook.com/people/HI-BeautySPA/61564870212732/" className="text-xs hover:text-[#c97c5d] transition">
                    hibeauty_1188
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* VISIT */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-spa-dark/40 mb-2">
              Visit Us
            </p>

            <div className="flex gap-2">
              <MapPin size={13} className="text-[#c97c5d] mt-1" />
              <div>
                <p className="text-[10px] text-spa-dark/50 uppercase">Location</p>
                <p className="text-xs text-spa-dark/80">
                  Antel Spa Residences<br />
                  Makati Avenue, Makati City
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Clock size={13} className="text-[#c97c5d] mt-1" />
              <div>
                <p className="text-[10px] text-spa-dark/50 uppercase">Hours</p>
                <p className="text-xs">2:00 PM – 2:00 AM</p>
                <p className="text-[10px] text-spa-dark/50">Open daily</p>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-5 border-t border-spa-dark/10 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-[11px] text-spa-dark/50">
            © {new Date().getFullYear()} Hi Beauty Spa. All rights reserved.
          </p>

          <p className="text-[11px] text-spa-dark/50">
            Powered by{" "}
            <a
              href="https://www.infinitechphil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[#c97c5d] transition"
            >
              INFINITECH ADVERTISING CORPORATION
            </a>
          </p>

        </div>

      </div>
    </footer>
  )
}