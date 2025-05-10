import { useState } from "react";
import BaseDialog from "./BaseDialog";

import characters from "../data/characters";

const Question = ({ character, message, onContinue = () => { }, answer }) => {
    const characterObj = characters.find((char) => char.id === character) || characters[0];

    const [inputValue, setInputValue] = useState("");

    const handleContinue = (e) => {
        e.preventDefault();

        // Validate the answer
        if (answer && inputValue.trim().toLowerCase() !== answer.toLowerCase()) {
            alert("Incorrect answer. Please try again.");
            return;
        }

        onContinue();
    };

    return (
        <BaseDialog
            characterObj={characterObj}
            message={message}
            inputValue={inputValue}
            onInputChange={(e) => setInputValue(e.target.value)}
            onContinue={handleContinue}
            showInput={true}
            placeholder="Type your answer here..."
        />
    );
};

export default Question;