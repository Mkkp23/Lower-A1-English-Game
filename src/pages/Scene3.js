
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/park-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene3 = () => {
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
                                message="Wow! What a beautiful park!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={6}
                                message="Psst! Hey you! Can you help me?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message="Oh! But we are busy solving a mystery. Chef is dead!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={6}
                                message="I'm Leon, the hobo. I have some good info for you but i need a favor, Someone gave me this note, that is key to being a millionaire."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Dialog
                                character={6}
                                message="But when I was drunk, I spilled my drink on it and now I can't read it."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={6}
                                message="But when I was drunk, I spilled my drink on it and now I can't read it."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Scene
                                character={6}
                                scene={3}
                                message="Here is the note. Can you help me?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Question
                                character={7}
                                message="My bag is lost. I took a .....🚕."
                                onContinue={() => setDialog(dialog + 1)}
                                answer={"taxi"}
                            />
                        );
                    case 8:
                        return (
                            <Question
                                character={7}
                                message="With Taxi, I left the .....🏙️."
                                onContinue={() => setDialog(dialog + 1)}
                                answer={"city"}
                            />
                        );
                    case 9:
                        return (
                            <Question
                                character={7}
                                message="I went to the .....🛫."
                                onContinue={() => setDialog(dialog + 1)}
                                answer={"airport"}
                            />
                        );
                    case 10:
                        return (
                            <Question
                                character={7}
                                message="Last thing I remember is that I was eating .....🍔. I guess I left my bag there."
                                onContinue={() => setDialog(dialog + 1)}
                                answer={"hamburger"}
                            />
                        );
                    case 11:
                        return (
                            <Dialog
                                character={6}
                                message="Okkkk! Thanks, I will go the airport now, btw you should go to the cafe ...🏃‍♂️‍➡️"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 12:
                        return (
                            <Dialog
                                character={1}
                                message="Wow, he went so fast! I hope he finds the bag. Let's go to the cafe."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 13:
                        navigate("/scene4");
                        break;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}

export default Scene3;