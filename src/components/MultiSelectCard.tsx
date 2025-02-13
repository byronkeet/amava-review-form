import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface MultiSelectCardProps {
  question: string;
  subtitle?: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  currentIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext?: () => void;
  backText: string;
  nextText: string;
}

export const MultiSelectCard: React.FC<MultiSelectCardProps> = ({
  question,
  subtitle,
  options,
  selectedValues,
  onChange,
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
  backText,
  nextText,
}) => {
  const toggleOption = (option: string) => {
    const newValues = selectedValues.includes(option)
      ? selectedValues.filter((v) => v !== option)
      : [...selectedValues, option];
    onChange(newValues);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl p-4 sm:p-8"
    >
      <div className="space-y-4 sm:space-y-8">
        <div className="space-y-3 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
              {question}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-lg text-gray-600">{subtitle}</p>
            )}
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border transition-colors ${
                  selectedValues.includes(option)
                    ? "border-[#b4854b] bg-[#b4854b]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-sm sm:text-base text-gray-900">
                  {option}
                </span>
                {selectedValues.includes(option) && (
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b4854b]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-base text-gray-500">
          <div className="flex items-center gap-2 sm:gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors text-[#b4854b] hover:bg-[#b4854b]/10"
              >
                {nextText}
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
