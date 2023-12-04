// components/sections/CommunitySection.js
import React from 'react';
import styles from '../../styles/CommunitySection.module.scss';

const CommunitySection = () => {
    return (
        <section className={styles.communitySection}>
            <div className={styles.container}>
                <h2>Embrace the World Around You</h2>
                <p>
                    Aethereal Nexus goes beyond the bounds of the digital space. We believe in the 
                    power of physical presence, the beauty of nature, and the richness of real-world 
                    experiences. Our community is everywhere - in the parks, along the city streets, 
                    among the mountains and rivers.
                </p>
                <p>
                    We encourage you to step outside, make real connections, explore, and cherish 
                    the world you live in. Use Aethereal Nexus as a springboard to discover and 
                    engage with your surroundings in meaningful ways.
                </p>
                <h3>Community Features</h3>
                <ul>
                    <li>
                        <strong>Real-time Event Information:</strong> Utilizing GPT-powered 
                        technology to provide live updates on cultural events in your vicinity.
                    </li>
                    <li>
                        <strong>Global City Database:</strong> Access a comprehensive list of 
                        cities worldwide to explore events and activities.
                    </li>
                    <li>
                        <strong>User-Driven Queries:</strong> Our platform responds to your 
                        specific interests and preferences, offering personalized event suggestions.
                    </li>
                    {/* Add more features as needed */}
                </ul>
                <p>
                    Join the Aethereal Nexus community and connect with the pulse of your city, 
                    experiencing life beyond the digital realm.
                </p>
            </div>
        </section>
    );
}

export default CommunitySection;
