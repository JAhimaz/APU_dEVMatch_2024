"use client";
import React, { FC } from "react";
import styles from './History.module.scss';
import HistoryItem from "./HistoryItem/HistoryItem";
import Texts from "@/components/Atoms/Text/Texts";

const History: FC = () => {
  return (
    <>
    <Texts fontSize="xxs" align="center" color="var(--subtext)">Last Donation: <b>11/05/2024</b></Texts>
    <section className={styles.historySect}>
      <HistoryItem type="donate" />
      <HistoryItem type="accepted" />
      <HistoryItem type="receive" />
      <HistoryItem type="receive" />
      <HistoryItem type="donate" />
      <HistoryItem type="receive" />
      <HistoryItem type="receive" />
      <HistoryItem type="donate" />
      <HistoryItem type="receive" />
      <HistoryItem type="accepted" />
      <HistoryItem type="receive" />
    </section>
    </>
  )
}

export default History;