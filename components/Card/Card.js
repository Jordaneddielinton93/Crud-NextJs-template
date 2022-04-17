import style from "./Card.module.css"
import Image from "next/image"
const Card = () => {
  return ( 
    <article className={style.Card}>
      <section className={style.Card_infoBox}>
        <div className={style.Card_infoBox_img}>
        <Image src={"/navLogo.png"}width="35px" height="35px"/>
        </div>
        <h5>A Dynamic: Title</h5>
        <h6>A Dynamic: Price</h6>
        <h6>A Dynamic: Date</h6>
        
      </section>
    </article>
   );
}
 
export default Card;