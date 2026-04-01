'use client'
import { useEffect, useRef } from "react";

export default function CTA() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#FAFAF8] dark:bg-[#111]">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A84C] mx-3" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        <h2
          className="text-[44px] font-semibold tracking-[-0.035em] text-[#0F0F0F] dark:text-white leading-tight mb-5"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Start Building Financial Intelligence Today.
        </h2>

        <p className="text-[16px] text-[#666] dark:text-[#aaa] leading-relaxed mb-10 tracking-[-0.01em] max-w-md mx-auto">
          Join thousands of people who are learning to make smarter money decisions — for free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0F0F0F] dark:bg-white text-white dark:text-[#0F0F0F] text-[14.5px] font-medium rounded-xl hover:bg-[#2a2a2a] dark:hover:bg-[#e0e0e0] transition-all duration-200 shadow-sm tracking-[-0.01em]"
          >
            Create Free Account
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="text-[14px] text-[#888] dark:text-[#777] hover:text-[#0F0F0F] dark:hover:text-white transition-colors duration-200 tracking-[-0.01em] px-4 py-3.5"
          >
            See how it works →
          </a>
        </div>

        <p className="mt-6 text-[12.5px] text-[#AAA] dark:text-[#555] tracking-wide">
          No credit card required · Free plan available · Cancel anytime
        </p>
      </div>
    </section>
  );
}
