
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/hotel-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene2 = () => {
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
                                message="This is the hotel. Maybe we should talk with the receptionist."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={4}
                                message="Hello! Welcome to our hotel. How can I assist you today?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message="We are looking for details about Chef who was murdered. Do you know anything about it?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={4}
                                message="Not much, but yesterday someone brought me a note. I think that can help you."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Scene
                                character={4}
                                scene={2}
                                message="Here is the note. On the back there it says 1 3 2 5."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Question
                                character={5}
                                message="What do you think this means? 1 3 2 5."
                                onContinue={() => setDialog(dialog + 1)}
                                answer="park"
                            />
                        );
                    case 6:
                        return (
                            <Dialog
                                character={1}
                                message="Ah, I see. You think it means park. I heard that the chef used to go there a lot."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Dialog
                                character={1}
                                message="Let's go to the park and see if we can find any clues."
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

export default Scene2;