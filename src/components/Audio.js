import { useContext, useState } from "react";
import { UserDataContext } from "../contexts/UserContext";

import BaseDialog from "./BaseDialog";

import characters from "../data/characters";
import audios from "../data/audios";

const Audio = ({ character, message, onContinue = () => { }, input, audio }) => {
    const { userData, setUserData } = useContext(UserDataContext);

    const characterObj = characters.find((char) => char.id === Number(character)) || characters[0];
    const audioObj = audios.find((aud) => aud.id === Number(audio)) || audios[0];

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
            audioObj={audioObj}
            onInputChange={(e) => setInputValue(e.target.value)}
            onContinue={handleContinue}
            inputValue={inputValue}
            showInput={!!input}
        />
    );
};

export default Audio;