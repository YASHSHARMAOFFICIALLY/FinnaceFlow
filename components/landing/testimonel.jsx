'use client'
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "FinanceFlow finally made investing understandable for me. The daily quizzes turned finance from something intimidating into something I actually look forward to.",
    name: "Priya Menon",
    role: "Software Engineer, 26",
    avatar: "PM",
    avatarBg: "#F5F1E8",
    avatarColor: "#8B7340",
    stars: 5,
  },
  {
    quote:
      "I've been tracking my SIPs manually in Excel for two years. The SIP tracker here just does everything automatically — with actual beautiful charts. I can't go back.",
    name: "Rohan Sharma",
    role: "Product Manager, 29",
    avatar: "RS",
    avatarBg: "#F0F5FF",
    avatarColor: "#4A6FA5",
    stars: 5,
  },
  {
    quote:
      "The Financial Health Score was a wake-up call. I thought I was doing fine — turns out my emergency fund was lacking. Fixing it was easy with the actionable steps provided.",
    name: "Anjali Iyer",
    role: "Graphic Designer, 24",
    avatar: "AI",
    avatarBg: "#F0FBF4",
    avatarColor: "#3A7A5A",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M6.5 1L7.89 4.82L12 5.27L9 8.16L9.85 12.24L6.5 10.23L3.15 12.24L4 8.16L1 5.27L5.11 4.82L6.5 1Z"
            fill="#C9A84C"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="p-7 rounded-2xl border border-[#E8E8E8] dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <StarRating count={t.stars} />
      <blockquote className="text-[15px] leading-relaxed text-[#333] dark:text-[#ccc] tracking-[-0.01em] mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold"
          style={{ background: t.avatarBg, color: t.avatarColor }}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-[13.5px] font-semibold text-[#0F0F0F] dark:text-white tracking-[-0.01em]">{t.name}</div>
          <div className="text-[12px] text-[#888] dark:text-[#777]">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F3] dark:bg-[#1a1a1a] border border-[#E8E8E8] dark:border-[#2a2a2a] mb-5">
            <span className="text-[12px] text-[#666] dark:text-[#aaa] font-medium tracking-wide">Testimonials</span>
          </div>
          <h2
            className="text-[38px] font-semibold tracking-[-0.03em] text-[#0F0F0F] dark:text-white max-w-lg mx-auto leading-tight"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Trusted by people building better finances
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 80} />
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[13px] text-[#888] dark:text-[#777]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#F5F1E8", "#F0F5FF", "#F0FBF4", "#F8F0FF"].map((bg, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-[#0A0A0A]" style={{ background: bg }} />
              ))}
            </div>
            <span>10,000+ learners</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#DDD] dark:bg-[#444]" />
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1L7.89 4.82L12 5.27L9 8.16L9.85 12.24L6.5 10.23L3.15 12.24L4 8.16L1 5.27L5.11 4.82L6.5 1Z" fill="#C9A84C"/>
            </svg>
            <span>4.9 / 5 average rating</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#DDD] dark:bg-[#444]" />
          <span>Free forever plan available</span>
        </div>
      </div>
    </section>
  );
}
