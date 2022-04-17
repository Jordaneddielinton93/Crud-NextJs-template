
import HomeMainSection from '../components/HomeMainSection/HomeMainSection'
import NavBarLeft from '../components/NavBarLeft/NavBarLeft'
import NavBarRight from '../components/NavBarRight/NavBarRight'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home}>
     <NavBarLeft/>
     <HomeMainSection/>
     <NavBarRight/>
    </div>
  )
}
