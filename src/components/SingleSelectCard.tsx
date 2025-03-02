import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface SingleSelectCardProps {
  question: string | JSX.Element;
  subtitle?: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  currentIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext?: () => void;
  backText: string;
  nextText: string;
}

export const SingleSelectCard: React.FC<SingleSelectCardProps> = ({
  question,
  subtitle,
  options,
  selectedValue,
  onChange,
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
  backText,
  nextText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl p-6 sm:p-8"
    >
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              {question}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-gray-600">{subtitle}</p>
            )}
          </div>
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onChange(option)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-colors ${
                  selectedValue === option
                    ? "border-[#b4854b] bg-[#b4854b]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-base text-gray-900">{option}</span>
                {selectedValue === option && (
                  <Check className="w-4 h-4 text-[#b4854b]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-sm sm:text-base">
          <div className="flex items-center gap-2 sm:gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4" />
                {backText}
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span>
              {currentIndex + 1}/{totalQuestions}
            </span>
            {onNext && (
              <button
                onClick={onNext}
                className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors text-[#b4854b] hover:bg-[#b4854b]/10"
              >
                {nextText}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
