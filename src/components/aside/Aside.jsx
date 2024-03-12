import styles from "./Aside.module.css";
import { useLinks } from "@/contexts/linksContexts/LinksContext";
import Image from "next/image";
import NavItem from "@/components/navItem/NavItem";
import { useAside } from "@/contexts/asideContext/AsideContext";

const Aside = () => {
  const { showAside, setShowAside } = useAside();
  return (
    <aside className={styles.aside} style={{ left: showAside ? "0%" : "100%" }}>
      <div className={styles.frame}>
        {/* Header Aside Container */}
        <div className={styles.headerContainer}>
          <h2 className={styles.h2}>القائمة</h2>
          {/* Images Close */}

          <div
            className={styles.imageContainer}
            onClick={() => {
              setShowAside(false);
            }}
          >
            <Image src={"/images/close.svg"} alt="Close Icon" fill />
          </div>
        </div>
        {/* Links  */}
        <ul className={styles.links}>
          <NavItem />
        </ul>
        {/* footer */}
        <footer className={`${styles.footer} text-2xl `}>
          مقرر مادة الرياضيات الصف الثاني الابتدائي
        </footer>
      </div>
    </aside>
  );
};
export default Aside;
