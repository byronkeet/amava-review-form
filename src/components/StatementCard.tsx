import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StatementCardProps {
  name: string;
  statement: string | JSX.Element;
  subtitle?: string;
  currentIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext?: (value: string | boolean) => void;
  backText: string;
  nextText: string;
}

export const StatementCard: React.FC<StatementCardProps> = ({
  name,
  statement,
  subtitle,
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
  backText,
  nextText,
}) => {
  const firstName = name?.split(" ")[0] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl p-6 sm:p-8"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-gray-700 text-lg sm:text-xl">
            <span className="font-bold">{firstName}</span>
            {statement}
          </p>
          {subtitle && (
            <p className="text-gray-600 text-sm sm:text-base italic">
              {subtitle}
            </p>
          )}
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
                onClick={() => onNext(true)}
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
