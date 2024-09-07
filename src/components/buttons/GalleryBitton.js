import React from 'react';

const GalleryButton = ({ active, onClick }) => {
  return (
    <button
      // className={`gallery-button ${active ? 'gallery-button' : 'gallery-button'}`}
      className='gallery-button'
      onClick={onClick}
      aria-selected={active}
      role="tab"
    >
      Gallery
    </button>
  );
};

export default GalleryButton;
