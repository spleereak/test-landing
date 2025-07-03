import styles from './styles/home.module.scss'
import {Header} from "./components/header.tsx";
import {Hero} from "./components/hero.tsx";
import {Features} from "./components/features.tsx";
import {Inspiration} from "./components/inspiration.tsx";
import {Beautify} from "./components/beautify.tsx";
import {Browse} from "./components/browse.tsx";
import {Works} from "./components/works.tsx";
import {MailingList} from "./components/mailing-list.tsx";
import {Footer} from "./components/footer.tsx";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Features />
      <Inspiration />
      <Beautify />
      <Browse />
      <Works />
      <MailingList />
      <Footer />
    </main>
  )
}

export default App
