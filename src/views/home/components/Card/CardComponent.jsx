import styles from "./CardComponent.module.css";

const Card = (props) => {
  const { data } = props;

  return (
    <div onClick={window.open(data.wikipedia_url)} className={styles.card}>
      <img
        src={
          typeof data.image?.url === "undefined"
            ? "https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png"
            : data.image.url
        }
        alt="Avatar"
        style={{ width: "100%", height: "40vh" }}
      />
      <div className={styles.container}>
        <h3 className={styles.catName}>
          <b>{data.name}</b>
        </h3>
        <h4>Peronality: {data.temperament}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
