"use client"
import { useState, useEffect } from "react";

const MODULES = [
  {
    id: 1,
    title: "Budgeting Basics",
    lessons: 8,
    completed: 8,
    icon: "📊",
    color: "#3A7A5A",
    bg: "#F0FBF4",
    border: "#C0E8D0",
    badge: "Complete",
  },
  {
    id: 2,
    title: "Mutual Funds & SIPs",
    lessons: 12,
    completed: 9,
    icon: "📈",
    color: "#4A6FA5",
    bg: "#F0F5FF",
    border: "#D0E0FF",
    badge: "In Progress",
    current: true,
  },
  {
    id: 3,
    title: "Stock Market Basics",
    lessons: 10,
    completed: 2,
    icon: "💹",
    color: "#7A4AA0",
    bg: "#F8F0FF",
    border: "#E0C8F8",
    badge: "Started",
  },
  {
    id: 4,
    title: "Tax Planning",
    lessons: 6,
    completed: 0,
    icon: "🧾",
    color: "#888",
    bg: "#F5F5F3",
    border: "#E0E0E0",
    badge: "Locked",
    locked: true,
  },
];

const RECENT_QUIZ = {
  score: 8,
  total: 10,
  topic: "Mutual Funds",
  date: "Today",
  streak: 12,
};

function ModuleRow({ mod, delay }) {
  const pct = Math.round((mod.completed / mod.lessons) * 100);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(pct), 400 + delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-150 ${
        mod.current
          ? "bg-[#FAFAF8] border border-[#EBEBEB]"
          : "hover:bg-[#FAFAF8]"
      } ${mod.locked ? "opacity-50" : "cursor-pointer"}`}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
        style={{ background: mod.bg, border: `1px solid ${mod.border}` }}
      >
        {mod.locked ? "🔒" : mod.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[13px] font-semibold text-[#0F0F0F] tracking-[-0.01em] truncate">
            {mod.title}
          </span>
          {mod.current && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#F5F1E8] text-[#8B7340] border border-[#E8DFC0] flex-shrink-0">
              CURRENT
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-[#EBEBEB] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{ width: `${barWidth}%`, background: mod.color }}
            />
          </div>
          <span className="text-[11px] text-[#888] flex-shrink-0">
            {mod.completed}/{mod.lessons}
          </span>
        </div>
      </div>

      <span
        className="text-[10.5px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
        style={{
          background: mod.bg,
          color: mod.color,
          border: `1px solid ${mod.border}`,
        }}
      >
        {mod.badge}
      </span>
    </div>
  );
}

export default function LearningProgress() {
  const totalLessons = MODULES.reduce((a, m) => a + m.lessons, 0);
  const completedLessons = MODULES.reduce((a, m) => a + m.completed, 0);
  const overallPct = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11.5px] font-semibold text-[#888] uppercase tracking-[0.08em] mb-0.5">
            Learning
          </div>
          <div className="text-[15px] font-semibold text-[#0F0F0F] tracking-[-0.02em]">
            Your curriculum
          </div>
        </div>
        <a
          href="#"
          className="text-[12px] font-medium text-[#555] hover:text-[#0F0F0F] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* Overall progress */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAF8] border border-[#EBEBEB] mb-4">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1.5 text-[12px]">
            <span className="text-[#555] font-medium">Overall Progress</span>
            <span className="font-bold text-[#0F0F0F]">{overallPct}%</span>
          </div>
          <div className="h-2 bg-[#E8E8E8] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0F0F0F] rounded-full"
              style={{ width: `${overallPct}%`, transition: "width 1s ease 0.3s" }}
            />
          </div>
          <div className="text-[11px] text-[#AAA] mt-1.5">
            {completedLessons} of {totalLessons} lessons complete
          </div>
        </div>
        <div className="text-center flex-shrink-0">
          <div className="text-[22px] font-bold text-[#0F0F0F] tracking-[-0.03em] leading-none">
            🔥 {RECENT_QUIZ.streak}
          </div>
          <div className="text-[10px] text-[#888] mt-0.5">day streak</div>
        </div>
      </div>

      {/* Modules */}
      <div className="flex flex-col gap-1">
        {MODULES.map((mod, i) => (
          <ModuleRow key={mod.id} mod={mod} delay={i * 70} />
        ))}
      </div>

      {/* Latest quiz result */}
      <div className="mt-4 pt-4 border-t border-[#F5F5F5]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F5F1E8] border border-[#E8DFC0] flex items-center justify-center text-sm">
              📝
            </div>
            <div>
              <div className="text-[12.5px] font-semibold text-[#0F0F0F] tracking-[-0.01em]">
                Latest Quiz — {RECENT_QUIZ.topic}
              </div>
              <div className="text-[11.5px] text-[#888]">{RECENT_QUIZ.date}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[16px] font-bold text-[#0F0F0F] tracking-[-0.02em]">
              {RECENT_QUIZ.score}
              <span className="text-[12px] text-[#888] font-normal">/{RECENT_QUIZ.total}</span>
            </div>
            <div className="text-[11px] text-[#3A7A5A] font-medium">Excellent</div>
          </div>
        </div>
      </div>
    </div>
  );
}