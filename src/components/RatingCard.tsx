import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Circle } from "lucide-react";

interface RatingCardProps {
  question: string;
  currentValue?: number;
  onChange: (value: number) => void;
  currentIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext?: () => void;
  backText: string;
  nextText: string;
}

export const RatingCard: React.FC<RatingCardProps> = ({
  question,
  currentValue,
  onChange,
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
  backText,
  nextText,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  // Only use hover value for display if we're actually hovering
  const displayValue = hoverValue !== null ? hoverValue : currentValue;

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
          <div className="flex justify-center">
            <div
              className="inline-flex gap-1 sm:gap-2 bg-transparent px-2 py-1"
              onMouseLeave={() => setHoverValue(null)}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => onChange(rating)}
                  onMouseEnter={() => setHoverValue(rating)}
                  className="relative p-1 focus:outline-none group"
                  style={{ margin: "0 -1px" }}
                >
                  <Circle
                    className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                      displayValue && rating <= displayValue
                        ? "fill-[#b4854b] text-[#b4854b]"
                        : "text-gray-300 group-hover:text-[#b4854b]"
                    }`}
                  />
                  <div
                    className="absolute inset-0 w-full h-full -mx-1"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoverValue(rating);
                    }}
                  />
                </button>
              ))}
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
