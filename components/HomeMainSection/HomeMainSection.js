import ArtLogo from "../ArtLogo/ArtLogo";
import Card from "../Card/Card";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HomeMainSection.module.css"
const HomeMainSection = () => {
  return ( 
    <main className={styles.HomeMain}>
      <SearchBar/>test
      <ArtLogo/>
      <FilterBar/>
      <div className={styles.CardContainer}>
        {["_".repeat(40).split("").map(()=>{
          return <Card/>
        })]}
        
      
      </div>
      
    </main> 
  );
}
 
export default HomeMainSection;