// components/sections/TechSection.js
import React from 'react';
import styles from '../../styles/TechSection.module.scss';

const TechSection = () => {
    return (
        <section className={styles.techSection}>
            <div className={styles.container}>
                <h2>Technology Powering Aethereal Nexus</h2>
                <p>
                    At Aethereal Nexus, we harness advanced technologies to create an immersive, 
                    responsive, and highly interactive platform. Our commitment to innovation drives 
                    us to continuously explore and integrate the latest in tech advancements.
                </p>
                <ul>
                    <li>
                        <strong>GPT-Powered Insights:</strong> Utilizing AI algorithms for personalized 
                        content curation and real-time information about cultural events.
                    </li>
                    <li>
                        <strong>Robust Web Framework:</strong> Built on Next.js for seamless server-side 
                        rendering and optimal user experience.
                    </li>
                    <li>
                        <strong>Interactive Design:</strong> Leveraging React.js and advanced CSS techniques 
                        to create a dynamic and engaging user interface.
                    </li>
                    {/* Add more technologies as needed */}
                </ul>
                <p>
                    These technologies not only ensure a smooth and efficient user experience but also 
                    enable us to stay at the forefront of digital innovation, offering our community 
                    the best possible platform to connect and engage.
                </p>
            </div>
        </section>
    );
}

export default TechSection;
