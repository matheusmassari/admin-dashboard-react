import { AiOutlineHome } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    imgUrl: AiOutlineHome,
  },
  {
    id: 2,
    text: "Waive Task",
    url: "/waive",
    imgUrl: BsFlag,
  },
  {
    id: 3,
    text: "Create Task",
    url: "/create",
    imgUrl: IoCreateOutline,
  },
];
