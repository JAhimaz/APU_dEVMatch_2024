"use client";
import React, { FC } from "react";
import styles from './HistoryItem.module.scss';
import { Icon } from "@/util/Icons";

type HistoryItemProps = {
  type: "receive" | "donate" | "accepted";
}

const HistoryItem: FC<HistoryItemProps> = ({
  type
}) => {
  return (
    <div className={type === "donate" ? styles.donate : styles.receive}>
      <Icon icon={type} style={{
        fontSize: "1.5em",
        fill: type === "donate" ? "var(--success)" : type === "receive" ? "var(--error)" : type === "accepted" ? "var(--warning)" : "var(--subtext)"
      }}/>
      <Icon icon="external" onClick={
        () => console.log("TX Hash")
      } style={{
        cursor: "pointer",
        fill: "var(--subtext)"
      }} />
    </div>
  )
}

export default HistoryItem;