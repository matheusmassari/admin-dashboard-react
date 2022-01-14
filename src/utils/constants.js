import { AiOutlineHome } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    imgUrl: <AiOutlineHome size="32" color="#7a7a7a" />,
  },
  {
    id: 2,
    text: "Waive Task",
    url: "/waive",
    imgUrl: <BsFlag size="32" color="#7a7a7a" />,
  },
  {
    id: 3,
    text: "Create Task",
    url: "/create",
    imgUrl: <MdAddCircleOutline size="32" color="#7a7a7a" />,
  },
];
