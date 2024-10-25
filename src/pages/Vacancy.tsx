import React, { useState } from 'react';
import VacancyCard from '../components/VacancyCard';

const Vacancy = () => {
    const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

    const items = [
        {
            itemNumber: 1,
            content: "მოგესალმებით გამოგვიგზავნეთ თქვენი რეზიუმე აქ shako@gmail.com არ დაგავიწყდეთ ვაკანსიის დასახელება..."
        },
        {
            itemNumber: 2,
            content: "11111111"
        },
        {
            itemNumber: 3,
            content: "11111111"
        },
        {
            itemNumber: 4,
            content: "11111111"
        },
        {
            itemNumber: 5,
            content: "11111111"
        },
        {
            itemNumber: 6,
            content: "11111111"
        },
    ];

    const handleClick = (accordionNumber:any) => {
        if (activeAccordionNumber === accordionNumber) {
            setActiveAccordionNumber(null);
        } else {
            setActiveAccordionNumber(accordionNumber);
        }
    };

    return (
        <section className="Vacancy">
            <div className="vacancy_top">
            <span className='top-span'>ვაკანსიები</span> 
            </div>
            <div className="container">
                <div className="Vacancy_container">
                    {items.map((item, index) => (
                        <VacancyCard
                            key={index}
                            handleClick={handleClick}
                            itemNumber={item.itemNumber}
                            content={item.content}
                            activeAccordionNumber={activeAccordionNumber} // Pass this prop
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vacancy;
