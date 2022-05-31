import React from 'react'

const GalleryContext =  React.createContext({
    gallery: [],
    isActive: false,
    activePhoto: null,
    photoHW: 100,
    setActivePhoto: (photoId) => {},
    closePhoto: () => {},
    prevPhoto: () => {},
    nextPhoto: () => {},
    zoomIn: () => {},
    zoomOut: () => {},
    resetSize: () => {},
});

export default GalleryContext