import Page from '@/components/Page'
import styles from './page.module.css'
import Passport from '@/components/Passport/Passport'

export default function Home() {
  return (
    <main className={styles.main}>
      <Page>
        <Passport />
      </Page>
    </main>
  )
}
