import { FC, ReactNode } from "react";

interface IconLinkListProps {
  icon: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const IconLinkList: FC<IconLinkListProps> = (data) => {
  return (
    <li className="bg-gray text-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
      <a href={data.href} target={data.target || "_blank"} rel="noreferrer">
        {data.icon}
      </a>
    </li>
  );
};

export default IconLinkList;
