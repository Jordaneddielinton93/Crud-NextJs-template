import style from "./ArtLogo.module.css"
const ArtLogo = () => {
  return ( 
    <header className={style.ArtLogo}>
      <h1 className={style.ArtLogo_header}>Your Favourite Art</h1>
      <h1 className={style.ArtLogo_header}>All Day Every Day</h1>
      <div className={style.ArtLogo_Buttons}>
        <button className={style.ArtLogo_Buttons_btn}>FindMore</button>
        <button className={style.ArtLogo_Buttons_btn}>Upload</button>
      </div>
      
    </header>
   );
}
 
export default ArtLogo;