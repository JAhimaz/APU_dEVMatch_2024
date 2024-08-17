"use client";
import React, { FC } from "react";
import styles from './Passport.module.scss';
import Texts from "../Atoms/Text/Texts";
import Divider from "../Atoms/Divider/Divider";
import Button from "../Atoms/Button/Button";
import Selector from "../Atoms/Selector/Selector";

const Passport: FC = () => {
  return (
    <section className={styles.passportSect}>
      <Texts fontSize="sm" align="center">Blood Passport</Texts>
      <Divider />
      <Selector 
      options={[
        "Passport",
        "History"
      ]}
      selectedValue={(value) => console.log(value)}
      />
      {/* Here we include the Selector to see History or Passport */}
      <Texts fontSize="sm" align="left" concat bottomSpace="0.25rem">0x6C66E1429B34F82fFe64080313AC1C008C23f0Ce</Texts>
      <Texts fontSize="xxs" align="left" width="80%" color="var(--subtext)">This is your personal identification for Doctors / Institutions to keep record of when you donate, recieve or provide blood.</Texts>
      <Button text="Copy"  />

    </section>
  )
}

export default Passport;