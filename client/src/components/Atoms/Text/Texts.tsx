"use client";
import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';

type TextsProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  color?: string;
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "headline";
  className?: string;
  style?: CSSProperties;
  weight?: "normal" | "bold" | "semi-bold" | "light";
  italics?: boolean;
  align?: "left" | "center" | "right";
  concat?: boolean;
}

const Texts: FC<TextsProps> = ({ children, color = "var(--text);", fontSize, className, style, weight, italics, align, concat }) => {
  return (
    <span 
    className={className}
    style={{
      color, 
      width: '100%',
      fontSize: fontSize === "xs" ? "1rem" : // 12px
                fontSize === "sm" ? "1.25rem" : // 16px
                fontSize === "md" ? "1.5rem" : // 20px
                fontSize === "lg" ? "2rem" : // 32px
                fontSize === "xl" ? "4rem" : // 64px
                fontSize === "headline" ? "6rem" : "1rem", // 96px
      fontWeight: weight,
      fontStyle: italics ? "italic" : "normal",
      textAlign: align,
      ...style,
    }}
    >
      { concat && typeof children == "string" ? children.slice(0, 5) + "..." + children.slice(children.length - 5, children.length) : children}
    </span>
  );
}

export default Texts;