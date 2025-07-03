import styles from '../styles/header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<h1>
					Furniture
				</h1>
			</div>
			<div>
				<nav className={styles.nav}>
					<a href='#' className={styles.nav__link}>Home</a>
					<a href='#' className={styles.nav__link}>Services</a>
					<a href='#' className={styles.nav__link}>Doctors</a>
					<a href='#' className={styles.nav__link}>Products</a>
					<a href='#' className={styles.nav__link}>Gallery</a>
				</nav>
			</div>
		</header>
	)
}