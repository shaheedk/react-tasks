import React, { useState } from 'react';

export default function Func() {
    const [age, setAge] = useState(17);
    const [name, setName] = useState('shahid');

    return (
        <div>
            <p>Age: {age}</p>
            <p>Name: {name}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <button onClick={() => setName('shaheed')}>Change Name</button>
        </div>
    );
}


