import inspiration1 from '../assets/inspiration-1.jpg';
import inspiration2 from '../assets/inspiration-2.jpg';
import inspiration3 from '../assets/inspiration-3.jpg';
import light_lamp from '../assets/light_lamp.png';

import styles from "../styles/inspiration.module.scss";

export const Inspiration = () => {
	return (
		<div className={styles.inspiration}>
			<div className={styles.inspiration__title}>
				<h1>Inspiration Collection</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className={styles.inspiration__images}>
				<div className={styles.inspiration__images__left}>
					<img src={inspiration1} className={styles.inspiration__images__img}  alt='Inspiration' />
				</div>
				<div className={styles.inspiration__images__center}>
					<img src={inspiration2} className={styles.inspiration__images__img}  alt='Inspiration' />
				</div>
				<div className={styles.inspiration__images__right}>
					<img src={inspiration3} className={styles.inspiration__images__img} alt='Inspiration' />
					<img src={light_lamp} className={styles.inspiration__images__right__lamp}  alt='Light Lamp' />
				</div>
			</div>
		</div>
	)
}