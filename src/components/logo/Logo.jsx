import Link from "next/link";
import styles from "./Logo.module.css";
import Image from "next/image";
const Logo = () => {
  return (
    <div className={styles.layoutImage}>
      <Image src={"/images/logo.png"} alt="Logo" fill />
    </div>
  );
};

export default Logo;
