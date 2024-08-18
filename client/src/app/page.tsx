import Page from '@/components/Page'
import styles from './page.module.css'
import Passport from '@/components/Passport/Passport'
import WalletWrapper from '@/components/Providers/WalletProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <WalletWrapper>
        <Page>
          <Passport />
        </Page>
      </WalletWrapper>
    </main>
  )
}
