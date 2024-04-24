import React, { useState, useEffect } from 'react';
import './Cards.scss';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import ExpandedText from '../ExpandText/ExpandText';
import * as jsonData from '../ServiceData';

interface CardData {
    title: string;
    description: string;
    isChecked: boolean;
}

type JsonKey = keyof typeof jsonData;

const Card: React.FC = () => {
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [selectedFile, setSelectedFile] = useState<JsonKey>("fileName"); // Uppdaterad initialvärde för att undvika odefinierade objekt
    const [expandedTexts, setExpandedTexts] = useState<string[]>([]);
    const [openIndices, setOpenIndices] = useState<boolean[]>([]);

    const handleCheckboxChange = (index: number) => {
        setCardsData(prevData => prevData.map((card, i) => i === index ? { ...card, isChecked: !card.isChecked } : card));
    };

    const handleSelectFile = (fileName: JsonKey) => {
        setSelectedFile(fileName);
    };

    const handleCardClick = (index: number) => {
        setOpenIndices(prevOpenIndices => prevOpenIndices.map((isOpen, i) => i === index ? !isOpen : isOpen));
    };

    const handleMinimizeText = (index: number) => {
        setOpenIndices(prevOpenIndices => prevOpenIndices.map((isOpen, i) => i === index ? false : isOpen));
    };

    useEffect(() => {
        if (selectedFile) {
            const data = jsonData[selectedFile]?.flatMap((entry: { title: string; items: CardData[]; }) => entry.items || []) || [];
            setCardsData(data);
            setExpandedTexts(Array(data.length).fill(''));
            setOpenIndices(Array(data.length).fill(false));
        }
    }, [selectedFile]);

    return (
        <div className="card-container">
            <select className='drop-menu' value={selectedFile} onChange={(e) => handleSelectFile(e.target.value as JsonKey)}>
                <option value="">Vilken Service vill du göra?</option>
                {Object.keys(jsonData).sort().map((fileName) => (
                    <option key={fileName} value={fileName}>{fileName}</option>
                ))}
            </select>

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
                        <div className="expanded-text">
                            {openIndices[index] && (
                                <ExpandedText
                                    text={expandedTexts[index]}
                                    onSave={(text) => {
                                        setExpandedTexts(prevTexts => prevTexts.map((t, i) => i === index ? text : t));
                                    }}
                                    onClose={() => handleMinimizeText(index)}
                                />
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Card;
