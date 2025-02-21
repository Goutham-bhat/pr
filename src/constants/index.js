import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";
import addresses from "./contractAddress.json"
import abi from "./abi.json"

export const contractAbi = abi
export const contractAddresses = addresses

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  // {
  //   name: "payment",
  //   imgUrl: payment,
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "withdraw",
  //   imgUrl: withdraw,
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "profile",
  //   imgUrl: profile,
  //   link: "/profile",
  // },
  // {
  //   name: "logout",
  //   imgUrl: logout,
  //   link: "/",
  //   disabled: true,
  // },
];
