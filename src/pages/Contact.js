import { ReactComponent as Email } from "../images/icons/email.svg"

const Contact = () => {
	return (
		<div>
			<div className="contact">		
				<a href = "mailto: webdevjudit@gmail.com" target="_blank" rel="noreferrer" ><Email /></a>
				<a href = "mailto: webdevjudit@gmail.com" target="_blank" rel="noreferrer" >webdevjudit@gmail.com</a>
			</div>
		</div>
	)
}

export default Contact;