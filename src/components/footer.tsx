import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

import styles from '../styles/footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__left}>
				<h2 className={styles.footer__title}>Beauty Care</h2>
				<p className={styles.footer__description}>
					Do eiusmod tempor incididunt ut labore et <br />
					dolore magna aliqua. Ut enim ad minim veniam, <br />
					quis nostrud exercitation ullamco laboris.
				</p>
				<h3 className={styles.footer__folow_us}>Follow Us</h3>
			</div>

			<div className={styles.footer__right}>
				<h3 className={styles.instagram__title}>Instagram Shop</h3>
				<div className={styles.instagram__gallery}>
					<div className={styles.instagram__item}>
						<img src={img1} alt='Img1' className={styles.img1} />
					</div>
					<div className={styles.instagram__item}>
						<img src={img2} alt='Img2' className={styles.img2} />
					</div>
					<div className={styles.instagram__item}>
						<img src={img3} alt='Img3' className={styles.img3} />
					</div>
					<div className={styles.instagram__item}>
						<img src={img4} alt='Img4' className={styles.img4} />
					</div>
				</div>
			</div>
		</footer>
	)
}