import dining from '../assets/dining.png';
import living from '../assets/living.png';
import bedroom from '../assets/bedroom.png';

import styles from "../styles/browse.module.scss";

export const Browse = () => {
	return (
		<div className={styles.browse}>
			<div className={styles.browse__title}>
				<h1>Browse The Range</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className={styles.browse__content}>
				<div className={styles.browse__content__card}>
					<div className={styles.browse__content__card__image}>
						<img src={dining} alt='Bedroom' className={styles.left} />
					</div>
					<h3>Dining</h3>
				</div>
				<div className={styles.browse__content__card}>
					<div className={styles.browse__content__card__image}>
						<img src={living} alt='Bedroom' className={styles.center} />
					</div>
					<h3>Living</h3>
				</div>
				<div className={styles.browse__content__card}>
					<div className={styles.browse__content__card__image}>
						<img src={bedroom} alt='Bedroom' className={styles.right} />
					</div>
					<h3>Bedroom</h3>
				</div>
			</div>
		</div>
	)
}