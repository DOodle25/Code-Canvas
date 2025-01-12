import React, { useState } from 'react';
import styles from './accordion.module.css';

const accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questionsAndAnswers = [
        {
            question: "What types of programming languages are supported?",
            answer: "CodeCanvas supports a wide range of programming languages including JavaScript, Python, Java, C++, and more."
        },
        {
            question: "How can users contribute their own code?",
            answer: "Users can contribute by signing up, navigating to the upload section, and submitting their code snippets."
        },
        {
            question: "What features make CodeCanvas a valuable resource for developers?",
            answer: "CodeCanvas offers an extensive library of code snippets, a user-friendly interface, and the ability to contribute and share knowledge."
        },
        {
            question: "Are there any guidelines or standards for uploading code snippets?",
            answer: "Yes, CodeCanvas has a set of guidelines that users must follow to ensure high-quality and consistent code submissions."
        },
        {
            question: "How does CodeCanvas handle and protect intellectual property rights?",
            answer: "CodeCanvas respects intellectual property rights and provides users with options to license their code appropriately."
        }
    ];

    return (
        <div className={styles.container}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.accordion}>
                {questionsAndAnswers.map((item, index) => (
                    <div className={styles['accordion-item']} key={index}>
                        <button
                            id={`accordion-button-${index}`}
                            aria-expanded={activeIndex === index}
                            onClick={() => toggleAccordion(index)}
                            className={styles['accordion-button']}
                        >
                            <span className={styles['accordion-title']}>{item.question}</span>
                            <span className={styles.icon} aria-hidden="true"></span>
                        </button>
                        <div
                            className={`${styles['accordion-content']} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default accordion;
