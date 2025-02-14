import React, { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Question, FormState, countries } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/ProgressBar";
import { DatePicker } from "./components/DatePicker";
import { SignaturePad } from "./components/SignaturePad";
import { Select } from "./components/Select";
import { languages, translations, type LanguageCode } from "./translations";
import { supabase } from "./lib/supabase";
import { EmailCard } from "./components/EmailCard";
import { StatementCard } from "./components/StatementCard";
import { SliderCard } from "./components/SliderCard";
import { RatingCard } from "./components/RatingCard";
import { MultiSelectCard } from "./components/MultiSelectCard";
import { MultiSelectDropdownCard } from "./components/MultiSelectDropdownCard";
import { SingleSelectCard } from "./components/SingleSelectCard";
import { CompletionCard } from "./components/CompletionCard";

const guides = ["Amos", "KG", "Tony", "Ness"];

const animals = ["Lion", "Elephant", "Leopard", "Cheetah", "Buffalo", "Other"];

const activities = [
  "Game Drive",
  "Guided Walk",
  "Mokoro",
  "Boat Trip",
  "Fishing",
  "Ranger's Experience",
  "Village Tour",
];

const staffMembers = [
  "Ava",
  "Ethan",
  "Isabella",
  "Jackson",
  "Liam",
  "Lucas",
  "Mason",
  "Mia",
  "Olivia",
  "Sophia",
];

const marketingSources = (lang: LanguageCode) => [
  translations[lang].options.wordOfMouth,
  translations[lang].options.travelAgent,
  translations[lang].options.travelPlatform,
  translations[lang].options.onlineAds,
  translations[lang].options.websiteArticle,
  translations[lang].options.previousVisit,
  translations[lang].options.influencer,
  translations[lang].options.other,
];

