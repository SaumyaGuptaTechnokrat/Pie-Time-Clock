import React, { useState } from 'react';

function YourComponent() {
  const [gridTemplateColumns, setgridTemplateColumns] = useState('320px 320px');

  const handleClick = () => {
    console.log("clicked");
    setgridTemplateColumns(gridTemplateColumns === '320px 320px' ? '320px' : '320px 320px');
  };

  const divStyle = {
    width: '650px',
    height: '100px',
    gridTemplateColumns: gridTemplateColumns,
    border: '1px solid black',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    gap:'0 0'
  };

  return (
    <>
    <div style={divStyle} >
      <div>Click me to toggle color</div>
      <div>Click me to toggle color</div>
    </div>
          <button style={{height:'50px'}} onClick={handleClick}>Click</button>
    </>
  );
}

export default YourComponent;
