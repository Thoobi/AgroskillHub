import { createContext, useEffect, useState, JSX } from "react";
import { toast } from "sonner";
import axios from "axios";
import ResumeResult from "../components/shared/Resume/ResumeResult";
import ResumeAtsResult from "../components/shared/Resume/ResumeAtsResult";

interface FormData {
  cv: File | string;
  jobDescription: string;
  jobTitle: string;
}
interface ResumeNavItem {
  id: number;
  title: string;
  content: JSX.Element;
}

interface ResumeContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  termsAccepted: boolean;
  setAiAnalysis: React.Dispatch<React.SetStateAction<string[]>>;
  aiAnalysis: string[];
  handleForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  improvementSuggestions: string[];
  setImprovementSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  keywords: string[];
  missingSkills: string[];
  setMissingSkills: React.Dispatch<React.SetStateAction<string[]>>;
  skillsMatch: string[];
  atsCompatibility: number;
  missingKeywords: string[];
  setMissingKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  presentKeywords: string[];
  setPresentKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setAtsCompatibility: React.Dispatch<React.SetStateAction<number>>;
  setSkillsMatch: React.Dispatch<React.SetStateAction<string[]>>;
  setOverallScore: React.Dispatch<React.SetStateAction<number>>;
  overallScore: number;
  atsCompatibilityOriginal: number;
  summary: string;
  ResumeNav: ResumeNavType;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  setAtsCompatibilityOriginal: React.Dispatch<React.SetStateAction<number>>;
  overallScoreOriginal: number;
  cvData: string[];
  setDataInserted: React.Dispatch<React.SetStateAction<boolean>>;
  dataInserted: boolean;
  setOverallScoreOriginal: React.Dispatch<React.SetStateAction<number>>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  clear: boolean;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<string[]>>;
  data: string[];
  // atsData: [];
  complexFormatting: [];
  contactInfo: [];
  fileFormat: [];
  standardHeaders: [];
  matchKeywords: [];
  missingAtsKeywords: string[];
  recomendations: string[];
  matchPercentage: number;
  loadCvData: [];
  setLoadCvData: React.Dispatch<React.SetStateAction<[]>>;
}

