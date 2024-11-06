import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { FaSellsy } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: <MdDashboardCustomize />
    ,
  },
  {
    title: 'SalesAdmin',
    path: '/fournisseur',
    icon: <FaSellsy />

  },
  {
    title: 'FinanceAdmin',
    path: '/products',
    icon: <FaMoneyCheckDollar />
  },
  {
    title: 'StockAdmin',
    path: '/blog',
    icon: <MdOutlineProductionQuantityLimits />
    ,
  },
  {
    title: 'Fournisseur',
    path: '/supply',
    icon: <FaRegUser />
    ,
  },
];

export default navConfig;
