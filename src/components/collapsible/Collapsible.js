import React from 'react';

function Collapsible(props) {
  return (
    <>
      {props.isOpen? props.children: null}
    </>
  )
}

export default Collapsible;