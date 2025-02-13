import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ChevronDown } from "lucide-react";

interface MultiSelectDropdownCardProps {
  question: string | JSX.Element;
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

export const MultiSelectDropdownCard: React.FC<
  MultiSelectDropdownCardProps
> = ({
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
  const [isOpen, setIsOpen] = useState(false);

  const removeValue = (valueToRemove: string) => {
    onChange(selectedValues.filter((value) => value !== valueToRemove));
  };

  const addValue = (valueToAdd: string) => {
    if (!selectedValues.includes(valueToAdd)) {
      onChange([...selectedValues, valueToAdd]);
    }
    setIsOpen(false);
  };

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

          <div className="space-y-4">
            {selectedValues.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedValues.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#b4854b]/10 text-[#b4854b]"
                  >
                    {value}
                    <button
                      onClick={() => removeValue(value)}
                      className="hover:bg-[#b4854b]/20 rounded-full p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 border rounded-lg text-gray-900 hover:border-gray-300 transition-colors"
              >
                <span className="text-gray-500">Select...</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
                  {options
                    .filter((option) => !selectedValues.includes(option))
                    .map((option) => (
                      <button
                        key={option}
                        onClick={() => addValue(option)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                </div>
              )}
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
