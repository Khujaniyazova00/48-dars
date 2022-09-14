import style from "./Fulfil.module.css";

const Fulfil = ({ image, title, description }) => {
  return (
    <div className={style.fulfil}>
      <img className={style.fulfil_image} src={image} alt={title} />
      <h3 className={style.fulfil_title}>{title}</h3>
      <p className={style.fulfil_description}>{description}</p>
    </div>
  );
};

export default Fulfil;
