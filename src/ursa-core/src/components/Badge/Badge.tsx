import React, { FC, ReactElement, ReactNode } from "react";

interface BadgeProps {
  children?: ReactNode;
  className?: string;
  badgeContent?: ReactNode;
  color?: string;
  invisible?: boolean;
  showZero?: boolean;
  max?: number;
  variant?: "dot" | "text" | "outline";
  anchorOrigin?: {
    horizontal: "top" | "right" | "bottom" | "left";
    vertical: "top" | "right" | "bottom" | "left";
  };
}

const Badge: FC<BadgeProps> = (): ReactElement => {
  return <div className="Ursa-Badge">Badge</div>;
};

export default Badge;
