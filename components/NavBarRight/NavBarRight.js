import styles from "./NavBarRight.module.css"
import Image from "next/image"

const NavBarRight = () => {
  return ( 
    <aside className={styles.nav}>
      <ul className={styles.nav_list}>

        <Image src="/navLogo.png" width="100px" height="100px"/>

        <section style={{width:"90%",height:"30px",
        backgroundColor: "#373150",
        backgroundImage: "linear-gradient(160deg, #373150 0%, #211d37 100%)"
        }}>
          section
        </section>

        <section style={{width:"90%",height:"30px",backgroundColor: "#373150",
        backgroundImage: "linear-gradient(160deg, #373150 0%, #211d37 100%)"
        }}>
          section
        </section>

        <section style={{width:"90%",height:"30px",backgroundColor: "#373150",
        backgroundImage: "linear-gradient(160deg, #373150 0%, #211d37 100%)"
        }}>
          section
        </section>

        <section style={{width:"90%",height:"30px",backgroundColor: "#373150",
        backgroundImage: "linear-gradient(160deg, #373150 0%, #211d37 100%)"
        }}>
          section
        </section>

      </ul>
    </aside>
   );
}
 
export default NavBarRight;