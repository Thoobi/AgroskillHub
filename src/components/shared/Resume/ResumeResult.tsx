import { useResume } from "../../../hooks/useResume";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { useEffect } from "react";

const formatSuggestion = (suggestion: string) => {
  const titleMatch = suggestion.match(/\*\*(.*?)\*\*/);
  if (titleMatch) {
    const [fullMatch, title] = titleMatch;
    const content = suggestion.replace(fullMatch, "").trim();
    return (
      <>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-700">{content}</p>
      </>
    );
  }
  return suggestion;
};

const ResumeResult = () => {
  const {
    improvementSuggestions,
    missingSkills,
    skillsMatch,
    atsCompatibility,
    missingKeywords,
    presentKeywords,
    summary,
    overallScore,
    overallScoreOriginal,
    atsCompatibilityOriginal,
  } = useResume();

  console.log("missingKeywords", missingKeywords);
  console.log("matchingSkills", skillsMatch);
  console.log("presentKeywords", presentKeywords);

  const ScoreCard = ({
    title,
    score,
    originalScore,
  }: {
    title: string;
    score: number;
    originalScore: number;
  }) => (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
      <h3 className="text-base md:text-lg font-medium text-gray-600 mb-4">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span
            className={`text-5xl md:text-6xl font-bold ${
              score >= 70
                ? "text-green-600"
                : score >= 50
                ? "text-yellow-400"
                : "text-red-600"
            }`}
          >
            {score}%
          </span>
          <span className="text-xs md:text-sm text-gray-500 mt-2">
            Current Score
          </span>
        </div>
        <div className="flex items-center gap-2">
          {score > originalScore ? (
            <MdTrendingUp className="text-green-500 text-xl md:text-2xl" />
          ) : (
            <MdTrendingDown className="text-red-500 text-xl md:text-2xl" />
          )}
          <span className="text-sm md:text-base text-gray-600">
            {originalScore}%
          </span>
        </div>
      </div>
    </div>
  );

  const KeywordTag = ({
    keyword,
    type,
  }: {
    keyword: string;
    type: "success" | "warning" | "error";
  }) => {
    const styles = {
      success: "bg-green-50 text-green-700 border-green-200",
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
      error: "bg-red-50 text-red-700 border-red-200",
    };

    return (
      <span
        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${styles[type]}`}
      >
        {keyword ? keyword : "There are no missing keywords"}
      </span>
    );
  };

  useEffect(() => {
    // Prevent right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        // Prevent print (Ctrl+P or Cmd+P)
        ((e.ctrlKey || e.metaKey) && e.key === "p") ||
        // Prevent screenshot
        ((e.ctrlKey || e.metaKey) && e.key === "PrintScreen") ||
        // Prevent inspect (Ctrl+Shift+I or Cmd+Shift+I or Cmd+Option+I)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "i") ||
        // Prevent source view (Ctrl+U or Cmd+U)
        ((e.ctrlKey || e.metaKey) && e.key === "u") ||
        // Prevent developer tools (Cmd+Option+J/I)
        (e.metaKey && e.altKey && (e.key === "j" || e.key === "i"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <ScoreCard
          title="ATS Compatibility"
          score={atsCompatibility}
          originalScore={atsCompatibilityOriginal}
        />
        <ScoreCard
          title="Overall Score"
          score={overallScore}
          originalScore={overallScoreOriginal}
        />
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
          {summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Improvement Suggestions */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Improvement Suggestions
            </h2>
            <div className="space-y-3">
              {improvementSuggestions?.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 md:p-4 hover:bg-yellow-100 transition-colors"
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="inline-flex items-center justify-center bg-yellow-200 text-yellow-700 rounded-full w-5 h-5 flex-shrink-0 font-semibold text-xs mt-1">
                      {index + 1}
                    </span>
                    <div className="flex-1 text-sm md:text-base">
                      {formatSuggestion(suggestion)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills Match */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Skills Analysis
            </h2>
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3">
                Matching Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatch?.map((skill, index) => (
                  <KeywordTag key={index} keyword={skill} type="success" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3">
                Missing Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {missingSkills?.map((skill, index) => (
                  <KeywordTag key={index} keyword={skill} type="error" />
                ))}
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Keyword Analysis
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3">
                  Present Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {presentKeywords?.map((keyword, index) => (
                    <KeywordTag key={index} keyword={keyword} type="success" />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3">
                  Missing Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {missingKeywords?.map((keyword, index) => (
                    <KeywordTag key={index} keyword={keyword} type="warning" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeResult;
