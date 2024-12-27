import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "../constants/ethers-5.1.esm.min";

import { useStateContext } from "../context";
import { CustomButton } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";
import { CountBox, Loader } from "../components";

const CampaignDetails = () => {
  const navigate = useNavigate();
  
  // Mock campaign data (static data)
  const campaignData = {
    pId: "1",
    owner: "0xD34dBeEf5b7e58BB3BfF4f66F68Ddd6D1b40A602",
    target: "10.0",
    amountCollected: "3.5",
    image: "https://via.placeholder.com/500x300", // Placeholder image
    description:
      "We are raising funds for a cause that is close to our hearts. Every little bit counts to make a difference in the world!",
    deadline: "2024-12-31T23:59:59Z", // Sample deadline
  };

  // Mock donators data (static data)
  const mockDonators = [
    { donator: "0x1234...abcd", donation: "0.5" },
    { donator: "0x5678...efgh", donation: "1.0" },
    { donator: "0x9abc...wxyz", donation: "2.0" },
  ];

  const remainingDays = daysLeft(campaignData.deadline);

  // Static methods to simulate fetching donators and donations
  const fetchDonators = async () => {
    setDonators(mockDonators);
  };

  const handleDonate = async () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate donation success
      setIsLoading(false);
      setAmount("");
      navigate("/");
    }, 2000);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  useEffect(() => {
    fetchDonators();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={campaignData.image}
            alt="campaignImg"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2 rounded-[10px]">
            <div
              className="absolute h-full bg-[#4acd8d] rounded-[10px]"
              style={{
                width: `${calculateBarPercentage(
                  campaignData.target,
                  campaignData.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${campaignData.target}`}
            value={campaignData.amountCollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>
      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-semibold text-[18px] text-white uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="logo"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[14px] text-white break-all">
                  {campaignData.owner}
                </h4>
                <p className="mt-[4px] font-normal text-[12px] text-[#808191]">
                  10 Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[18px] text-white uppercase">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="font-normal text-[16px] leading-[26px] text-justify text-[#808191]">
                {campaignData.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[18px] text-white uppercase">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((items, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">
                      {index + 1}. {items.donator}
                    </p>
                    <p className="font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">
                      {items.donation} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-normal text-[16px] leading-[26px] text-justify text-[#808191]">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-[18px] text-white uppercase">
            fund
          </h4>
          <div className="mt-[20px] flex flex-col p-4 rounded-[10px] bg-[#1c1c24] ">
            <p className="font-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="mt-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-semibold text-[14px] leading-[22px] text-white">
                  Back it because you believe on it.
                </h4>
                <p className="mt-[20px] font-normal leading-[22px] text-[#808191] ">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>
              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd] mt-[20px]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampaignDetails;
