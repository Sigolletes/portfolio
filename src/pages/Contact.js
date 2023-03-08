import { ReactComponent as Email } from "../images/icons/email.svg";
import { ReactComponent as GitHub } from "../images/icons/github.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";

const Contact = () => {
	return (
		<div className="contact">	
			<div>
				<a href="https://github.com/Sigolletes" target="_blank" rel="noreferrer" >
					<GitHub />
				</a>
				<a href="https://github.com/Sigolletes" target="_blank" rel="noreferrer" >
					GitHub
				</a>
			</div>
			<div>
				<a href = "mailto: webdevjudit@gmail.com" target="_blank" rel="noreferrer" >
					<Email />					
				</a>
				<a href = "mailto: webdevjudit@gmail.com" target="_blank" rel="noreferrer" >
					webdevjudit@gmail.com
				</a>
			</div>	
			<div>
				<a href="#" target="_blank" rel="noreferrer" >
					<Linkedin />
				</a>
				<a href="https://github.com/Sigolletes" target="_blank" rel="noreferrer" >
					Linkedin
				</a>
			</div>
		</div>
	)
}

export default Contact;