
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/shop-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene5 = () => {
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
                                message="Such a nice shop! I love the smell of flowers in here."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={11}
                                message="Hi there kids! welcome to my shop, umm i can't remember the name of my shop, but i have the best flowers in town."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message="We are here looking for details about the chef, do you know anything about him?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Question
                                character={11}
                                message="Of course! Everyday at 8 am, he comes to buy milk, it's at ... ummm... 8 am, is ..."
                                onContinue={() => setDialog(dialog + 1)}
                                answer="morning"
                            />
                        );
                    case 4:
                        return (
                            <Question
                                character={11}
                                message="Oh yeah morning! Later, the sun was high. They came back, asking for lunch. It was ..."
                                onContinue={() => setDialog(dialog + 1)}
                                answer="afternoon"
                            />
                        );
                    case 5:
                        return (
                            <Question
                                character={11}
                                message="Yes afternoon! Before sunset, they stood near the hats. The sky was orange. That was in the ..."
                                onContinue={() => setDialog(dialog + 1)}
                                answer="evening"
                            />
                        );
                    case 6:
                        return (
                            <Question
                                character={11}
                                message="oh evening! I remember now! but when the sky was dark, and it was ..."
                                onContinue={() => setDialog(dialog + 1)}
                                answer="night"
                            />
                        );
                    case 7:
                        return (
                            <Dialog
                                character={11}
                                message="Night! Yes! He would go by my store, he would go to school at nights, i don't know why though."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 8:
                        return (
                            <Dialog
                                character={1}
                                message="School? at night? that's weird, we should check that out."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );


                    case 9:
                        navigate("/scene6");
                        break;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}

export default Scene5;