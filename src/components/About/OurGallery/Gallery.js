import { useContext } from "react";
import GalleryContext from "../../../store/gallery/gallery-context";
import Photos from "./Photos";
import PhotoModal from "./PhotoModal";

const Gallery = () => {
  const galleryCtx = useContext(GalleryContext);

  console.log("RENDERING GALLERY");
  return (
    <>
      <PhotoModal 
        isActive={galleryCtx.isActive}
        closeFn={galleryCtx.closePhoto}
        nextFn={galleryCtx.nextPhoto}
        prevFn={galleryCtx.prevPhoto}
        zoomInFn={galleryCtx.zoomIn}
        zoomOutFn={galleryCtx.zoomOut}
        resetFn={galleryCtx.resetSize}
        photo={galleryCtx.activePhoto}
        photoHW={galleryCtx.photoHW}
      />
      <Photos photoList={galleryCtx.gallery} photoFn={galleryCtx.setActivePhoto} />
    </>
  );
};

export default Gallery;
