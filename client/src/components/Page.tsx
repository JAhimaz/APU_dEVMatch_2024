"use client";
import { FC } from "react";
import Texts from "./Atoms/Text/Texts";
import Divider from "./Atoms/Divider/Divider";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

type PageProps = {
  children?: React.ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {

  return (
  <main style={{
    minHeight: "100vh",
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '1rem',
    gap: '1rem',
  }}>
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <Texts fontSize="xs" align="left">Blood Passport</Texts>
        <WalletSelector />
      </section>
      <Divider />
      {/* <NavigationMobile /> */}
      { children }
  </main>
  )
}

export default Page;