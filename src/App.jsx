import { useState } from "react";
import "./App.css";

function App() {
  const cards = [
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets",
    },
    {
      question: "What language is used to add interactivity to websites?",
      answer: "JavaScript",
    },
    {
      question: "What HTML tag creates a hyperlink?",
      answer: "<a>",
    },
    {
      question: "What HTML tag is used for the largest heading?",
      answer: "<h1>",
    },
    {
      question: "What CSS property changes text color?",
      answer: "color",
    },
    {
      question: "What CSS property changes the background color?",
      answer: "background-color",
    },
    {
      question: "What symbol is used to target a class in CSS?",
      answer: ". (period)",
    },
    {
      question: "What symbol is used to target an id in CSS?",
      answer: "# (hashtag)",
    },
    {
      question: "What company created React?",
      answer: "Meta (Facebook)",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const nextCard = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCard);

    setCurrentCard(randomIndex);
    setFlipped(false);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Web Development Quiz Cards</h1>

        <p>
          Test your web development knowledge! Click a flashcard to reveal the
          answer and use the button below to study a random new card.
        </p>

        <div className="card-count">
          Total Flashcards: {cards.length}
        </div>
      </div>

      <div
        className="flashcard-container"
        onClick={flipCard}
      >
        <div
          className={`flashcard ${
            flipped ? "flipped" : ""
          }`}
        >
          <div className="front">
            {cards[currentCard].question}
          </div>

          <div className="back">
            {cards[currentCard].answer}
          </div>
        </div>
      </div>

      <button onClick={nextCard}>
        Random Card
      </button>
    </div>
  );
}

export default App;