import React, { useState } from "react";

const BaseDialog = ({
    characterObj,
    sceneObj = {},
    message,
    input,
    onInputChange,
    inputValue,
    onContinue,
    placeholder = "Type your answer here...",
    showInput = false,
}) => {
    return (
        <div className="h-screen w-full p-2 md:p-10 flex flex-col bg-background-dark bg-opacity-75 overflow-hidden">
            {/* Image Section */}
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center overflow-hidden">
                {sceneObj.image && (
                    <img
                        src={`/images/${sceneObj.image}`}
                        alt={sceneObj.name}
                        className="h-full max-h-full object-contain rounded-md shadow-lg mb-1"
                    />
                )}
                <img
                    src={`/images/${characterObj.image}`}
                    alt={characterObj.name}
                    className="h-full max-h-full object-contain"
                />
            </div>

            {/* Dialog Section */}
            <div className="w-full md:max-w-3xl bg-accent rounded-lg shadow-lg p-6 text-gray-900 mx-auto mb-10">
                <div className="flex flex-col items-start mb-4 border-b-2 border-primary pb-4">
                    <h2 className="text-2xl font-bold mb-2">{characterObj.name}</h2>
                    <span className="text-sm text-gray-700 ml-2">{characterObj.job}</span>
                </div>

                <p className="text-lg">{message}</p>

                {showInput && (
                    <div className="mt-4">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onInputChange}
                            placeholder={placeholder}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                )}

                <div className="flex justify-end mt-4">
                    <button
                        onClick={onContinue}
                        className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BaseDialog;