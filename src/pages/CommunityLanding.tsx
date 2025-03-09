import Benefit from "../components/shared/Community/Benefit";
import Eligibility from "../components/shared/Community/Eligibility";
import Header from "../components/shared/Community/Header";
import Network from "../components/shared/Community/Network";

const CommunityLanding = () => {
  return (
    <div>
      <Header />
      <Network />
      <Benefit />
      <Eligibility />
    </div>
  );
};

export default CommunityLanding;
