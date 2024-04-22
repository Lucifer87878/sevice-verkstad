import CardPic1 from "../img/Card1.jpg";
import './Cards.scss';

function Card() {
    return (
        <section className="card">
            <div>
                <img className="cardPic" src={CardPic1} alt="Profile Picture" />
                <h2 className="card-title">Show your knowledge...</h2>
                <p className="card-text">take a test for your knowledge and show what you can..!!</p>
            </div>
        </section>
    );
}

export default Card;