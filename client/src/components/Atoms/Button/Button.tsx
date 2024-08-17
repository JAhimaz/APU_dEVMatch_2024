"use client";
import React, { FC } from "react";
import Texts from "../Text/Texts";
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  primary?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({ text, primary, onClick, size = "sm" }) => {
  return (
    <div
      className={primary ? styles.primary : styles.secondary}
      onClick={onClick}>
      <Texts fontSize={size} align="center" color={
        primary ? "var(--background);" : "var(--subtext);"
      }>{text}</Texts>
    </div>
  )
}

export default Button;
