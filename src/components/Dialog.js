import { useContext, useState } from "react";
import { UserDataContext } from "../contexts/UserContext";

import BaseDialog from "./BaseDialog";

import characters from "../data/characters";

const Dialog = ({ character, message, onContinue = () => { }, input }) => {
    const { userData, setUserData } = useContext(UserDataContext);
    const characterObj = characters.find((char) => char.id === Number(character)) || characters[0];

    const [inputValue, setInputValue] = useState(userData?.[input] || "");

    const handleContinue = (e) => {
        e.preventDefault();

        if (input) {
            setUserData({
                ...userData,
                [input]: inputValue.trim(),
            });
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
            showInput={!!input}
        />
    );
};

export default Dialog;