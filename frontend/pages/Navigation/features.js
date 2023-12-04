// components/sections/FeaturesSection.js
import React from 'react';
import styles from '../../styles/FeaturesSection.module.scss';

const FeaturesSection = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <h2>Our Key Features</h2>
                <div className={styles.feature}>
                    <h3>Personalized Profiles</h3>
                    <p>Create and customize your personal profile to showcase your interests and work.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Interactive Community</h3>
                    <p>Engage with a vibrant community, share ideas, and collaborate on projects.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Innovative Platform</h3>
                    <p>Access cutting-edge tools and resources to bring your creative ideas to life.</p>
                </div>
                {/* Add more features as needed */}
            </div>
        </section>
    );
}

export default FeaturesSection;
