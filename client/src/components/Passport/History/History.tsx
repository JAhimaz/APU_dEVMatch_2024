"use client";
import React, { FC, useEffect, useState } from "react";
import styles from './History.module.scss';
import HistoryItem from "./HistoryItem/HistoryItem";
import Texts from "@/components/Atoms/Text/Texts";
import FetchUserHistory from "@/libs/@server/GetCerts";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const History: FC<{
  address: string
}> = ({
  address
}) => {

  // replace any with a TYPE
  const [userHistory, setUserHistory] = useState<undefined | any>(undefined);

  useEffect(() => {

    const FetchHistory = async (address: string) => {
      FetchUserHistory({
        address
      }).then((data) => {
        console.log(data);
        setUserHistory(data);
      })

      return setUserHistory([]);
    }

    // fetch user history
    if(userHistory === undefined && address) {
      FetchHistory(address);
    }
  }, [userHistory])

  if(!address) return <div>Loading...</div>;

  return (
    <>
    <Texts fontSize="xxs" align="center" color="var(--subtext)">Last Donation: <b>11/05/2024</b></Texts>
    <section className={styles.historySect}>
      { userHistory && userHistory.map((item: any, index: number) => {
        switch(item.name) {
          case "Blood Donation NFT":
            return <HistoryItem key={index} type="donate" item={item} />
          case "Blood Usage NFT":
            return <HistoryItem key={index} type="accepted" item={item} />
          default:
            return
        }
      })}
    </section>
    </>
  )
}

export default History;