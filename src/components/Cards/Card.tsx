import { useState, useEffect } from 'react';
import './Cards.scss';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';

interface CardData {
    title: string;
    description: string;
    isChecked: boolean;
}

function Card() {
    const [cardsData, setCardsData] = useState<CardData[]>([]);

    useEffect(() => {
        // Läs in data från JSON-filen (antag att du har din JSON-data i en fil som heter data.json)
        fetch('../src/components/Cards/WorkshopData.json')


            .then(response => response.json())
            .then((data: CardData[]) => setCardsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCheckboxChange = (index: number) => {
        const updatedCardsData = [...cardsData];
        updatedCardsData[index].isChecked = !updatedCardsData[index].isChecked;
        setCardsData(updatedCardsData);
    };

    const handleCardClick = (index: number) => {
        handleCheckboxChange(index);
    };

    return (
        <div className="card-container">
            {cardsData.map((card, index) => (
                <section key={index} className={`card ${card.isChecked ? 'checked' : ''}`} onClick={() => handleCardClick(index)}>
                    <div className="card-content">
                        <BsWrenchAdjustableCircle className="cardicon" />
                        <div className="text-content">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-text">{card.description}</p>
                            <input
                                type="checkbox"
                                checked={card.isChecked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Card;
