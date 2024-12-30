import React, { useEffect, useState } from "react";

export default function Task3() {
  const [quotes, setQuots] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")  
      .then((response) => response.json())
      .then((data) => {
        setQuots(data.quotes.slice(0,1));
      })
      .catch((error) => console.error("api failed ", error));
  }, []);
  
  return (
    <div>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}
