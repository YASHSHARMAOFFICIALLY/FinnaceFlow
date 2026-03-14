const ACTIVITIES = [
  {
    id: 1,
    type: "sip",
    icon: "📈",
    iconBg: "#F0F5FF",
    iconBorder: "#D0E0FF",
    title: "SIP Invested",
    desc: "Axis Bluechip Fund · Monthly",
    amount: "+₹2,000",
    amountColor: "#3A7A5A",
    time: "Today, 10:00 AM",
    tag: "Investing",
    tagBg: "#F0F5FF",
    tagColor: "#4A6FA5",
  },
  {
    id: 2,
    type: "quiz",
    icon: "📝",
    iconBg: "#F8F0FF",
    iconBorder: "#E0C8F8",
    title: "Quiz Completed",
    desc: "Mutual Funds — Score: 8/10",
    amount: "+50 XP",
    amountColor: "#7A4AA0",
    time: "Today, 8:30 AM",
    tag: "Learning",
    tagBg: "#F8F0FF",
    tagColor: "#7A4AA0",
  },
  {
    id: 3,
    type: "goal",
    icon: "🛡️",
    iconBg: "#F0FBF4",
    iconBorder: "#C0E8D0",
    title: "Goal Updated",
    desc: "Emergency Fund — 64.7% reached",
    amount: "₹1,94,000",
    amountColor: "#3A7A5A",
    time: "Yesterday, 6:12 PM",
    tag: "Goals",
    tagBg: "#F0FBF4",
    tagColor: "#3A7A5A",
  },
  {
    id: 4,
    type: "sip",
    icon: "📈",
    iconBg: "#F0F5FF",
    iconBorder: "#D0E0FF",
    title: "SIP Invested",
    desc: "Mirae Asset Large Cap · Monthly",
    amount: "+₹3,000",
    amountColor: "#3A7A5A",
    time: "Jan 10, 10:00 AM",
    tag: "Investing",
    tagBg: "#F0F5FF",
    tagColor: "#4A6FA5",
  },
  {
    id: 5,
    type: "learn",
    icon: "📚",
    iconBg: "#F5F1E8",
    iconBorder: "#E8DFC0",
    title: "Lesson Completed",
    desc: "Module 2 · SIP vs Lumpsum",
    amount: "+20 XP",
    amountColor: "#8B7340",
    time: "Jan 9, 9:15 AM",
    tag: "Learning",
    tagBg: "#F5F1E8",
    tagColor: "#8B7340",
  },
];

const TYPE_ICONS = {
  sip: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 9L4.5 6L6.5 8L8.5 4.5L10 3.5" stroke="#4A6FA5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  quiz: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" stroke="#7A4AA0" strokeWidth="1.1" />
      <path d="M6 8V8.5M6 4C6 4 7 4 7 5C7 5.55 6.55 6 6 6V6.5" stroke="#7A4AA0" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  goal: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#3A7A5A" strokeWidth="1.1" />
      <circle cx="6" cy="6" r="2" stroke="#3A7A5A" strokeWidth="1.1" />
      <circle cx="6" cy="6" r="0.7" fill="#3A7A5A" />
    </svg>
  ),
  learn: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L11 3.5V5C11 7.76 8.76 9.76 6 10.5C3.24 9.76 1 7.76 1 5V3.5L6 1Z" stroke="#8B7340" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  ),
};

function ActivityItem({ activity }) {
  return (
    <div className="flex items-start gap-3 py-3 group hover:bg-[#FAFAF8] -mx-2 px-2 rounded-xl transition-colors duration-150 cursor-pointer">
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 mt-0.5"
        style={{
          background: activity.iconBg,
          border: `1px solid ${activity.iconBorder}`,
        }}
      >
        {activity.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[13px] font-semibold text-[#0F0F0F] tracking-[-0.01em]">
            {activity.title}
          </span>
          <span
            className="text-[10.5px] font-medium px-1.5 py-0.5 rounded-full"
            style={{ background: activity.tagBg, color: activity.tagColor }}
          >
            {activity.tag}
          </span>
        </div>
        <div className="text-[12.5px] text-[#888] tracking-[-0.01em]">{activity.desc}</div>
        <div className="text-[11px] text-[#BBB] mt-0.5">{activity.time}</div>
      </div>

      {/* Amount */}
      <div className="text-right flex-shrink-0">
        <div
          className="text-[13px] font-bold tracking-[-0.01em]"
          style={{ color: activity.amountColor }}
        >
          {activity.amount}
        </div>
      </div>
    </div>
  );
}

export default function RecentActivity() {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[11.5px] font-semibold text-[#888] uppercase tracking-[0.08em] mb-0.5">
            Activity
          </div>
          <div className="text-[15px] font-semibold text-[#0F0F0F] tracking-[-0.02em]">
            Recent transactions
          </div>
        </div>
        <button className="text-[12px] font-medium text-[#555] hover:text-[#0F0F0F] transition-colors">
          View all →
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1.5 mb-4">
        {["All", "Investing", "Learning", "Goals"].map((f, i) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-150 ${
              i === 0
                ? "bg-[#0F0F0F] text-white"
                : "text-[#888] hover:text-[#555] border border-[#F0F0F0]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-[#F5F5F5]">
        {ACTIVITIES.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}