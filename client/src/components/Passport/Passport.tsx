"use client";
import React, { FC } from "react";
import styles from './Passport.module.scss';
import Texts from "../Atoms/Text/Texts";
import Divider from "../Atoms/Divider/Divider";

const Passport: FC = () => {
  return (
    <section className={styles.passportSect}>
      <Texts fontSize="sm" align="center">Blood Passport</Texts>
      <Divider />
      {/* Here we include the Selector to see History or Passport */}

    </section>
  )
}

export default Passport;