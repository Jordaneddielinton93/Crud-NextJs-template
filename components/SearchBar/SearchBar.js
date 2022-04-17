import styles from "./SearchBar.module.css"
import { IoMdNotifications } from 'react-icons/io';
import { MdAccountBalanceWallet } from 'react-icons/md';
const SearchBar = () => {
  return ( 
    <div className={styles.SearchBar}>

      <input type="search" name="Search" className={styles.inputbox} />

      <section className={styles.SearchBar_Section}>
        <div className={styles.SearchBar_Section_counter}>
          <MdAccountBalanceWallet style={{fontSize:"1rem"}}/>
          <h1>22E12123</h1>
        </div>
        <div className={styles.SearchBar_Section_notification}>
          <IoMdNotifications/>
        </div>
      </section>

    </div>
   );
}
 
export default SearchBar;