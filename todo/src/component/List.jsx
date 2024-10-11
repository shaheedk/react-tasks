import React from 'react';

const List = () => {
  const [items, setItems] = React.useState([
    { item: 'item1' },
    { item: 'item2' }
  ]);
  const clickev=(even)=>{
    console.log('User clicked',even)
    console.log(this)
  }


  return (
    <div>
        <ul>
      {items.map((item, index) => (
        <li key={index}>{item.item}</li>
        
      ))}
    </ul>
    <button onClick={clickev}>First Button</button>
    <button onDoubleClick={clickev}>Second Button </button>
    </div>
  
  );
};

export default List;

