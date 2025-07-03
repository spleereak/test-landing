import businessman from '../assets/businessman.jpg'
import warehouse from '../assets/warehouse.png';
import inspiration1 from '../assets/inspiration-1.jpg';

import styles from "../styles/works.module.scss";


export const Works = () => {
	return (
		<div className={styles.works}>
			<div className={styles.works__title}>
				<h1>How It Works</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className={styles.works__content}>
				<div className={styles.card}>
					<div className={styles.card__image}>
						<img src={businessman} alt='Businessman' className={styles.businessman} />
						<div className={styles.card__badge}>
							<span className={styles.card__badge__number}>1.</span>
						</div>
					</div>

					<div className={styles.card__content}>
						<h3 className={styles.card__title}>Purchase Securely</h3>
						<p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.card__image}>
						<img src={warehouse} alt='Warehouse' className={styles.warehouse} />
						<div className={styles.card__badge}>
							<span className={styles.card__badge__number}>2.</span>
						</div>
					</div>

					<div className={styles.card__content}>
						<h3 className={styles.card__title}>Ships From Warehouse</h3>
						<p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.card__image}>
						<img src={inspiration1} alt='Inspiration' className={styles.inspiration} />
						<div className={styles.card__badge}>
							<span className={styles.card__badge__number}>3.</span>
						</div>
					</div>

					<div className={styles.card__content}>
						<h3 className={styles.card__title}>Style Your Room</h3>
						<p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
			</div>
		</div>
	)
}