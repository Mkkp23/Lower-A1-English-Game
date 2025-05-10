
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/restaurant-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene1 = () => {
    const navigate = useNavigate();

    const [dialog, setDialog] = useState(0);

    const { userData } = useContext(UserDataContext);

    return (
        <div
            className="flex-grow flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {(() => {
                switch (dialog) {
                    case 0:
                        return (
                            <Dialog
                                character={1}
                                message="We are here! Let's look around."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={1}
                                message="The Chef assistant is there, maybe he can help us."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={2}
                                message="Hel...llo! I am the chef assistant, I was here when the chef was murdered."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={2}
                                message="I wasn't here when it happened, but I am the first one to arrive. I saw the chef's body on the floor."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Scene
                                character={2}
                                scene={1}
                                message="I didn't touch anything, there is a note on the ground. Maybe it can help you."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={3}
                                message="On behind of the note, there is alphabet but some letters are missing. I think it is a code."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Question
                                character={3}
                                message="A B C D - F G H I J K - M N - P Q R S - U V W X Y Z ?"
                                onContinue={() => setDialog(dialog + 1)}
                                answer="Hotel"
                            />
                        );
                    case 7:
                        return (
                            <Dialog
                                character={1}
                                message={`Nice job ${userData.name}! You solved the code. The answer is Hotel. Let's go to the hotel.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 8:
                        navigate("/scene2");
                        break;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}

export default Scene1;