export default function Footer() {
  const cols = [
    {
      heading: "Product",
      links: ["Overview", "Changelog", "Roadmap", "Pricing"],
    },
    {
      heading: "Tools",
      links: ["SIP Calculator", "Budget Planner", "Net Worth Tracker", "EMI Calculator"],
    },
    {
      heading: "Blog",
      links: ["Investing Basics", "Tax Planning", "SIP Guide", "Personal Finance 101"],
    },
    {
      heading: "Company",
      links: ["About", "Careers", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="border-t border-[#EBEBEB] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#0F0F0F] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 10L7 4L12 10" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="11" r="1.2" fill="#C9A84C"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#0F0F0F]">Finveda</span>
            </a>
            <p className="text-[13px] text-[#888] leading-relaxed max-w-[180px]">
              Personal finance learning and tracking, simplified.
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div className="text-[11.5px] font-semibold text-[#0F0F0F] tracking-[0.06em] uppercase mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#888] hover:text-[#0F0F0F] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-[#F0F0F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-[#BBB]">
            © {new Date().getFullYear()} FinanceFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-[12.5px] text-[#BBB] hover:text-[#666] transition-colors duration-200">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}