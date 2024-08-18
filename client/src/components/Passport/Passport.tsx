"use client";
import React, { FC, useEffect, useState } from "react";
import styles from './Passport.module.scss';
import Texts from "../Atoms/Text/Texts";
import Divider from "../Atoms/Divider/Divider";
import Button from "../Atoms/Button/Button";
import Selector from "../Atoms/Selector/Selector";
import { on } from "events";
import BloodType from "@/libs/BloodType";
import History from "./History/History";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import QRCode from "react-qr-code";

const Passport: FC = () => {

  const [selected, setSelected] = useState<string>("Details");
  const [userData, setUserData] = useState({
    address: "",
    bloodType: BloodType.AB_NEGATIVE,
    age: 24,
    weight: 82.4,
    nationality: "MY",
    medicalHistory: [
      "Hypertension",
      "Diabetes Type-2",
      "High Cholesterol",
      "Asthma",
      "Allergies",
      "Migraines",
      "Anxiety",
      "Depression",
      "PTSD",
      "Insomnia",
      "Chronic Pain",
      "Arthritis",
      "Fibromyalgia",
      "Cancer",
      "Heart Disease",
      "Stroke",
      "Kidney Disease",
      "Liver Disease",
      "Lung Disease",
      "Thyroid Disease",
    ]
  })

  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [isReceiving, setIsReceiving] = useState<boolean>(false);

  const { account } = useWallet();

  useEffect(() => {
    if(account) {
      setUserData({
        ...userData,
        address: account.address.toString()
      })
    }
  }, [userData, account])

  return (
    <section className={styles.passportSect}>
      <Selector 
      options={[
        "Details",
        "Medicals",
        "History"
      ]}
      selectedValue={(value) => setSelected(value)}
      />

      {
        selected === "Details" ? (
          <>
            { account ? (
              <>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  width: '100%',
                  height: '100%',
                }}>
                <QRCode value={userData.address} size={220} />
                </div>
                <Texts fontSize="sm" align="center" color="var(--subtext)" concat bottomSpace="0.25rem">{userData.address}</Texts>
                  <section className={styles.userDetails}>
                    <section style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      flex: 2,
                      gap: '0.5rem',
                      height: '100%',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }} onClick={() => {
                      setIsReceiving(!isReceiving);
                    }}>
                      { !isReceiving ? (
                        <>
                          <Texts fontSize="xxs" color={"var(--subtext)"} align="center">Blood Type</Texts>
                          <Texts fontSize="lg" weight="bold" align="center">{userData.bloodType.name}</Texts>
                        </>
                      ) : (
                        <>
                          <Texts fontSize="xxs" color={"var(--subtext)"} align="center">Can Receive</Texts>
                          <Texts fontSize={
                            userData.bloodType.canReceive.length > 3 ? "xxs" : "lg"
                          } weight="bold" align="center">{userData.bloodType.canReceive.join(", ")}</Texts>
                        </>
                      )}
                    </section>
                    <section style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flex: 3,
                      height: '100%',
                      gap: '0.25rem'
                    }}>
                      <LabeledText label="Age" text={userData.age.toString()} />
                      <LabeledText label="Weight" onClick={() => setIsMetric(!isMetric)} text={isMetric ? `${userData.weight.toString()} kg` : `${(userData.weight * 2.20462).toPrecision(5)} lbs`} />
                      <LabeledText label="Nationality" text={userData.nationality} />
                    </section>
                  </section>
              </>
            ) : (
              <Texts fontSize="sm" align="center" style={{
                marginTop: 'auto'
              }}>Please Connect to a Wallet </Texts>
            )}
          </>
        ) : 
        selected === "History" ? (
          <History />
        ) :
        selected === "Medicals" ? (
          <section className={styles.userDetails} style={{
            height: '100%',
            flexDirection: 'column',
            gap: 0,
            padding: 0,
            overflow: "hidden",
            overflowY: "auto"
          }}>
            {/* Medical History */}
            {
              userData.medicalHistory.map((condition, index) => (
                <div key={index} style={{
                  borderBottom: '1px solid var(--foreground)',
                  width: '100%',
                  padding: '0.5rem',
                }}>
                  <Texts fontSize="xxs" align="left">{condition}</Texts>
                </div>
              ))
            }
          </section>
        ) : null
      }
      <Divider />
        <Texts fontSize="xxs" align="center" color="var(--subtext)">This is your personal identification for Doctors / Institutions to keep record of when you donate, receive or provide blood.</Texts>
      <Divider />
    </section>
  )
}

const LabeledText: FC<{ label: string, text: string, onClick?: () => void }> = ({ label, text, onClick }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '0.5rem',
    width: '100%',
    userSelect: 'none',
    cursor: onClick ? 'pointer' : 'default'
  }}
  onClick={onClick}
  >
    <Texts fontSize="xxs" color={"var(--subtext)"}>{label}</Texts>
    <Texts fontSize="xs" align="right">{text}</Texts>
  </div>
)

export default Passport;