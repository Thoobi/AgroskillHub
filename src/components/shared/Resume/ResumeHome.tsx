import ResumeLayout from "../../layout/ResumeLayout";
import { useResume } from "../../../hooks/useResume";
const ResumeHome = () => {
  const { activeTab, ResumeNav } = useResume();
  const content = ResumeNav.find((item) => item.id === activeTab)?.content;
  return <ResumeLayout children={content} />;
};

export default ResumeHome;
