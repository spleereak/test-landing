import group from '../assets/Group.svg';
import refresh from '../assets/24.svg';
import shield from '../assets/shield.png';

import styles from '../styles/features.module.scss';

export const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.features__component}>
				<div>
					<img src={group} alt='Group' />
				</div>
				<div className={styles.features__text}>
					<h3>Free Delivery</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className={styles.features__component}>
				<img src={refresh} alt='Refresh' />
				<div className={styles.features__text}>
					<h3>Support 24/7</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className={styles.features__component}>
				<img src={shield} alt='Shield' />
				<div className={styles.features__text}>
					<h3>100% Authentic</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</section>
	)
}