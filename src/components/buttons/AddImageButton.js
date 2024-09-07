import React from 'react';

const AddImageButton = ({ active, onClick }) => {
  return (
    <button
      // className={`add-image-button ${active ? 'add-image-button' : ''}`}
      className='add-image-button'
      onClick={onClick}
      aria-selected={active}
      role="tab"
    >
      + ADD IMAGE
    </button>
  );
};

export default AddImageButton;