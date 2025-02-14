import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import Logo from "/tuludi-logo.jpg";
interface CompletionCardProps {
  title: string;
  subtitle: string;
  googleButton: string;
  tripadvisorButton: string;
  firstName: string;
}

export const CompletionCard: React.FC<CompletionCardProps> = ({
  title,
  subtitle,
  googleButton,
  tripadvisorButton,
  firstName,
}) => {
  const googleReviewsUrl =
    "https://www.google.com/search?q=tuludi+camp&sca_esv=54fcc75b4f72cd60&ei=bd2uZ_i3BbqihbIPm9eNyAw&hotel_occupancy=&ved=0ahUKEwi4osfRv8KLAxU6UUEAHZtrA8kQ4dUDCBI&uact=5&oq=tuludi+camp&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3R1bHVkaSBjYW1wMhMQLhiABBhDGMcBGJgFGIoFGK8BMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyIhAuGIAEGEMYxwEYmAUYigUYrwEYlwUY3AQY3gQY4ATYAQFIkAtQiwJY8AdwAngBkAEAmAG7AqABhQmqAQUyLTMuMbgBA8gBAPgBAZgCBqACqwnCAgoQABiwAxjWBBhHmAMAiAYBkAYIugYGCAEQARgUkgcHMi4wLjMuMaAH-SE&sclient=gws-wiz-serp#lrd=0x19568d42fa87f049:0x19cd2057d4c7bf33,1,,,,";
  const tripadvisorUrl =
    "https://www.tripadvisor.co.za/Hotel_Review-g14927281-d17724734-Reviews-Tuludi-Khwai_North_West_District.html";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl p-6 sm:p-8 space-y-8"
    >
      <Logo />
      <PawPrint className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#b4854b] animate-pulse" />
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          {title.replace("{name}", firstName)}
        </h2>
        <p className="text-base sm:text-lg text-gray-600">{subtitle}</p>
      </div>
      <div className="space-y-4">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-[#b4854b] text-white hover:bg-[#a37943] transition-colors"
        >
          {googleButton}
        </a>
        <a
          href={tripadvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center px-4 py-3 rounded-lg border border-[#b4854b] text-[#b4854b] hover:bg-[#b4854b]/10 transition-colors"
        >
          {tripadvisorButton}
        </a>
      </div>
    </motion.div>
  );
};
