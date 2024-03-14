import styles from "./iframe.module.css";
function Iframe({ src }) {
  return (
    <div className={styles.iframe}>
      <iframe
        width={"100%"}
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Iframe;
