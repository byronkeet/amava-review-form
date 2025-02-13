import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderCardProps {
  question: string | JSX.Element;
  currentValue: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  currentIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext?: () => void;
  backText: string;
  nextText: string;
}

export const SliderCard: React.FC<SliderCardProps> = ({
  question,
  currentValue,
  min,
  max,
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
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            {question}
          </h2>
          <div className="space-y-3 pt-4">
            <input
              type="range"
              min={min}
              max={max}
              value={currentValue}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#b4854b]"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{min}</span>
              <span className="text-[#b4854b] font-medium text-lg">
                {currentValue}
              </span>
              <span>{max}</span>
            </div>
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
