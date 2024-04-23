import React, { useState, useEffect } from 'react';
import './Cards.scss';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import * as jsonData from '../ServiceData'; // Importera index.ts från ServiceData-modulen

interface CardData {
    title: string;
    description: string;
    isChecked: boolean;
}

type JsonKey = keyof typeof jsonData;

const Card: React.FC = () => {
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [selectedFile, setSelectedFile] = useState<JsonKey>(''); // State för det valda JSON-filnamnet

    useEffect(() => {
        if (selectedFile) {
            // Kontrollera om den valda filen finns i jsonData innan du uppdaterar kortdatan
            if (jsonData[selectedFile]) {
                setCardsData(jsonData[selectedFile]);
            } else {
                console.error(`Data for file '${selectedFile}' not found.`);
            }
        }
    }, [selectedFile]);

    const handleCheckboxChange = (index: number) => {
        const updatedCardsData = [...cardsData];
        updatedCardsData[index].isChecked = !updatedCardsData[index].isChecked;
        setCardsData(updatedCardsData);
    };

    const handleCardClick = (index: number) => {
        handleCheckboxChange(index);
    };

    const handleSelectFile = (fileName: JsonKey) => {
        setSelectedFile(fileName); // Uppdatera det valda filnamnet när en ny fil väljs från dropdown-menyn
    };

    return (
        <div className="card-container">
            {/* Dropdown-menyn för att välja JSON-fil */}
            <select value={selectedFile} onChange={(e) => handleSelectFile(e.target.value as JsonKey)}>
                <option value="">Välj en Service</option>
                {/* Generera alternativ baserat på nycklarna i jsonData */}
                {Object.keys(jsonData).map((fileName) => (
                    <option key={fileName} value={fileName}>{fileName}</option>
                ))}
            </select>

            {/* Kort som visas baserat på det valda JSON-filnamnet */}
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
