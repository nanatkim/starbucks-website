import styles from "../styles/components/Content.module.css";

export function Content({ img }) {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h2>
          It's not just Coffee
          <br />
          It's <span>Starbucks</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan tellus sit amet sem elementum euismod. Fusce nec metus a ex
          cursus cursus non vel sapien. Suspendisse potenti. Donec sed
          vestibulum mi. Fusce a nisl nisl. Sed a cursus felis. Donec ut
          tristique lectus. Aliquam eros nibh, tristique ac augue nec, maximus
          mollis sem.
        </p>
        <a href="#">Learn More</a>
      </div>
      <div className={styles.imgBox}>
        <img src={`images/${img}.png`} alt="starbucks" />
      </div>
    </div>
  );
}
