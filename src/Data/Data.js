// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "#bdb76b",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 81,
    value: "41,356",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [54, 40, 88, 51, 72, 69, 100],
      },
    ],
  },

  {
    title: "Expenses",
    color: {
      backGround: "#cf71af",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 47,
    value: "3756",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "#ff6961",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 74,
    value: "32,527",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [54, 40, 61, 50, 80, 30, 40],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Manish",
    noti: "has ordered health Tracking smart watch .",
    time: "49 seconds ago",
  },
  {
    img: img2,
    name: "Sneha Gupta",
    noti: "has received Apple Mobile charging cable.",
    time: "20 minutes ago",
  },
  {
    img: img3,
    name: "Ravi Sharma",
    noti: "has ordered Laptop , watch, samsung Gear 2500mh battery.",
    time: "3 hours ago",
  },
];
