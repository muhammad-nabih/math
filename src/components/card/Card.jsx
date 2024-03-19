import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
const Card = ({ title, urlImage, info, urlLink }) => {
  return (
    <div className={`${styles.card} `}>
      <div className={styles.imageContainer}>
        <Image layout="fill" alt="cardImage" src={urlImage} />
      </div>
      <div className={styles.info}>{info}</div>
      <button className={styles.button}>
        <Link href={urlLink}>{title} </Link>
      </button>
    </div>
  );
};

export default Card;
