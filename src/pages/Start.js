import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Dialog from '../components/Dialog';

import backgroundImage from '../static/images/city-background.jpg';

import { UserDataContext } from '../contexts/UserContext';

const Start = () => {
    const [dialog, setDialog] = useState(0);

    const { userData, setUserData } = useContext(UserDataContext);

    return (
        <div
            className="flex flex-col items-center justify-center h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {(() => {
                console.log(dialog);
                switch (dialog) {
                    case 0:
                        return (
                            <Dialog
                                character={1}
                                message="Hello there Detective! Are you ready to solve the case?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={1}
                                message="Great! Let's go. But first, What is your name?"
                                onContinue={() => setDialog(dialog + 1)}
                                input="name"
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message={`Nice to meet you, ${userData.name}! Let's get started.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default Start;