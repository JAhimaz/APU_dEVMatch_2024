import { CSSProperties, FC } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { BiSolidDonateBlood, BiLinkExternal } from "react-icons/bi";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

const IconsIndex = {
  twitter: FaTwitter,
  donate: TiArrowUpThick,
  accepted: BiSolidDonateBlood,
  receive: TiArrowDownThick,
  external: BiLinkExternal,
};

const Index = {
  ...IconsIndex,
}

export type IconName = keyof typeof Index | "none";

type Props = {
  icon: IconName
  className?: string
  style?: CSSProperties
  onClick?: () => void;
}

export const Icon: FC<Props> = ({ icon, className, style, onClick }) => {
  if (icon == "none") {
    return null;
  }

  const Icon = Index[icon];
  return (
    <Icon className={className} style={style} onClick={onClick} />
  )
}
