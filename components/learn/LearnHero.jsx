// "use client"
// import { useEffect, useRef } from "react";

// const STAT_ITEMS = [
//   { val: "50+", label: "Articles" },
//   { val: "12", label: "Video Guides" },
//   { val: "3", label: "Book Picks" },
//   { val: "Free", label: "Always" },
// ];

// const TOPIC_PILLS = [
//   { icon: "📊", label: "Investing" },
//   { icon: "🏦", label: "Banking" },
//   { icon: "💳", label: "Budgeting" },
//   { icon: "📈", label: "Stock Market" },
//   { icon: "🏠", label: "Real Estate" },
//   { icon: "💰", label: "Tax Planning" },
// ];

// export default function LearnHero() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     el.style.opacity = "0";
//     el.style.transform = "translateY(24px)";
//     const t = setTimeout(() => {
//       el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
//       el.style.opacity = "1";
//       el.style.transform = "translateY(0)";
//     }, 60);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="pt-32 pb-20 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F1E8] border border-[#E8DFC0] mb-7">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
//             <span className="text-[12px] text-[#8B7340] font-medium tracking-wide">
//               Financial Learning Hub
//             </span>
//           </div>

//           <h1
//             className="text-[50px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#0F0F0F] mb-5"
//             style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
//           >
//             Learn Finance the{" "}
//             <span className="text-[#C9A84C]">Smart Way</span>
//           </h1>

//           <p className="text-[17px] leading-[1.7] text-[#555] mb-10 tracking-[-0.01em]">
//             Short blogs, curated videos, and essential books to help you master
//             money — at your own pace.
//           </p>

//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <a
//               href="#blogs"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F0F0F] text-white text-[14px] font-medium rounded-xl hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-200 tracking-[-0.01em]"
//             >
//               Start Learning
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </a>
//             <a
//               href="#path"
//               className="text-[14px] text-[#888] hover:text-[#0F0F0F] transition-colors duration-200 tracking-[-0.01em]"
//             >
//               View learning path →
//             </a>
//           </div>
//         </div>

//         {/* Stats row */}
//         <div className="flex items-center justify-center gap-10 flex-wrap mb-14">
//           {STAT_ITEMS.map(({ val, label }) => (
//             <div key={label} className="text-center">
//               <div
//                 className="text-[28px] font-bold text-[#0F0F0F] tracking-[-0.04em] leading-none mb-1"
//                 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
//               >
//                 {val}
//               </div>
//               <div className="text-[12.5px] text-[#888]">{label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Topic pills */}
//         <div className="flex items-center justify-center gap-2.5 flex-wrap">
//           {TOPIC_PILLS.map(({ icon, label }) => (
//             <a
//               key={label}
//               href="#"
//               className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#EBEBEB] bg-white text-[13px] text-[#555] font-medium hover:border-[#0F0F0F] hover:text-[#0F0F0F] transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.04)] tracking-[-0.01em]"
//             >
//               <span>{icon}</span>
//               {label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { useEffect, useRef } from "react";

const STAT_ITEMS = [
  { val: "50+", label: "Articles" },
  { val: "12", label: "Video Guides" },
  { val: "3", label: "Book Picks" },
  { val: "Free", label: "Always" },
];

const TOPIC_PILLS = [
  { icon: "📊", label: "Investing" },
  { icon: "🏦", label: "Banking" },
  { icon: "💳", label: "Budgeting" },
  { icon: "📈", label: "Stock Market" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "💰", label: "Tax Planning" },
];

export default function LearnHero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F1E8] dark:bg-[#1a1a1a] border border-[#E8DFC0] dark:border-[#2a2a2a] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-[12px] text-[#8B7340] dark:text-[#d4c08a] font-medium tracking-wide">
              Financial Learning Hub
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[50px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#0F0F0F] dark:text-white mb-5"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Learn Finance the{" "}
            <span className="text-[#C9A84C]">Smart Way</span>
          </h1>

          {/* Description */}
          <p className="text-[17px] leading-[1.7] text-[#555] dark:text-[#aaa] mb-10 tracking-[-0.01em]">
            Short blogs, curated videos, and essential books to help you master
            money — at your own pace.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F0F0F] dark:bg-white text-white dark:text-black text-[14px] font-medium rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-[#e5e5e5] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-200 tracking-[-0.01em]"
            >
              Start Learning
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#path"
              className="text-[14px] text-[#888] dark:text-[#777] hover:text-[#0F0F0F] dark:hover:text-white transition-colors duration-200 tracking-[-0.01em]"
            >
              View learning path →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 flex-wrap mb-14">
          {STAT_ITEMS.map(({ val, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-[28px] font-bold text-[#0F0F0F] dark:text-white tracking-[-0.04em] leading-none mb-1"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {val}
              </div>
              <div className="text-[12.5px] text-[#888] dark:text-[#777]">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          {TOPIC_PILLS.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#EBEBEB] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] text-[13px] text-[#555] dark:text-[#ccc] font-medium hover:border-[#0F0F0F] dark:hover:border-white hover:text-[#0F0F0F] dark:hover:text-white transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] tracking-[-0.01em]"
            >
              <span>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}