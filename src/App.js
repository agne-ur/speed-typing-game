import React, {useState, useEffect, useRef} from "react";
import './App.css';


function App() {
  const STARTING_TIME = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function calculateWordCount(text) {
    if (isTimeRunning === false) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
    }
  }

  function startClock() {
    setTimeRemaining(STARTING_TIME);
    setIsTimeRunning(true);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

    return (
        <div>
            <h1>Speed typing</h1>
            <textarea value={text} onChange={handleChange} disabled={!isTimeRunning} ref={textBoxRef}></textarea>
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startClock} disabled={isTimeRunning}>Start</button>
            <h4>Word count: {wordCount}</h4>
        </div>   
    )
}

export default App;
