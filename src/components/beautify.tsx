import image from '../assets/woman.png';

import styles from "../styles/beautify.module.scss";

export const Beautify = () => {
	return (
		<div className={styles.beautify}>
			<div className={styles.beautify__info}>
				<h1>Beautify your Space</h1>
				<p>
					Do eiusmod tempor incididunt ut labore et <br />
					dolore magna aliqua. Ut enim ad minim veniam, <br />
					quis nostrud exercitation ullamco laboris.
				</p>
				<button>LEARN MORE</button>
			</div>
			<div className={styles.beautify__content}>
				<div className={styles.beautify__content__image}>
					<img src={image} />
				</div>
				<div className={styles.beautify__content__circle} />
			</div>
		</div>
	)
}