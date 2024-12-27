import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import { FundCard } from "./";

// Mock static data for testing
const staticCampaigns = [
  {
    id: 1,
    title: "Save the Ocean",
    image: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/07121349/ch-3.jpg",
    description: "Help us clean the oceans and save marine life.",
    target: "100 ETH",
    amountCollected: "50 ETH",
    deadline: "2024-12-20",
    owner: "John Doe",
    pId: "campaign1",
  },
  {
    id: 2,
    title: "Build a School",
    image: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/07121349/ch-3.jpg",
    description: "Support the construction of a new school for underprivileged children.",
    target: "200 ETH",
    amountCollected: "150 ETH",
    deadline: "2025-01-15",
    owner: "Jane Smith",
    pId: "campaign2",
  },
  {
    id: 3,
    title: "Plant Trees",
    image: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/07121349/ch-3.jpg",
    description: "Help us plant more trees to combat deforestation.",
    target: "50 ETH",
    amountCollected: "20 ETH",
    deadline: "2024-12-30",
    owner: "Alice Brown",
    pId: "campaign3",
  },
];
const DisplayCampaigns = ({ title, isLoading, campaigns = staticCampaigns }) => {
  console.log(staticCampaigns); // Log the campaigns array
  campaigns=staticCampaigns
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <h1 className="font-semibold text-white text-[18px] text-left">
        {title} ({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="text-[#818183] font-semibold text-[14px] leading-[30px]">
            No Campaigns Found
          </p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
