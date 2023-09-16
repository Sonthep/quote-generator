import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'
      }`}
    >
        <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Dark Mode</span>
        </label>
      </div>
      <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Random Quote Generator
      </h1>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          darkMode ? 'bg-blue-700' : 'bg-blue-500'
        }`}
        onClick={fetchQuote}
      >
        Generate Quote
      </button>
      {quote && (
        <div
          className={`rounded-2xl h-auto w-[30rem] p-4 border-4 mt-4 max-sm:w-[26rem] ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-400'
          }`}
        >
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-xl`}>{quote}</p>
        </div>
      )}
      
    </div>
  );
};

export default QuoteGenerator;