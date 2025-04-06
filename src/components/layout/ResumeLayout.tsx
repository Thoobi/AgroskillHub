import ResumeNavbar from "../shared/Resume/ResumeNavbar";

interface ResumeLayoutProps {
  children: React.ReactNode;
}

const ResumeLayout = ({ children }: ResumeLayoutProps) => {
  return (
    <section className="w-full h-full font-jarkata flex flex-col">
      <ResumeNavbar />
      {children}
    </section>
  );
};

export default ResumeLayout;
