import { useResume } from "../../../hooks/useResume";
import { MdCheckCircle, MdError } from "react-icons/md";

const ResumeAtsResult = () => {
  const {
    complexFormatting,
    contactInfo,
    fileFormat,
    standardHeaders,
    matchKeywords,
    matchPercentage,
    missingKeywords,
    recomendations,
    keywords,
  } = useResume();

  const StatusIndicator = ({ condition }: { condition: boolean }) =>
    condition ? (
      <MdCheckCircle className="text-green-500 text-lg md:text-xl" />
    ) : (
      <MdError className="text-red-500 text-lg md:text-xl" />
    );

  return (
    <section className="w-full h-full font-jarkata flex flex-col px-4 md:px-14 py-4 md:py-5 gap-4 md:gap-8">
      {/* Score Card */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          ATS Compatibility Score
        </h2>
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className={`text-4xl md:text-6xl font-bold ${
              matchPercentage >= 70
                ? "text-green-500"
                : matchPercentage >= 50
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {matchPercentage}%
          </div>
          <p className="text-sm md:text-base text-gray-600">
            of keywords matched
          </p>
        </div>
      </div>

      {/* Format Checks */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          Format Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm md:text-base">Contact Information</span>
            <StatusIndicator condition={true} />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm md:text-base">Standard Headers</span>
            <StatusIndicator condition={true} />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm md:text-base">File Format</span>
            <span className="text-sm md:text-base text-gray-600">
              <StatusIndicator condition={true} />
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm md:text-base">Complex Formatting</span>
            <StatusIndicator condition={true} />
          </div>
        </div>
      </div>

      {/* Keywords Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Matching Keywords
          </h2>
          <div className="flex flex-wrap gap-2">
            {matchKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Missing Keywords
          </h2>
          <div className="flex flex-wrap gap-2">
            {missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs md:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          Recommendations
        </h2>
        <div className="flex flex-col gap-2 md:gap-3">
          {recomendations.map((recommendation, index) => (
            <div
              key={index}
              className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-gray-700 text-sm md:text-base"
            >
              {recommendation}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeAtsResult;
