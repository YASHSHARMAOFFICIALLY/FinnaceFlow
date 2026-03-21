// Sample AI response generator with context-aware finance intelligence

export const SUGGESTED_PROMPTS = [
  {
    id: 1,
    icon: "📈",
    text: "Should I start SIP with ₹1,000/month?",
    category: "Investing",
  },
  {
    id: 2,
    icon: "💰",
    text: "How much should I save from my ₹50K salary?",
    category: "Savings",
  },
  {
    id: 3,
    icon: "🔢",
    text: "What is compound interest, simply explained?",
    category: "Concepts",
  },
  {
    id: 4,
    icon: "🏦",
    text: "Are mutual funds safe for beginners?",
    category: "Funds",
  },
  {
    id: 5,
    icon: "🎯",
    text: "How do I build a ₹10 lakh emergency fund?",
    category: "Goals",
  },
  {
    id: 6,
    icon: "🧾",
    text: "How can I save tax under Section 80C?",
    category: "Tax",
  },
];

export const RECENT_CONVERSATIONS = [
  { id: 1, title: "SIP vs Lump Sum advice", time: "Today" },
  { id: 2, title: "Emergency fund calculation", time: "Yesterday" },
  { id: 3, title: "ELSS vs PPF comparison", time: "2 days ago" },
  { id: 4, title: "Budget planning for 30s", time: "Last week" },
  { id: 5, title: "Index fund basics", time: "Last week" },
];

