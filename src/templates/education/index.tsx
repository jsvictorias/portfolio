import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { educationMessages } from './texts';
import './styles.css';

// Extend CSSProperties to accept custom CSS variables for the animation
interface StarStyle extends React.CSSProperties {
    '--duration'?: string;
    '--x-dest'?: string;
    '--y-dest'?: string;
}

interface Star {
    id: number;
    style: StarStyle;
}

const STAR_COLORS = ['#B5CAF1', '#56B0ED', '#FF4375', '#FFCDD4', '#FFFFFF'];

export const Education: React.FC = () => {
    const { getT } = useLanguage();
    const t = getT(educationMessages);

    // Accordion data mapped from translations
    const formations = [
        { id: 'faculdade', title: t('faculdade'), desc: t('faculdade_desc') },
        { id: 'frontend', title: t('frontend'), desc: t('frontend_desc') },
        { id: 'backend', title: t('backend'), desc: t('backend_desc') },
        { id: 'design', title: t('design'), desc: t('design_desc') },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const starCount = 60; // Increased density
        const newStars: Star[] = [];
        
        for (let i = 0; i < starCount; i++) {
            const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
            const size = Math.random() * 3 + 1; // Random size ~1px to 4px
            // Using rem for properties to match design system.
            const sizeRem = (size / 16).toFixed(4);

            const style: StarStyle = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${0.6}rem`,
                height: `${0.6}rem`,
                backgroundColor: color,
                boxShadow: `0 0 ${parseFloat(sizeRem) * 2}rem ${color}`, // Individual glow
                
                // Custom properties for drift animation
                '--duration': `${Math.random() * 5 + 3}s`, // 3s to 8s
                '--x-dest': `${Math.random() * 100 - 50}px`, // Drift -50px to 50px
                '--y-dest': `${Math.random() * 100 - 50}px`,
                animationDelay: `${Math.random() * 5}s`
            };

            newStars.push({ id: i, style });
        }
        setStars(newStars);
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="education" className="container-education">
            {/* Animated Star Background */}
            <div className="stars-wrapper">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="star"
                        style={star.style}
                    />
                ))}
            </div>

            <div className="title-wrapper">
                <h1 className='education-title'>{t('formation')}</h1>
            </div>

            <div className="accordion-list">
                {formations.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={isOpen}
                            >
                                <div className="accordion-icon">
                                    <svg className="icon-svg" viewBox="0 0 24 24">
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                    </svg>
                                </div>
                                <span className="accordion-title-text">{item.title}</span>
                            </button>
                            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                                <p className="accordion-description">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};