const createQuestions = (lang: LanguageCode): Question[] => {
  return [
    {
      id: "welcome",
      type: "text",
      question: translations[lang].welcome.title,
      placeholder: translations[lang].welcome.subtitle,
      isWelcome: true,
    },
    {
      id: "fullName",
      type: "text",
      question: translations[lang].questions.fullName,
      placeholder: translations[lang].placeholders.fullName,
    },
    {
      id: "email",
      type: "email",
      question: translations[lang].questions.email,
      placeholder: translations[lang].placeholders.email,
    },
    {
      id: "nationality",
      type: "select",
      question: translations[lang].questions.nationality,
      placeholder: translations[lang].placeholders.nationality,
      options: countries,
    },
    {
      id: "travelAgent",
      type: "text",
      question: translations[lang].questions.travelAgent,
      placeholder: translations[lang].placeholders.travelAgent,
    },
    {
      id: "wildlifeExperience",
      type: "slider",
      question: translations[lang].questions.wildlifeExperience,
      min: 0,
      max: 10,
      defaultValue: 5,
    },
    {
      id: "guide",
      type: "select",
      question: translations[lang].questions.guide,
      placeholder: translations[lang].placeholders.guide,
      options: guides,
    },
    {
      id: "guideRating",
      type: "rating",
      question: translations[lang].questions.guideRating,
      defaultValue: 1,
    },
    {
      id: "keySightings",
      type: "multiselect",
      question: translations[lang].questions.keySightings,
      subtitle: translations[lang].questions.keySightingsSubtitle,
      options: animals,
    },
    {
      id: "activities",
      type: "multiselect",
      question: translations[lang].questions.activities,
      subtitle: translations[lang].questions.activitiesSubtitle,
      options: activities,
    },
    {
      id: "wildlifeComments",
      type: "text",
      question: translations[lang].questions.wildlifeComments,
      placeholder: translations[lang].placeholders.wildlifeComments,
    },
    {
      id: "accommodationRating",
      type: "rating",
      question: translations[lang].questions.accommodationRating,
      defaultValue: 1,
    },
    {
      id: "facilitiesRating",
      type: "rating",
      question: translations[lang].questions.facilitiesRating,
      defaultValue: 1,
    },
    {
      id: "foodRating",
      type: "rating",
      question: translations[lang].questions.foodRating,
      defaultValue: 1,
    },
    {
      id: "housekeepingRating",
      type: "rating",
      question: translations[lang].questions.housekeepingRating,
      defaultValue: 1,
    },
    {
      id: "staffRating",
      type: "rating",
      question: translations[lang].questions.staffRating,
      defaultValue: 1,
    },
    {
      id: "staffStandout",
      type: "multiselectdropdown",
      question: translations[lang].questions.staffStandout,
      subtitle: translations[lang].questions.staffStandoutSubtitle,
      options: staffMembers,
    },
    {
      id: "hospitalityComments",
      type: "text",
      question: translations[lang].questions.hospitalityComments,
      placeholder: translations[lang].placeholders.hospitalityComments,
    },
    {
      id: "recommendTuludi",
      type: "singleselect",
      question: translations[lang].questions.recommendTuludi,
      options: [translations[lang].buttons.yes, translations[lang].buttons.no],
    },
    {
      id: "communicationRating",
      type: "rating",
      question: translations[lang].questions.communicationRating,
      subtitle: translations[lang].questions.communicationRatingSubtitle,
      defaultValue: 1,
    },
    {
      id: "marketingSource",
      type: "select",
      question: translations[lang].questions.marketingSource,
      placeholder: translations[lang].placeholders.marketingSource,
      options: marketingSources(lang),
    },
    {
      id: "overallExperience",
      type: "slider",
      question: translations[lang].questions.overallExperience,
      min: 0,
      max: 10,
      defaultValue: 5,
    },
  ];
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    guideRating: "1",
    accommodationRating: "1",
    facilitiesRating: "1",
    foodRating: "1",
    housekeepingRating: "1",
    staffRating: "1",
    communicationRating: "1",
    overallExperience: "0",
    wildlifeExperience: "0",
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const questions = useMemo(() => createQuestions(language), [language]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      let prevQuestion = currentQuestion - 1;

      while (prevQuestion >= 0) {
        const prevQ = questions[prevQuestion];
        if (prevQ.conditional) {
          const dependsOnValue = formState[prevQ.conditional.dependsOn];
          if (dependsOnValue !== prevQ.conditional.showIf) {
            prevQuestion--;
            continue;
          }
        }
        break;
      }

      setCurrentQuestion(Math.max(0, prevQuestion));
    }
  }, [currentQuestion, formState, questions]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("review")
        .insert([
          {
            language,
            full_name: formState.fullName as string,
            email: formState.email as string,
            nationality: formState.nationality as string,
            travel_agent: formState.travelAgent as string,
            wildlife_experience: formState.wildlifeExperience as string,
            guide: formState.guide as string,
            guide_rating: formState.guideRating as string,
            key_sightings: formState.keySightings
              ? JSON.parse(formState.keySightings as string)
              : [],
            activities: formState.activities
              ? JSON.parse(formState.activities as string)
              : [],
            wildlife_comments: formState.wildlifeComments as string,
            accommodation_rating: formState.accommodationRating as string,
            facilities_rating: formState.facilitiesRating as string,
            food_rating: formState.foodRating as string,
            housekeeping_rating: formState.housekeepingRating as string,
            staff_rating: formState.staffRating as string,
            staff_standout: formState.staffStandout
              ? JSON.parse(formState.staffStandout as string)
              : [],
            hospitality_comments: formState.hospitalityComments as string,
            recommend_tuludi: formState.recommendTuludi as string,
            communication_rating: formState.communicationRating as string,
            marketing_source: formState.marketingSource as string,
            overall_experience: formState.overallExperience as string,
          },
        ])
        .select();

      if (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsCompleted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, language]);

  const handleNext = useCallback(
    (value: string | boolean) => {
      const currentQ = questions[currentQuestion];
      setFormState((prev) => ({
        ...prev,
        [currentQ.id]: value,
      }));

      if (currentQuestion < questions.length - 1) {
        let nextQuestion = currentQuestion + 1;

        while (nextQuestion < questions.length) {
          const nextQ = questions[nextQuestion];
          if (nextQ.conditional) {
            const dependsOnValue = formState[nextQ.conditional.dependsOn];
            const conditionMet =
              currentQ.id === nextQ.conditional.dependsOn
                ? value === nextQ.conditional.showIf
                : dependsOnValue === nextQ.conditional.showIf;

            if (!conditionMet) {
              nextQuestion++;
              continue;
            }
          }
          break;
        }

        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          handleSubmit();
        }
      } else {
        handleSubmit();
      }
    },
    [currentQuestion, formState, questions, handleSubmit]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent, value: string) => {
      if (e.key === "Enter" && value.trim()) {
        handleNext(value);
      }
    },
    [handleNext]
  );

  const progress = (currentQuestion / questions.length) * 100;

  if (isCompleted) {
    const t = translations[language];
    const firstName = (formState.fullName as string)?.split(" ")[0] || "";
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
        <CompletionCard
          title={t.completion.title.replace("{name}", firstName)}
          subtitle={t.completion.subtitle}
          googleButton={t.completion.googleButton}
          tripadvisorButton={t.completion.tripadvisorButton}
          firstName={firstName}
        />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const t = translations[language];

  if (currentQ.isWelcome) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
        <div className="text-center space-y-4 sm:space-y-6 max-w-xl px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
            {currentQ.question}
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            {currentQ.placeholder}
          </p>
          <div className="w-full max-w-sm mx-auto">
            <Select
              options={languages.map((l) => l.name)}
              value={languages.find((l) => l.code === language)?.name || ""}
              onChange={(value) => {
                const selectedLanguage = languages.find((l) => l.name === value)
                  ?.code as LanguageCode;
                if (selectedLanguage) {
                  setLanguage(selectedLanguage);
                }
              }}
              placeholder="Select your language"
            />
          </div>
          <button
            onClick={() => handleNext("started")}
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#b4854b] text-white rounded-lg hover:bg-[#8b6539] transition-colors duration-200 text-sm sm:text-base"
          >
            {t.welcome.start}
          </button>
        </div>
      </div>
    );
  }

  const renderQuestion = (question: Question) => {
    if (question.type === "statement") {
      return (
        <StatementCard
          name={(formState.fullName as string) || undefined}
          statement={question.question as string}
          subtitle={question.subtitle}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={handleNext}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
          showName={question.showName !== false}
        />
      );
    }
    if (question.type === "email") {
      return (
        <EmailCard
          question={question.question}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={handleNext}
          currentValue={formState[question.id] as string}
          showBackButton={!question.isWelcome}
          backText={translations[language].buttons.back}
          nextText={isSubmitting ? "..." : translations[language].buttons.next}
          placeholder={question.placeholder}
        />
      );
    }
    if (question.type === "slider") {
      return (
        <SliderCard
          question={question.question}
          currentValue={
            formState[question.id] !== undefined &&
            formState[question.id] !== ""
              ? Number(formState[question.id])
              : 5
          }
          min={question.min || 0}
          max={question.max || 10}
          onChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              [question.id]: value.toString(),
            }));
          }}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext(formState[question.id])}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        />
      );
    }
    if (question.type === "rating") {
      return (
        <RatingCard
          question={question.question}
          subtitle={question.subtitle}
          currentValue={Number(formState[question.id])}
          onChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              [question.id]: value.toString(),
            }));
          }}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext(formState[question.id])}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        />
      );
    }
    if (question.type === "multiselect") {
      return (
        <MultiSelectCard
          question={question.question as string}
          subtitle={question.subtitle}
          options={question.options || []}
          selectedValues={
            formState[question.id]
              ? JSON.parse(formState[question.id] as string)
              : []
          }
          onChange={(values) => {
            setFormState((prev) => ({
              ...prev,
              [question.id]: JSON.stringify(values),
            }));
          }}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext(formState[question.id])}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        />
      );
    }
    if (question.type === "multiselectdropdown") {
      return (
        <MultiSelectDropdownCard
          question={question.question}
          subtitle={question.subtitle}
          options={question.options || []}
          selectedValues={
            formState[question.id]
              ? JSON.parse(formState[question.id] as string)
              : []
          }
          onChange={(values) => {
            setFormState((prev) => ({
              ...prev,
              [question.id]: JSON.stringify(values),
            }));
          }}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext(formState[question.id])}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        />
      );
    }
    if (question.type === "singleselect") {
      return (
        <SingleSelectCard
          question={question.question}
          subtitle={question.subtitle}
          options={question.options || []}
          selectedValue={(formState[question.id] as string) || ""}
          onChange={(value) => {
            setFormState((prev) => ({
              ...prev,
              [question.id]: value,
            }));
          }}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext(formState[question.id])}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        />
      );
    }
    if (question.type === "select") {
      return (
        <QuestionCard
          question={question.question}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={handleNext}
          currentValue={formState[question.id]}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
        >
          <Select
            options={question.options || []}
            value={(formState[question.id] as string) || ""}
            onChange={(value) =>
              setFormState((prev) => ({ ...prev, [question.id]: value }))
            }
            placeholder={question.placeholder || "Select..."}
          />
        </QuestionCard>
      );
    }
    if (question.isThankYou) {
      const firstName = (formState.fullName as string)?.split(" ")[0] || "";
      return (
        <CompletionCard
          title={translations[language].completion.title.replace(
            "{name}",
            firstName
          )}
          subtitle={translations[language].completion.subtitle}
          googleButton={translations[language].completion.googleButton}
          tripadvisorButton={
            translations[language].completion.tripadvisorButton
          }
          firstName={firstName}
        />
      );
    }
    return (
      <QuestionCard
        key={question.id}
        question={question.question}
        currentIndex={currentQuestion}
        totalQuestions={questions.length}
        onBack={handleBack}
        onNext={handleNext}
        currentValue={formState[question.id]}
        showBackButton={!question.isWelcome}
        backText={translations[language].buttons.back}
        nextText={isSubmitting ? "..." : translations[language].buttons.next}
      >
        {question.type === "date" ? (
          <DatePicker
            value={(formState[question.id] as string) || ""}
            onChange={(value) =>
              setFormState((prev) => ({ ...prev, [question.id]: value }))
            }
          />
        ) : question.type === "checkbox" ? (
          <div className="grid gap-2 sm:gap-3">
            {question.options?.map((option) => (
              <button
                key={option}
                onClick={() =>
                  setFormState((prev) => ({
                    ...prev,
                    [question.id]:
                      option === translations[language].buttons.yes,
                  }))
                }
                className={`w-full text-left px-4 py-3 sm:px-6 sm:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base
                  ${
                    formState[question.id] ===
                    (option === translations[language].buttons.yes)
                      ? "bg-[#b4854b] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : question.type === "signature" ? (
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
            <SignaturePad
              onSign={(value) =>
                setFormState((prev) => ({ ...prev, [question.id]: value }))
              }
              clearText={translations[language].buttons.clear}
            />
          </div>
        ) : (
          <input
            type={question.type}
            placeholder={question.placeholder}
            value={(formState[question.id] as string) || ""}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                [question.id]: e.target.value,
              }))
            }
            onKeyPress={(e) =>
              handleKeyPress(e, (formState[question.id] as string) || "")
            }
            className="w-full bg-transparent border-b-2 border-gray-200 px-3 py-3 sm:px-4 sm:py-4 
                     text-lg sm:text-2xl text-gray-900 placeholder-gray-400 focus:border-[#b4854b] 
                     focus:outline-none transition-colors duration-200"
          />
        )}
      </QuestionCard>
    );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
      <ProgressBar progress={progress} />

      <AnimatePresence mode="wait">{renderQuestion(currentQ)}</AnimatePresence>
    </div>
  );
}

export default App;