// Context-aware AI response map
const RESPONSES = {
  sip: {
    content: [
      {
        type: "text",
        value: "Yes — investing ₹1,000/month via SIP is an excellent starting point, especially if you're early in your investing journey.",
      },
      {
        type: "highlight",
        label: "Why SIP works",
        value: "SIP (Systematic Investment Plan) removes the burden of timing the market by investing a fixed amount regardless of market levels.",
      },
      {
        type: "bullets",
        heading: "Key benefits:",
        items: [
          "Builds investing discipline automatically",
          "Averages out your purchase cost (rupee-cost averaging)",
          "Compounds over time — small amounts become significant wealth",
          "Start with ₹1,000 and increase by 10% annually",
        ],
      },
      {
        type: "calculation",
        label: "Quick projection",
        rows: [
          { key: "Monthly SIP", value: "₹1,000" },
          { key: "Duration", value: "10 years" },
          { key: "Expected return", value: "12% p.a." },
          { key: "Estimated value", value: "₹23.2 Lakhs" },
          { key: "Amount invested", value: "₹1.2 Lakhs" },
        ],
      },
      {
        type: "text",
        value: "Suggested fund: Start with a Nifty 50 index fund — low cost, broad market exposure, and no fund manager risk.",
      },
    ],
  },
  savings: {
    content: [
      {
        type: "text",
        value: "A good rule of thumb is the 50/30/20 framework — a simple but powerful way to allocate your income.",
      },
      {
        type: "calculation",
        label: "For a ₹50,000 salary",
        rows: [
          { key: "Needs (50%)", value: "₹25,000" },
          { key: "Wants (30%)", value: "₹15,000" },
          { key: "Savings & investing (20%)", value: "₹10,000" },
        ],
      },
      {
        type: "bullets",
        heading: "Where to put the ₹10,000:",
        items: [
          "₹3,000 → Emergency fund (until you hit 6 months of expenses)",
          "₹5,000 → Equity mutual fund SIP (index fund or diversified)",
          "₹2,000 → PPF or ELSS for tax saving under 80C",
        ],
      },
      {
        type: "highlight",
        label: "Pro tip",
        value: "Automate your savings on salary day — transfer to investments before you can spend it.",
      },
    ],
  },
  compound: {
    content: [
      {
        type: "text",
        value: "Compound interest is often called the 8th wonder of the world — and for good reason.",
      },
      {
        type: "highlight",
        label: "Simple definition",
        value: "You earn interest on your principal, and then you also earn interest on that interest. Over time, this snowball effect creates exponential growth.",
      },
      {
        type: "calculation",
        label: "Real example",
        rows: [
          { key: "You invest", value: "₹10,000 once" },
          { key: "Rate of return", value: "12% per year" },
          { key: "After 10 years", value: "₹31,058" },
          { key: "After 20 years", value: "₹96,463" },
          { key: "After 30 years", value: "₹2,99,599" },
        ],
      },
      {
        type: "text",
        value: "Notice how the growth accelerates over time. The first 10 years it grew 3x. But in the next 20 years, it grew 10x more. This is the magic of compounding — time is the most powerful variable.",
      },
      {
        type: "bullets",
        heading: "Rule of 72 — quick trick:",
        items: [
          "Divide 72 by your return rate",
          "At 12%, your money doubles every 6 years",
          "At 8%, it doubles every 9 years",
        ],
      },
    ],
  },
  mutualfund: {
    content: [
      {
        type: "text",
        value: "Yes, mutual funds are generally safe for beginners — but 'safe' means different things depending on the type you choose.",
      },
      {
        type: "bullets",
        heading: "Types and their risk levels:",
        items: [
          "Liquid funds — Very low risk, like a smarter savings account",
          "Debt funds — Low-medium risk, stable returns of 6-8%",
          "Hybrid funds — Medium risk, balanced between equity and debt",
          "Equity/Index funds — Higher short-term volatility, best long-term returns",
        ],
      },
      {
        type: "highlight",
        label: "SEBI-regulated",
        value: "All mutual funds in India are regulated by SEBI, which means your money is managed under strict rules. Your investment is held in a trust, separate from the AMC's own funds.",
      },
      {
        type: "calculation",
        label: "Beginner starter kit",
        rows: [
          { key: "Emergency fund", value: "Liquid fund" },
          { key: "3-5 year goal", value: "Hybrid fund" },
          { key: "5+ year wealth building", value: "Nifty 50 index fund" },
        ],
      },
    ],
  },
  emergency: {
    content: [
      {
        type: "text",
        value: "An emergency fund should cover 6 months of your essential expenses — not 6 months of income. Let's build a plan.",
      },
      {
        type: "highlight",
        label: "Goal: ₹10 Lakhs",
        value: "Based on your goal, here's a structured plan to get there without impacting your lifestyle.",
      },
      {
        type: "calculation",
        label: "Your savings roadmap",
        rows: [
          { key: "Current savings", value: "₹1,50,000 (assumed)" },
          { key: "Remaining", value: "₹8,50,000" },
          { key: "Timeline: 18 months", value: "₹47,222/month" },
          { key: "Timeline: 24 months", value: "₹35,417/month" },
          { key: "Timeline: 36 months", value: "₹23,611/month" },
        ],
      },
      {
        type: "bullets",
        heading: "Best places to park emergency funds:",
        items: [
          "Liquid mutual fund — accessible within 1 day, 6-7% returns",
          "High-yield savings account — instant access, 4-5%",
          "Sweep FD — auto-deposits excess, earns FD rates",
        ],
      },
    ],
  },
  tax: {
    content: [
      {
        type: "text",
        value: "Section 80C is one of the most powerful tax-saving tools available. You can reduce your taxable income by up to ₹1,50,000 per year.",
      },
      {
        type: "calculation",
        label: "Tax saved at different slabs",
        rows: [
          { key: "20% tax bracket", value: "Save ₹30,000/year" },
          { key: "30% tax bracket", value: "Save ₹45,000/year" },
          { key: "Max 80C investment", value: "₹1,50,000/year" },
        ],
      },
      {
        type: "bullets",
        heading: "Best 80C investment options:",
        items: [
          "ELSS mutual funds — 3-year lock-in, highest potential returns (12-15%)",
          "PPF — 15-year lock-in, safe at 7.1%, fully tax-free at maturity",
          "NPS — Additional ₹50K deduction under 80CCD(1B)",
          "Life insurance premium — basic coverage + tax benefit",
          "Home loan principal repayment — if you own a home",
        ],
      },
      {
        type: "highlight",
        label: "Recommended",
        value: "For most people under 35: ELSS first (best returns, shortest lock-in), then top up with PPF for stability.",
      },
    ],
  },
  default: {
    content: [
      {
        type: "text",
        value: "That's a great question! Here's what you should know:",
      },
      {
        type: "bullets",
        heading: "Key principles to consider:",
        items: [
          "Start early — time in the market beats timing the market",
          "Diversify across asset classes for balanced risk",
          "Keep 3-6 months of expenses as emergency fund",
          "Invest regularly via SIP rather than lump sum",
        ],
      },
      {
        type: "highlight",
        label: "Remember",
        value: "Every financial decision should align with your goals, risk tolerance, and time horizon. There's no one-size-fits-all answer.",
      },
    ],
  },
};

function matchResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes("sip") || lower.includes("systematic") || lower.includes("₹1000") || lower.includes("₹1,000")) {
    return RESPONSES.sip;
  }
  if (lower.includes("save") || lower.includes("saving") || lower.includes("salary") || lower.includes("budget")) {
    return RESPONSES.savings;
  }
  if (lower.includes("compound") || lower.includes("interest") || lower.includes("rule of 72")) {
    return RESPONSES.compound;
  }
  if (lower.includes("mutual fund") || lower.includes("safe") || lower.includes("mf")) {
    return RESPONSES.mutualfund;
  }
  if (lower.includes("emergency") || lower.includes("fund") || lower.includes("10 lakh") || lower.includes("10L")) {
    return RESPONSES.emergency;
  }
  if (lower.includes("tax") || lower.includes("80c") || lower.includes("elss") || lower.includes("ppf")) {
    return RESPONSES.tax;
  }
  return RESPONSES.default;
}

export function generateResponse(userInput) {
  return matchResponse(userInput);
}