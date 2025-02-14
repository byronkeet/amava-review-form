import React, { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";
import { Question, FormState, countries } from "./types";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/ProgressBar";
import { DatePicker } from "./components/DatePicker";
import { SignaturePad } from "./components/SignaturePad";
import { Select } from "./components/Select";
import { languages, translations, type LanguageCode } from "./translations";
import { supabase } from "./lib/supabase";
import { EmailCard } from "./components/EmailCard";
import naturalSelectionLogo from "/natural-selection-logo.png";
import tuludiLogo from "/tuludi-logo.jpg";
import { StatementCard } from "./components/StatementCard";
import { SliderCard } from "./components/SliderCard";
import { RatingCard } from "./components/RatingCard";
import { MultiSelectCard } from "./components/MultiSelectCard";
import { MultiSelectDropdownCard } from "./components/MultiSelectDropdownCard";
import { SingleSelectCard } from "./components/SingleSelectCard";

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

const createQuestions = (lang: LanguageCode): Question[] => [
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
    id: "experienceStatement",
    type: "statement",
    question: translations[lang].questions.experienceStatement,
  },
  {
    id: "wildlifeExperience",
    type: "slider",
    question: translations[lang].questions.wildlifeExperience,
    min: 0,
    max: 10,
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
    id: "hospitalityStatement",
    type: "statement",
    question: translations[lang].questions.hospitalityStatement,
    subtitle: translations[lang].questions.hospitalitySubtitle,
  },
  {
    id: "accommodationRating",
    type: "rating",
    question: translations[lang].questions.accommodationRating,
  },
  {
    id: "facilitiesRating",
    type: "rating",
    question: translations[lang].questions.facilitiesRating,
  },
  {
    id: "foodRating",
    type: "rating",
    question: translations[lang].questions.foodRating,
  },
  {
    id: "housekeepingRating",
    type: "rating",
    question: translations[lang].questions.housekeepingRating,
  },
  {
    id: "staffRating",
    type: "rating",
    question: translations[lang].questions.staffRating,
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
    id: "communicationStatement",
    type: "statement",
    question: translations[lang].questions.communicationStatement,
    subtitle: translations[lang].questions.communicationSubtitle,
  },
  {
    id: "communicationRating",
    type: "rating",
    question: translations[lang].questions.communicationRating,
    subtitle: translations[lang].questions.communicationRatingSubtitle,
  },
  {
    id: "marketingSource",
    type: "select",
    question: translations[lang].questions.marketingSource,
    placeholder: translations[lang].placeholders.marketingSource,
    options: marketingSources(lang),
  },
  {
    id: "overallScoreStatement",
    type: "statement",
    question: translations[lang].questions.overallScoreStatement,
    subtitle: translations[lang].questions.overallScoreSubtitle,
  },
  {
    id: "overallExperience",
    type: "slider",
    question: translations[lang].questions.overallExperience,
    min: 0,
    max: 10,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formState, setFormState] = useState<FormState>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const questions = createQuestions(language);

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
      const { error } = await supabase.from("indemnity").insert([
        {
          language,
          full_name: formState.fullName as string,
          email: formState.email as string,
          nationality: formState.nationality as string,
          birthday: formState.birthday as string,
          id_number: formState.idNumber as string,
          insurance: formState.insurance as string,
          has_children: formState.hasChildren === true,
          children_names:
            formState.hasChildren === true
              ? (formState.childrenNames as string)
              : null,
          terms_accepted: formState.termsAccepted === true,
          signature: formState.signature as string,
        },
      ]);

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
  }, [formState, language, setIsSubmitting, setIsCompleted]);

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

  const Logo = () => (
    <>
      <div className="fixed top-4 left-4 sm:top-8 sm:left-8">
        <img
          src={naturalSelectionLogo}
          alt="Natural Selection"
          className="h-12 sm:h-16"
        />
      </div>
      <div className="fixed top-4 right-4 sm:top-8 sm:right-8">
        <img src={tuludiLogo} alt="Tuludi" className="h-12 sm:h-16" />
      </div>
    </>
  );

  if (isCompleted) {
    const t = translations[language];
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
        <Logo />
        <div className="text-center space-y-4 sm:space-y-6">
          <PawPrint className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#b4854b] animate-pulse" />
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            {t.completion.title.replace("{name}", formState.fullName as string)}
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            {t.completion.subtitle}
          </p>
          <a
            href="https://tripmate.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-[#b4854b] text-white rounded-lg hover:bg-[#8b6539] transition-colors duration-200 text-sm sm:text-base"
          >
            {t.completion.welcomePackButton}
          </a>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const t = translations[language];

  if (currentQ.isWelcome) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
        <Logo />
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
          name={(formState.fullName as string) || ""}
          statement={question.question}
          subtitle={question.subtitle}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
          onNext={() => handleNext("started")}
          backText={translations[language].buttons.back}
          nextText={translations[language].buttons.next}
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
      <Logo />
      <ProgressBar progress={progress} />

      <AnimatePresence mode="wait">{renderQuestion(currentQ)}</AnimatePresence>
    </div>
  );
}

export default App;
