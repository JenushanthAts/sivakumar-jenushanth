import { FC, ReactNode } from "react";

interface IconLinkListProps {
  icon: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const IconLinkList: FC<IconLinkListProps> = (data) => {
  return (
    <li className="text-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0 border border-gray-300 hover:bg-primary transition-colors duration-200 transition-transform transform hover:scale-105 origin-bottom">
      <a
        href={data.href}
        target={data.target || "_blank"}
        rel="noreferrer"
        className="group-hover:text-white"
      >
        {data.icon}
      </a>
    </li>
  );
};

export default IconLinkList;
