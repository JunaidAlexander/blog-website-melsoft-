import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
	return (
		<section className="about-section container">
			<div className="about-content">
				{/* Video on the left */}
				<div className="video-container">
					<iframe
						title="BATSWANA"
						width="560"
						height="400"
						src="https://www.youtube.com/embed/bl1dOTQOJnw"
						frameBorder="0"
						allowFullScreen
					/>
				</div>

				{/* About text */}
				<div className="about-text">
					<h2>About Us</h2>
					<p>
						Discover the captivating world of Ngwao, where you embark on a
						digital odyssey into the heart of Tswana culture. Immerse yourself
						in the time-honored traditions, explore the nuances of the language,
						and witness the vibrant arts that define the Batswana people. Ngwao
						is not just a platform; it's a celebration of the enduring spirit
						and resilience of Tswana identity in the dynamic landscape of the
						modern world.
						<br />
						<br />
						Join us on an enriching journey that takes you deep into the soul of
						Southern Africa. Here, you will unravel the intricate beauty of
						Setswana, a language that echoes through the ages. Ngwao invites you
						to explore the rich tapestry of Tswana heritage, where each thread
						tells a story of resilience, cultural diversity, and the timeless
						connection between past and present.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
