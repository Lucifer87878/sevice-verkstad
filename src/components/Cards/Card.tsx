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
    const initialSelectedFile = Object.keys(jsonData)[' '] as JsonKey; // Använd den första nyckeln som standardvärde

    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [selectedFile, setSelectedFile] = useState<JsonKey>(initialSelectedFile); // Använd JsonKey istället för en sträng

    useEffect(() => {
        // Uppdatera kortdatan när det valda filnamnet ändras
        if (selectedFile) {
            setCardsData(jsonData[selectedFile].flatMap((entry: { title: string; items: CardData[]; }) => entry.items || []));
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
                <option value="">Välj en JSON-fil</option>
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
