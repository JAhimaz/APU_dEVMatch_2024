"use client";
import React, { FC } from "react";
import styles from './HistoryItem.module.scss';
import { Icon } from "@/util/Icons";
import Texts from "@/components/Atoms/Text/Texts";


type HistoryItemProps = {
  type: "receive" | "donate" | "accepted";
  item: {
    attributes: {
      trait: string;
      value: string;
    }[];
    tx_hash: string;
    block: number;
    name: string;
    created_at: string;
  };
}

const HistoryItem: FC<HistoryItemProps> = ({
  type,
  item
}) => {

  const GetName = (name: string) => {
    switch(name) {
      case "Blood Donation NFT":
        return "Donated Blood";
      case "Blood Usage NFT":
        return "Received Blood";
      default:
        return "Unknown";
    }
  }

  return (
    <div className={type === "donate" ? styles.donate : styles.receive}>
      <Icon icon={type} style={{
        fontSize: "1.5em",
        flexShrink: 0,
        fill: type === "donate" ? "var(--success)" : type === "receive" ? "var(--error)" : type === "accepted" ? "var(--warning)" : "var(--subtext)"
      }}/>

      <Texts fontSize="xxs" style={{
        width: 'fit-content',
      }} align="left" color="var(--subtext)">{item.block}</Texts>

      <Texts fontSize="xxs" align="left" color="var(--subtext)">{GetName(item.name)}</Texts>

      <Texts fontSize="xxs" align="left" color="var(--subtext)" weight="bold">Amount: {item.attributes[0].value}</Texts>

      <Texts fontSize="xxs" style={{
        marginLeft: 'auto',
      }} align="right" color="var(--subtext)">{new Date(
        item.created_at
      ).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
      )}</Texts>

      <Icon icon="external" onClick={
        () => window.open(`https://explorer-testnet.maschain.com/${item.tx_hash}`)
      } style={{
        cursor: "pointer",
        marginLeft: 'auto',
        fill: "var(--subtext)",
        flexShrink: 0
      }} />
    </div>
  )
}

export default HistoryItem;