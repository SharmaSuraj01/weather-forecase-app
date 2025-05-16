import React, { useState, useEffect } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    suggestions: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, suggestions }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

    useEffect(() => {
    if (inputValue) {
        const filtered = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase()) &&
            suggestion.toLowerCase() !== inputValue.toLowerCase() // <-- yeh line add karein
        );
        setFilteredSuggestions(filtered);
    } else {
        setFilteredSuggestions([]);
    }
}, [inputValue, suggestions]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onSearch(event.target.value);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        onSearch(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search for a city..."
                className="border rounded p-2 w-full"
            />
            {filteredSuggestions.length > 0 && (
                <ul className="absolute bg-white border rounded mt-1 w-full">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;