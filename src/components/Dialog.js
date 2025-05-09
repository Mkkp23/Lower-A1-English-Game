import { useContext, useRef } from "react";

import { UserDataContext } from "../contexts/UserContext";


const characters = [
    {
        id: 1,
        name: "Detective Molly",
        image: "miss-detective.png",
    }
]

const Dialog = ({ character, message, onContinue, input }) => {

    const isInput = !!input;
    const inputRef = useRef(null);

    const { userData, setUserData } = useContext(UserDataContext);
    const handleInputButtonClick = (e) => {
        e.preventDefault();
        if (isInput) {
            setUserData({ ...userData, [input]: inputRef.current.value });
        }
        onContinue();
    }

    const characterObj = characters.find(char => char.id === character) || characters[0];

    return (
        <div className="flex flex-col items-center justify-end h-full w-full bg-background-dark bg-opacity-75">
            <img
                src={require(`../static/images/${characterObj.image}`)}
                alt={characterObj.name}
            />
            <div className="w-full max-w-3xl bg-accent rounded-lg shadow-lg p-4 mb-4 text-gray-800">
                <h2 className="text-xl font-bold">{characterObj.name}</h2>
                <p className="text-lg">{message}</p>
                {isInput &&
                    <div className="mt-4">
                        <label className="block text-md font-medium text-gray-700 mb-2">
                            {input}
                        </label>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type your answer here..."
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    </div>
                }
                <div className="flex justify-end mt-4 -mb-6">
                    <button
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 border-2 border-white"
                        onClick={handleInputButtonClick}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;