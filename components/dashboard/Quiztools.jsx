const TOOLS = [
  {
    id: 1,
    name: "SIP Calculator",
    desc: "Plan monthly investments",
    emoji: "📈",
    bg: "#F0F5FF",
    border: "#D0E0FF",
    color: "#4A6FA5",
    href: "#",
  },
  {
    id: 2,
    name: "EMI Calculator",
    desc: "Check loan repayments",
    emoji: "🏦",
    bg: "#F5F1E8",
    border: "#E8DFC0",
    color: "#8B7340",
    href: "#",
  },
  {
    id: 3,
    name: "Budget Planner",
    desc: "Manage your spending",
    emoji: "💳",
    bg: "#F0FBF4",
    border: "#C0E8D0",
    color: "#3A7A5A",
    href: "#",
  },
  {
    id: 4,
    name: "Finance Quiz",
    desc: "Test your knowledge",
    emoji: "🧠",
    bg: "#F8F0FF",
    border: "#E0C8F8",
    color: "#7A4AA0",
    href: "#",
  },
  {
    id: 5,
    name: "Tax Estimator",
    desc: "Estimate your tax liability",
    emoji: "🧾",
    bg: "#FFF0F0",
    border: "#F8C8C8",
    color: "#A04A4A",
    href: "#",
  },
  {
    id: 6,
    name: "Net Worth",
    desc: "Assets minus liabilities",
    emoji: "⚖️",
    bg: "#F5F5F3",
    border: "#E0E0E0",
    color: "#555",
    href: "#",
  },
];

export default function QuickTools() {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11.5px] font-semibold text-[#888] uppercase tracking-[0.08em] mb-0.5">
            Shortcuts
          </div>
          <div className="text-[15px] font-semibold text-[#0F0F0F] tracking-[-0.02em]">
            Quick Tools
          </div>
        </div>
        <a
          href="#"
          className="text-[12px] font-medium text-[#555] hover:text-[#0F0F0F] transition-colors"
        >
          All tools →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {TOOLS.map((tool) => (
          <a
            key={tool.id}
            href={tool.href}
            className="group flex flex-col items-start p-3.5 rounded-xl border hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-150"
            style={{
              background: tool.bg,
              borderColor: tool.border,
            }}
          >
            <span className="text-[20px] mb-2">{tool.emoji}</span>
            <span
              className="text-[12.5px] font-semibold tracking-[-0.01em] leading-tight mb-0.5"
              style={{ color: tool.color }}
            >
              {tool.name}
            </span>
            <span className="text-[11px] text-[#888] leading-snug">{tool.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}