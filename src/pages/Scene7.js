import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";

import backgroundImage from "../static/images/library-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene7 = () => {
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
                                message="We're at the library now. Let's look for clues about why the chef was researching 'eighty-six'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={1}
                                message="Look, there's a student at the desk. Maybe she can help us."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={13}
                                message="Hi! *without looking up from phone* One sec, just posting this selfie... #LibraryLife #StudyingNotReally"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={13}
                                message="Sorry about that! I'm Lisa. How can I help you? *still glancing at phone*"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Dialog
                                character={1}
                                message="We're investigating the chef's murder. He was here researching something the day before he died."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={13}
                                message="OMG! That's so intense! I volunteer here after school. Maybe I can help you look around. Let me show you the library."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Dialog
                                character={13}
                                message="This is the main reading area. Look at all the things here!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Dialog
                                character={13}
                                message="Let's see what you know. I'll ask you some questions about what you see in the library."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 8:
                        return (
                            <Question
                                character={13}
                                message="What do you call this? 🚪 It's how you enter a room."
                                answer="door"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 9:
                        return (
                            <Dialog
                                character={13}
                                message="Correct! That's a door. We have two doors in this library. So we say 'one door' or 'two doors'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 10:
                        return (
                            <Question
                                character={13}
                                message="What do you call these? 🪑🪑 We sit on them."
                                answer="chairs"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 11:
                        return (
                            <Dialog
                                character={13}
                                message="Great! Those are chairs. One chair, two chairs. Always add 's' for more than one!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 12:
                        return (
                            <Question
                                character={13}
                                message="What is this? 🖥️ We use it to search for information."
                                answer="computer"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 13:
                        return (
                            <Dialog
                                character={13}
                                message="Perfect! That's a computer. We have five computers in the library. So it's 'one computer' but 'five computers'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 14:
                        return (
                            <Question
                                character={13}
                                message="What do you call this? 📽️ It shows big images on the wall."
                                answer="projector"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 15:
                        return (
                            <Dialog
                                character={13}
                                message="Yes! That's a projector. We only have one projector here. But if we had two, we would say 'two projectors'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 16:
                        return (
                            <Question
                                character={13}
                                message="What do you call that thing that Teachers write on it."
                                answer="board"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 17:
                        return (
                            <Dialog
                                character={13}
                                message="Exactly! That's a board. We have three boards in the library. So we say 'one board' or 'three boards'."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 18:
                        return (
                            <Dialog
                                character={13}
                                message="Wait! I just remembered something. The chef was sitting right there *points* looking at old restaurant records."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 19:
                        return (
                            <Dialog
                                character={13}
                                message="He was looking at the staff records from the hotel restaurant from twenty years ago. He seemed very interested in a waiter who was fired."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 20:
                        return (
                            <Dialog
                                character={1}
                                message="That must be the 'eighty-six' connection! In restaurant slang, to 'eighty-six' someone means to fire them. We need to find out who that waiter was."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 21:
                        return (
                            <Dialog
                                character={13}
                                message="I can help you! The records are stored digitally now. Let me check... *types on phone* The waiter's name was... James Wilson!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 22:
                        return (
                            <Dialog
                                character={1}
                                message={`Thank you, Lisa! This is a great lead. ${userData?.name || "We"} should go to the hotel next and look for more information about James Wilson.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 23:
                        navigate("/scene8");
                        return null;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default Scene7;