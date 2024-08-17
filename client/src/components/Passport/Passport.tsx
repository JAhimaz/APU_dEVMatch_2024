"use client";
import React, { FC } from "react";
import styles from './Passport.module.scss';
import Texts from "../Atoms/Text/Texts";
import Divider from "../Atoms/Divider/Divider";
import Button from "../Atoms/Button/Button";

const Passport: FC = () => {
  return (
    <section className={styles.passportSect}>
      <Texts fontSize="sm" align="center">Blood Passport</Texts>
      <Divider />
      {/* Here we include the Selector to see History or Passport */}
      <Texts fontSize="xs" align="left" color="var(--subtext)">Identification</Texts>
      <Texts fontSize="sm" align="left" concat>0x6C66E1429B34F82fFe64080313AC1C008C23f0Ce</Texts>
      <Button text="Copy"  />

    </section>
  )
}

export default Passport;