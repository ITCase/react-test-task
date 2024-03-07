import styles from './styles.module.css';

const Image = (props) => {
  const { image, alt = 'Товар' } = props;

  return (
    <div className={styles.wrapper}>
      {image && <img src={image} height={300} alt={alt} className={styles.image} />}
    </div>
  );
};

export default Image;
