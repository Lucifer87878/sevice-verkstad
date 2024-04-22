import React, { useState } from "react";
import './DragAndDrop.scss';
import data from './CharItem.json';
import JSConfetti from "js-confetti";

type ItemType = {
    name: string;
    description: string;
    type: string;
    rarity: string;
    stats: {
        attack: number;
        defense: number;
    }
};


export const DragAndDrop = () => {
    const [boxNames, setBoxNames] = useState({ box1: 'Box 1', box2: 'Box 2', box3: 'Box 3' });

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData('text/plain', e.currentTarget.id);
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ["🍆", "🥜"],
            confettiNumber: 10,
            emojiSize: 30,
        });
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        if (draggedElement) {
            e.currentTarget.appendChild(draggedElement);
        }
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, boxId: string) => {
        setBoxNames({ ...boxNames, [boxId]: e.target.value });
    };

    return (
        <>
            <div className="BoxContainer">
                <div id='box1' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <input type="text" value={boxNames.box1} onChange={(e) => handleNameChange(e, 'box1')} />
                    {(data.items as ItemType[]).map((item: ItemType, index: number) => (
                        <li id={`item${index}`} draggable onDragStart={handleDragStart}
                            title={`${item.description}, ${item.type}, ${item.rarity}, Attack: ${item.stats.attack}, Defense: ${item.stats.defense}`} className={item.rarity}>
                            {item.name}
                        </li>
                    ))}
                </div>
                <div id='box2' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <input type="text" value={boxNames.box2} onChange={(e) => handleNameChange(e, 'box2')} />
                </div>
                <div id='box3' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <input type="text" value={boxNames.box3} onChange={(e) => handleNameChange(e, 'box3')} />
                </div>
            </div>
        </>
    )
}

export default DragAndDrop;