import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Dialog from '../components/Dialog';
import Question from '../components/Question';

import backgroundImage from '../static/images/city-background.jpg';

import { UserDataContext } from '../contexts/UserContext';

const Start = () => {

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
                    case 3:
                        return (
                            <Question
                                character={1}
                                message={`Ok, we know he was a chef 👨‍🍳, Where did he work?`}
                                onContinue={() => setDialog(dialog + 1)}
                                answer="restaurant"
                            />
                        );
                    case 4:
                        return (
                            <Dialog
                                character={1}
                                message="Good job! Now, let's go there and see if we can find any clues."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        navigate('/scene1');
                        break;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default Start;