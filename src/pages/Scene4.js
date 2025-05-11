
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/cafe-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene4 = () => {
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
                                message="cafe Noah, I heard they have the best coffee in town!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={1}
                                message="Look there is the barista, maybe he can help us."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={8}
                                message="Hi! ... We are so busy... umm... 💤"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={1}
                                message="It seems he is so tired, he is sleeping while standing. MR NOAH WAKE UP!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Dialog
                                character={8}
                                message="Ahhh! What? Who are you? What do you want?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={1}
                                message="We need clues about the chef's death. Do you know anything?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Scene
                                character={8}
                                scene={4}
                                message="I have this box, someone brought it to me. He said it's for the chef."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Question
                                character={9}
                                message="The box is locked. Can you find the code?"
                                onContinue={() => setDialog(dialog + 1)}
                                answer={"aanana"}
                            />
                        );
                    case 8:
                        return (
                            <Dialog
                                character={10}
                                message="Oh inside the box, there is a image. Image of the shop."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 9:
                        return (
                            <Dialog
                                character={1}
                                message="We need to find the shop. Let's go!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );

                    case 10:
                        navigate("/scene5");
                        break;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}

export default Scene4;