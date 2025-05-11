import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "../components/Dialog";
import Question from "../components/Question";
import Scene from "../components/Scene";
import Audio from "../components/Audio";

import backgroundImage from "../static/images/hotel-background.jpg";

import { UserDataContext } from "../contexts/UserContext";

const Scene8 = () => {
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
                                message="We're back at the hotel. Let's talk to the receptionist about James Wilson."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 1:
                        return (
                            <Dialog
                                character={4}
                                message={`Hello again ${userData?.name || "detective"}! How can I help you today?`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 2:
                        return (
                            <Dialog
                                character={1}
                                message="We need to find James Wilson. He used to work at the restaurant as a waiter about twenty years ago, and was fired - or 'eighty-sixed' as they say."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 3:
                        return (
                            <Dialog
                                character={4}
                                message="James Wilson? *eyes widen* Oh my! He's actually staying here right now! He checked in yesterday. Such a coincidence!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 4:
                        return (
                            <Dialog
                                character={1}
                                message="That's not a coincidence at all. Can you tell us his room number?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 5:
                        return (
                            <Dialog
                                character={4}
                                message="I'm not supposed to give out guest information... But for the police, I can make an exception. Let me check our system."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 6:
                        return (
                            <Dialog
                                character={4}
                                message="Hmm, that's strange. His information says he moved out of the hotel. I have an address where he's staying now, but it's in audio format for some reason."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 7:
                        return (
                            <Dialog
                                character={4}
                                message="Let me play it for you. Listen carefully to the house number, street name, apartment number, and phone number."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 8:
                        return (
                            <Audio
                                character={4}
                                audio={1}
                                message="Listen carefully, and note down everything you hear."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 9:
                        return (
                            <Question
                                character={1}
                                message="What was the house number in the recording?(text number)"
                                answer="forty-two"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 10:
                        return (
                            <Question
                                character={1}
                                message="What was the street name?"
                                answer="Maple Street"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 11:
                        return (
                            <Question
                                character={1}
                                message="What was the apartment number?(text number)"
                                answer="sixteen"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 12:
                        return (
                            <Question
                                character={1}
                                message="What was the phone number? (Use format: xxx-xxx-xxxx)"
                                answer="555-123-4567"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 13:
                        return (
                            <Dialog
                                character={1}
                                message="Great! We have the address: 42 Maple Street, apartment 16, and phone number 555-123-4567. Let's go find James Wilson!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 14:
                        return (
                            <Scene
                                character={1}
                                scene={5}
                                message="*Knock on the door*"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 15:
                        return (
                            <Dialog
                                character={14}
                                message="*opens door* Yes? Can I help you?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 16:
                        return (
                            <Dialog
                                character={1}
                                message="Mr. Wilson? I'm Detective Molly, and this is my assistant. We're investigating the death of Chef John, the head chef at Hotel Grand."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 17:
                        return (
                            <Dialog
                                character={14}
                                message="Oh, John is dead? *looks suspiciously calm* Please, come in. I saw him just last week..."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 18:
                        return (
                            <Dialog
                                character={1}
                                message="We know you were fired - 'eighty-sixed' - from the hotel restaurant twenty years ago. And we know Chef John was researching you the day before he died."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 19:
                        return (
                            <Dialog
                                character={14}
                                message="*sighs dramatically* Fine! You caught me! I killed him. But let me tell you WHY I did it. *eyes gleam with madness*"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 20:
                        return (
                            <Dialog
                                character={1}
                                message="*shocked* That was... easy. Why did you kill him?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 21:
                        return (
                            <Dialog
                                character={14}
                                message="Twenty years ago, I was fired because Chef John Sr. claimed I couldn't properly pronounce 'spaghetti Bolognese' with an Italian accent!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 22:
                        return (
                            <Dialog
                                character={14}
                                message="FOR TWENTY YEARS I practiced saying 'Spah-GEH-tee Bo-lo-NEH-zeh' *said with terrible accent* EVERY SINGLE DAY! I became obsessed!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 23:
                        return (
                            <Dialog
                                character={14}
                                message="Last week, John Jr. found me and wanted to make amends. He invited me back to cook in the kitchen with him..."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 24:
                        return (
                            <Dialog
                                character={14}
                                message="And you know what he said after I showed him my perfected Italian accent? He said... 'It's actually pronounced spuh-GEH-tee!' *furious face*"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 25:
                        return (
                            <Dialog
                                character={14}
                                message="TWENTY YEARS WASTED! So I hit him with the only thing I had in my hand... a frozen spaghetti noodle!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 26:
                        return (
                            <Dialog
                                character={1}
                                message="Wait... you killed the chef... with a frozen spaghetti noodle?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 27:
                        return (
                            <Dialog
                                character={14}
                                message="YES! I was demonstrating my special technique for perfectly al dente pasta. You freeze it first! Who knew a frozen noodle could be so deadly?"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 28:
                        return (
                            <Dialog
                                character={14}
                                message="When he fell, he knocked over the pot of Bolognese sauce. It looked like a crime scene from a pasta horror movie! *laughs maniacally*"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 29:
                        return (
                            <Dialog
                                character={1}
                                message="So you murdered a man... over pasta pronunciation? That's the most ridiculous motive I've ever heard!"
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 30:
                        return (
                            <Dialog
                                character={14}
                                message="*shrugs casually* In Italy, they take pasta very seriously. I guess you could say... *puts on sunglasses*... I eighty-sixed him."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 31:
                        return (
                            <Dialog
                                character={1}
                                message={`Well ${userData?.name || "partner"}, case closed. We've caught our pasta-obsessed killer. Let's take him in and get some real Italian food on the way back.`}
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 32:
                        return (
                            <Scene
                                character={1}
                                scene={6}
                                message="Detective Molly arrest James Wilson and takes him to the police station."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 33:
                        return (
                            <Dialog
                                character={15}
                                message="Nice work, You passed the test! Now we start learning English."
                                onContinue={() => setDialog(dialog + 1)}
                            />
                        );
                    case 34:
                        navigate("/");
                        return null;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default Scene8;