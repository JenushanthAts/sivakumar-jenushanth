import { FC, ReactNode } from "react";

interface IconLinkListProps {
  icon: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const IconLinkList: FC<IconLinkListProps> = (data) => {
  return (
    <li
      className="text-primary h-10 w-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-primary transition-colors duration-200 transition-transform transform
    hover:-translate-y-1 hover:scale-105 hover:text-white
    "
    >
      <a href={data.href} target={data.target || "_blank"} rel="noreferrer">
        {data.icon}
      </a>
    </li>
  );
};

export default IconLinkList;
