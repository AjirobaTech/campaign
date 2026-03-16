const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="AJÍRÓBA Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Badge */}
        <div className="border border-transparent animate-badge-cycle rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-500">
          <img
            src="/campaign_24dp_E3E3E3_FILL0_wght300_GRAD0_opsz24 1.svg"
            className="w-5 h-5 opacity-90 transition-all duration-500"
            alt="Announcement"
          />
          <span className="text-xs md:text-sm font-bold whitespace-nowrap">Official Campaign 2026</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
