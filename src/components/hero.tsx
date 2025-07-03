import styles from '../styles/hero.module.scss';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__content}>
				<span>New Arrival</span>
				<h1>
					Discover Our <br />
					New Collection
				</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
				<button>BUY NOW</button>
			</div>
		</section>
	)
}