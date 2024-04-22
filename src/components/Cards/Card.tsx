import { useState } from 'react';
import './Cards.scss';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';

function Card() {
    // Skapa separata tillstånd för varje kort
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    // Hantera klickhändelsen för första kortets kryssruta
    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };

    // Hantera klickhändelsen för andra kortets kryssruta
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

    // Funktion för att hantera klickhändelsen för klickområdet runt kryssrutan
    const handleCardClick = (cardNumber: number) => {
        if (cardNumber === 1) {
            setIsChecked1(!isChecked1);
        } else if (cardNumber === 2) {
            setIsChecked2(!isChecked2);
        }
    };

    return (
        <div className="card-container">
            <section className={`card ${isChecked1 ? 'checked' : ''}`} onClick={() => handleCardClick(1)}>
                <div className="card-content">
                    <BsWrenchAdjustableCircle className="cardicon" />
                    <div className="text-content">
                        <h2 className="card-title">Service</h2>
                        <p className="card-text">Visuel kontroll på lekage</p>
                        <input
                            type="checkbox"
                            checked={isChecked1}
                            onChange={handleCheckboxChange1}
                        />
                    </div>
                </div>
            </section>
            <section className={`card ${isChecked2 ? 'checked' : ''}`} onClick={() => handleCardClick(2)}>
                <div className="card-content">
                    <BsWrenchAdjustableCircle className="cardicon" />
                    <div className="text-content">
                        <h2 className="card-title">Service</h2>
                        <p className="card-text">Bytt Olja</p>
                        <input
                            type="checkbox"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Card;
