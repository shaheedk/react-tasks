import React, { useEffect, useState } from 'react';


function TaskFetch() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        setQuotes(data.quotes.slice(0, 10)); // Get the first 10 quotes
      })
      .catch(error => console.error('API failed', error));
  }, []);

  return (
    <div className="App">
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default App;
