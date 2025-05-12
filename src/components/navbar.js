import React, { useState } from 'react';

import words from '../data/words';

const Navbar = () => {
    const [showDict, setShowDict] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(words);

    const toggleDict = () => {
        setShowDict(!showDict);
    };

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term) {
            const results = words.filter(word => { return word.word.toLowerCase().includes(term.toLowerCase()) })
            setSearchResults(results);
        } else {
            setSearchResults(words);
        }
    }

    return (
        <>
            <nav className="bg-primary text-light p-4 flex justify-between items-center shadow-md">
                <div className="text-xl font-bold">
                    <span className="text-accent">Murder</span> Case
                </div>

                <button
                    onClick={toggleDict}
                    className="bg-secondary hover:bg-secondary-dark text-light px-4 py-2 rounded-md transition duration-300 flex items-center"
                >
                    <span className="mr-2">Dictionary</span>
                    <span role="img" aria-label="dictionary">📕</span>
                </button>
            </nav>

            {showDict && (
                <div className="fixed inset-x-0 top-16 mx-auto max-w-4xl h-[500px] bg-light p-6 rounded-md shadow-lg z-10 border border-neutral">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-primary">Helping Dictionary</h2>
                        <button
                            onClick={toggleDict}
                            className="text-neutral hover:text-secondary"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="bg-tertiary p-4 rounded-md h-[400px] flex flex-col items-center justify-start border-2 border-accent">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full p-2 border border-neutral rounded-md"
                        />
                        <div className="mt-4 h-full w-full flex flex-col items-center justify-start overflow-y-auto bg-accent rounded-md">
                            {searchResults.map((word, index) => (
                                <div key={index} className="p-2 w-full text-center border-b border-neutral">
                                    <strong>{word.word}</strong>: {word.translation}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;