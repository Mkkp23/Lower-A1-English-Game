import React, { useState } from 'react';

const Navbar = () => {
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <>
            <nav className="bg-primary text-light p-4 flex justify-between items-center shadow-md">
                <div className="text-xl font-bold">
                    <span className="text-accent">Murder</span> Case
                </div>

                <button
                    onClick={toggleMap}
                    className="bg-secondary hover:bg-secondary-dark text-light px-4 py-2 rounded-md transition duration-300 flex items-center"
                >
                    <span className="mr-2">Map</span>
                    <span role="img" aria-label="map">🗺️</span>
                </button>
            </nav>

            {showMap && (
                <div className="fixed inset-x-0 top-16 mx-auto max-w-4xl bg-light p-6 rounded-md shadow-lg z-10 border border-neutral">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-primary">Crime Scene Map</h2>
                        <button
                            onClick={toggleMap}
                            className="text-neutral hover:text-secondary"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="bg-tertiary p-4 rounded-md h-64 flex items-center justify-center border-2 border-accent">
                        <p className="text-light">City map with crime scenes marked</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;