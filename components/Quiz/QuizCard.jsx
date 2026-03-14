import FeedbackSection from "./FeedbackSection";
import { CATEGORY_COLORS } from "@/data/question"

const LETTERS = ["A", "B", "C", "D"];

function getOptionState(i, answered, selectedIdx, correctIdx, isCorrect) {
  if (!answered) return "default";
  if (i === correctIdx && i === selectedIdx) return "correct-selected";
  if (i === selectedIdx && !isCorrect) return "wrong-selected";
  if (i === correctIdx) return "correct-reveal";
  return "dimmed";
}

function OptionButton({ label, text, state, disabled, onClick }) {
  const styles = {
    "default": {
      wrapper: "border-[#E8E8E8] bg-white hover:border-[#CCCCCC] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
      letter: "bg-[#F5F5F3] border border-[#E8E8E8] text-[#777]",
      text: "text-[#333]",
    },
    "correct-selected": {
      wrapper: "border-[#C9A84C] bg-[#FBF7EC] cursor-default",
      letter: "bg-[#C9A84C] border-[#C9A84C] text-white",
      text: "text-[#7A6030] font-medium",
    },
    "wrong-selected": {
      wrapper: "border-[#E5A0A0] bg-[#FDF3F3] cursor-default",
      letter: "bg-[#D97070] border-[#D97070] text-white",
      text: "text-[#8A4040]",
    },
    "correct-reveal": {
      wrapper: "border-[#C9A84C] bg-[#FBF7EC] cursor-default",
      letter: "bg-[#C9A84C] border-[#C9A84C] text-white",
      text: "text-[#7A6030] font-medium",
    },
    "dimmed": {
      wrapper: "border-[#E8E8E8] bg-white opacity-35 cursor-default",
      letter: "bg-[#F5F5F3] border border-[#E8E8E8] text-[#777]",
      text: "text-[#333]",
    },
  };

  const s = styles[state];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-3.5 w-full p-3.5 rounded-[14px] border-[1.5px] text-left transition-all duration-150 ${s.wrapper}`}
    >
      <span
        className={`w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-all duration-200 ${s.letter}`}
      >
        {label}
      </span>
      <span className={`text-[14.5px] leading-snug tracking-[-0.01em] flex-1 ${s.text}`}>
        {text}
      </span>
    </button>
  );
}

export default function QuizCard({
  question,
  qIndex,
  total,
  answered,
  selectedIdx,
  isCorrect,
  onAnswer,
}) {
  const cat = CATEGORY_COLORS[question.category] || CATEGORY_COLORS.Planning;

  return (
    <div
      className="bg-white border border-[#E8E8E8] rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden"
      style={{ animation: "cardIn 0.38s cubic-bezier(0.4,0,0.2,1) both" }}
    >
      {/* Card header */}
      <div className="px-8 pt-7 pb-0">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11.5px] font-semibold text-[#C9A84C] uppercase tracking-[0.12em]">
            Question {qIndex + 1} of {total}
          </span>
          <span
            className="text-[11.5px] font-medium px-2.5 py-1 rounded-full"
            style={{
              background: cat.bg,
              color: cat.text,
              border: `1px solid ${cat.border}`,
            }}
          >
            {question.category}
          </span>
        </div>

        <p className="text-[20px] font-semibold text-[#0F0F0F] leading-[1.45] tracking-[-0.02em] mb-7">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="px-8 pb-7 flex flex-col gap-2.5">
        {question.options.map((opt, i) => (
          <OptionButton
            key={i}
            label={LETTERS[i]}
            text={opt}
            state={getOptionState(i, answered, selectedIdx, question.correct, isCorrect)}
            disabled={answered}
            onClick={() => !answered && onAnswer(i)}
          />
        ))}
      </div>

      {/* Feedback */}
      {answered && (
        <FeedbackSection isCorrect={isCorrect} explanation={question.explanation} />
      )}

      {/* Next button */}
      {answered && (
        <div className="px-8 pb-8" style={{ animation: "slideUp 0.3s ease both" }}>
          <button
            onClick={() => onAnswer("next")}
            className="w-full py-3.5 rounded-[14px] bg-[#0F0F0F] text-white text-[14px] font-medium tracking-[-0.01em] flex items-center justify-center gap-2 hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-200"
          >
            {qIndex + 1 < total ? (
              <>
                Next Question
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                See My Results
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 2L12 7L7 12M2 7H12"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}