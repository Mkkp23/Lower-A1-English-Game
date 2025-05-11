import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/school-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene6 = () => {
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
                                message="We've arrived at the school. The teacher might have some useful information for our investigation."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={12}
                                message={`Hello there! I'm Mr. Sam, the English teacher. How can I help you today?`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message={`We're investigating the chef's murder, and we found a clue that brought us here.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={12}
                                message="Interesting, but do you know Numbers in English? Let's start with the basics. Do you know how to say numbers from 0 to 10?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Question
                                character={12}
                                message="Let's see if you know the basics. What is the word for the number 0 in English?"
                                answer="zero"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={12}
                                message="Great! The basic numbers are: zero, one, two, three, four, five, six, seven, eight, nine, ten. Now, let's talk about 'teens' - the numbers from 11 to 19."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Dialog
                                character={12}
                                message="For teens, we have: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Notice how most of them end with 'teen'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Question
                                character={12}
                                message="What is the English word for the number 15?"
                                answer="fifteen"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 8:
                        return (
                            <Dialog
                                character={12}
                                message="Excellent! Now for the tens: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety. For numbers in between, we combine them - like twenty-one, thirty-two, etc."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 9:
                        return (
                            <Question
                                character={12}
                                message="How would you write 42 in English words?"
                                answer="forty-two"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 10:
                        return (
                            <Dialog
                                character={12}
                                message="Perfect! And to complete our lesson, one hundred is just 'one hundred'. So we have covered numbers from 0 to 100."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 11:
                        return (
                            <Dialog
                                character={12}
                                message="Wait, I just remembered something. The day before the chef was murdered, I saw him at the library. He was researching something about 'eighty-six'..."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 12:
                        return (
                            <Dialog
                                character={1}
                                message={`That's interesting! In restaurant slang, to 'eighty-six' something means to get rid of it or someone. This could be an important clue.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 13:
                        return (
                            <Dialog
                                character={12}
                                message="Oh! I didn't know that. I hope that helps with your investigation. Is there anything else you'd like to know about numbers?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 14:
                        return (
                            <Question
                                character={12}
                                message="One last question to make sure you understand. How would you write 99 in English words?"
                                answer="ninety-nine"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 15:
                        return (
                            <Dialog
                                character={12}
                                message="Excellent! You're now an expert with English numbers. Good luck with your investigation."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 16:
                        return (
                            <Dialog
                                character={1}
                                message={`Thanks for your help, Mr. Sam. The 'eighty-six' clue might lead us to who wanted to get rid of the chef. Let's head to the library next.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 17:
                        navigate("/scene7");
                        return null;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}

export default Scene6;