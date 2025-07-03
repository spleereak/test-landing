import styles from '../styles/mailing-list.module.scss';

export const MailingList = () => {
	return (
		<div className={styles.mailing_list}>
			<h1 className={styles.mailing_list__title}>Join Our Mailing List</h1>
			<p className={styles.mailing_list__description}>
				Sign up to receive inspiration, product updates,<br />
				and special offers from our team.
			</p>
			<div className={styles.form_container}>
				<input
					type='email'
					className={styles.email_input}
					placeholder='example@example.com'
				/>
				<button className={styles.submit_button}>
					Submit
				</button>
			</div>
		</div>
	)
}