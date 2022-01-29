import Circle from './Circle';
import React from 'react';
import Triangle from './Triangle';

// import DraggableCard from './draggableCard';



export default function BoxComponent() {
  return <div className='container'>
  {/* <DraggableCard>
      <Triangle/>
  </DraggableCard>
  <DraggableCard>
      <Circle/>
  </DraggableCard> */}

  <Triangle/>
 
 
      <Circle/>
  </div>;
}
