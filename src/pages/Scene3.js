
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/hotel-background.jpg";

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
                                message="This is the hotel. Maybe we should talk with the receptionist."
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

export default Scene3;