type ResumeNavType = ResumeNavItem[];

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const ResumeNav: ResumeNavType = [
    {
      id: 1,
      title: "AI ANALYSIS",
      content: <ResumeResult />,
    },
    {
      id: 2,
      title: "ATS ANALYSIS",
      content: <ResumeAtsResult />,
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    jobDescription: "",
    jobTitle: "",
    cv: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [aiAnalysis, setAiAnalysis] = useState<string[]>([]);
  const [improvementSuggestions, setImprovementSuggestions] = useState<
    string[]
  >([]);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [skillsMatch, setSkillsMatch] = useState<string[]>([]);
  const [atsCompatibility, setAtsCompatibility] = useState<number>(0);
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);
  const [presentKeywords, setPresentKeywords] = useState<string[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);
  const [atsCompatibilityOriginal, setAtsCompatibilityOriginal] =
    useState<number>(0);
  const [overallScoreOriginal, setOverallScoreOriginal] = useState<number>(0);
  const [summary, setSummary] = useState<string>("");
  const [activeTab, setActiveTab] = useState(1);
  const [cvData, setCvData] = useState<string[]>([]);
  const [dataInserted, setDataInserted] = useState(false);
  const [clear, setClear] = useState(false);
  const [data, setData] = useState<string[]>([]);
  // const [atsData, setAtsData] = useState<[]>([]);
  const [complexFormatting, setComplexFormatting] = useState<[]>([]);
  const [contactInfo, setContactInfo] = useState<[]>([]);
  const [fileFormat, setFileFormat] = useState<[]>([]);
  const [standardHeaders, setStandardHeaders] = useState<[]>([]);
  const [matchKeywords, setMatchKeywords] = useState<[]>([]);
  const [missingAtsKeywords, setMissingAtsKeywords] = useState<string[]>([]);
  const [recomendations, setRecommendations] = useState<string[]>([""]);
  const [matchPercentage, setMatchPercentage] = useState<number>(0);
  const [keywords, setKeywords] = useState<[]>([]);
  const [loadCvData, setLoadCvData] = useState<[]>([]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(file);
    if (!selectedFile) {
      return;
    }
    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a pdf file");
      e.target.value = "";
      return;
    }
    console.log(selectedFile);
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setFormData((data) => ({ ...data, cv: selectedFile }));
    toast.success("File uploaded successfully");
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.jobTitle === "" ||
      formData.cv === "" ||
      formData.jobDescription === ""
    ) {
      toast.error("Please fill all fields");
      return;
    } else if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    try {
      setIsLoading(true);
      setModalOpen(true);

      const formDataToSend = new FormData();
      formDataToSend.append("cv", formData.cv);
      formDataToSend.append("job_description", formData.jobDescription);
      formDataToSend.append("jobTitle", formData.jobTitle);

      const response = await axios.post(
        "https://cv-review-1.onrender.com/api/upload-and-analyze",
        formDataToSend
      );

      if (response.status === 200 && response.data) {
        // Set all the relevant data from response
        const analysisResults = response.data.analysis_results.ai_analysis;
        const atsAnalysisResults = response.data.analysis_results.ats_analysis;
        setData(response.data);
        setImprovementSuggestions(
          analysisResults.improvement_suggestions || []
        );
        setMissingKeywords(
          analysisResults.keyword_analysis.missing_keywords || []
        );
        setPresentKeywords(
          analysisResults.keyword_analysis.present_keywords || []
        );
        setAtsCompatibility(analysisResults.ats_compatibility || 0);
        setMissingSkills(analysisResults.missing_skills || []);
        setSkillsMatch(analysisResults.skills_match || []);
        setOverallScore(analysisResults.overall_score || 0);
        setAtsCompatibilityOriginal(
          analysisResults.ats_compatibility_original || 0
        );
        setOverallScoreOriginal(analysisResults.overall_score_original || 0);
        setSummary(analysisResults.summary || "");
        setCvData(analysisResults || []);
        setLoadCvData(atsAnalysisResults || []);
        setComplexFormatting(
          atsAnalysisResults?.flags?.complex_formatting || []
        );
        setContactInfo(atsAnalysisResults?.flags?.contact_info || false);
        setFileFormat(atsAnalysisResults?.flags?.file_format || "");
        setMatchPercentage(
          atsAnalysisResults?.keyword_analysis?.match_percentage || 0
        );
        setStandardHeaders(atsAnalysisResults?.flags?.standard_headings || []);
        setMatchKeywords(
          atsAnalysisResults?.keyword_analysis?.matched_keywords || []
        );
        setMissingAtsKeywords(
          atsAnalysisResults?.keyword_analysis?.missing_keywords || []
        );
        setRecommendations(atsAnalysisResults?.recommendations || []);
        setKeywords(atsAnalysisResults?.keywords || []);
        localStorage.setItem(
          "reviewData",
          JSON.stringify(response.data.analysis_results.ai_analysis)
        );
        localStorage.setItem(
          "atsData",
          JSON.stringify(response.data.analysis_results.ats_analysis)
        );
        setDataInserted(true);
        setClear(false);

        // Reset form
        setFormData({
          jobDescription: "",
          jobTitle: "",
          cv: "",
        });
        setFile(null);
        setFileName("");
        setModalOpen(false);

        toast.success("CV reviewed successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error reviewing CV");
      setModalOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("reviewData");
    const atsData = localStorage.getItem("atsData");

    if (!storedData || !atsData) {
      handleClear();
      return;
    }

    try {
      const parsedData = JSON.parse(storedData);
      const parsedAtsData = JSON.parse(atsData);

      // Debug the parsed data
      console.log("Parsed Data:", {
        parsedData,
        parsedAtsData,
      });

      // Set AI Analysis data
      setImprovementSuggestions(parsedData.improvement_suggestions || []);
      setMissingKeywords(
        parsedData.keyword_analysis?.missing ||
          parsedData.keyword_analysis?.missing_keywords ||
          []
      );
      setPresentKeywords(
        parsedData.keyword_analysis?.present ||
          parsedData.keyword_analysis?.present_keywords ||
          []
      );
      setAtsCompatibility(parsedData.ats_compatibility || 0);
      setMissingSkills(parsedData.missing_skills || []);
      setSkillsMatch(parsedData.skills_match || []);
      setOverallScore(parsedData.overall_score || 0);
      setAtsCompatibilityOriginal(parsedData.ats_compatibility_original || 0);
      setOverallScoreOriginal(parsedData.overall_score_original || 0);
      setSummary(parsedData.summary || "");

      // Set ATS Analysis data
      setLoadCvData(parsedAtsData || []);
      setComplexFormatting(parsedAtsData?.flags?.complex_formatting || []);
      setContactInfo(parsedAtsData?.flags?.contact_info || false);
      setFileFormat(parsedAtsData?.flags?.file_format || "");
      setMatchPercentage(
        parsedAtsData?.keyword_analysis?.match_percentage || 0
      );
      setStandardHeaders(parsedAtsData?.flags?.standard_headings || []);
      setMatchKeywords(parsedAtsData?.keyword_analysis?.matched_keywords || []);
      setMissingAtsKeywords(
        parsedAtsData?.keyword_analysis?.missing_keywords || []
      );
      setRecommendations(parsedAtsData?.recommendations || []);
      setKeywords(parsedAtsData?.keywords || []);

      setCvData(parsedData);
      setDataInserted(true);
      setClear(false);
    } catch (error) {
      console.error("Error parsing stored data:", error);
      console.log("Stored Data:", storedData);
      console.log("ATS Data:", atsData);
      handleClear();
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("reviewData");
    localStorage.removeItem("atsData");
    setDataInserted(false);
    setImprovementSuggestions([]);
    setMissingKeywords([]);
    setPresentKeywords([]);
    setAtsCompatibility(0);
    setMissingSkills([]);
    setSkillsMatch([]);
    setOverallScore(0);
    setAtsCompatibilityOriginal(0);
    setOverallScoreOriginal(0);
    setSummary("");
    setCvData([]);
    setClear(true);
    setComplexFormatting([]);
    setContactInfo([]);
    setFileFormat([]);
    setMatchPercentage(0);
    setStandardHeaders([]);
    setMatchKeywords([]);
    setMissingAtsKeywords([]);
    setRecommendations([]);
    setKeywords([]);
    setData([]);
    setFile(null);
    setLoadCvData([]);
  };

  return (
    <ResumeContext.Provider
      value={{
        isLoading,
        setIsLoading,
        modalOpen,
        setModalOpen,
        formData,
        setFormData,
        file,
        setFile,
        fileName,
        setFileName,
        handleForm,
        onChange,
        handleFileChange,
        termsAccepted,
        setTermsAccepted,
        setAiAnalysis,
        aiAnalysis,
        improvementSuggestions,
        setImprovementSuggestions,
        keywords,
        missingSkills,
        setMissingSkills,
        skillsMatch,
        setSkillsMatch,
        atsCompatibility,
        setAtsCompatibility,
        missingKeywords,
        setMissingKeywords,
        presentKeywords,
        setPresentKeywords,
        setOverallScore,
        overallScore,
        atsCompatibilityOriginal,
        setAtsCompatibilityOriginal,
        overallScoreOriginal,
        setOverallScoreOriginal,
        setSummary,
        summary,
        ResumeNav,
        activeTab,
        setActiveTab,
        cvData,
        dataInserted,
        setDataInserted,
        handleClear,
        clear,
        setClear,
        setData,
        data,
        loadCvData,
        setLoadCvData,
        complexFormatting,
        contactInfo,
        fileFormat,
        standardHeaders,
        matchKeywords,
        missingAtsKeywords,
        recomendations,
        matchPercentage,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeContext };
