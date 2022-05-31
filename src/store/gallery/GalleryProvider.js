import { useCallback, useEffect, useReducer } from "react";
import GalleryContext from "./gallery-context";
import { gallery } from "../constant-images";

export const INIT_GALLERY = "INIT_GALLERY";
export const ACTIVE_PHOTO = "ACTIVE_PHOTO";
export const CLOSE_PHOTO = "CLOSE_PHOTO";
export const PREV_PHOTO = "PREV_PHOTO";
export const NEXT_PHOTO = "NEXT_PHOTO";
export const ZOOM_IN = "ZOOM_IN";
export const ZOOM_OUT = "ZOOM_OUT";
export const RESET_SIZE = "RESET_SIZE";

const defaultGalleryState = {
  gallery: [],
  isActive: false,
  activePhoto: null,
  photoHW: 100,
};

const galleryReducer = (state, action) => {
  const InitialGallery = (gallery, galleryState) => {
    return {
      ...galleryState,
      gallery: gallery,
    };
  };

  const OpenPhoto = (photoId, galleryState) => {
    const photo = galleryState.gallery.find((item) => item._id === photoId);
    return {
      ...galleryState,
      isActive: true,
      activePhoto: photo,
      photoHW: 100,
    };
  };

  const ClosePhoto = (galleryState) => {
    return {
      ...galleryState,
      isActive: false,
      activePhoto: null,
      photoHW: 100,
    };
  };

  const PrevPhoto = (galleryState) => {
    const updatedPhotoId =
      galleryState.gallery.at(0)._id === galleryState.activePhoto._id
        ? galleryState.gallery.at(-1)
        : galleryState.gallery.at(
            galleryState.gallery.findIndex(
              (photo) => photo._id === galleryState.activePhoto._id
            ) - 1
          );

    return {
      ...galleryState,
      isActive: true,
      activePhoto: updatedPhotoId,
      photoHW: 100,
    };
  };

  const NextPhoto = (galleryState) => {
    const updatedPhotoId =
      galleryState.activePhoto._id === galleryState.gallery.at(-1)._id
        ? galleryState.gallery.at(0)
        : galleryState.gallery.at(
            galleryState.gallery.findIndex(
              (photo) => photo._id === galleryState.activePhoto._id
            ) + 1
          );
    return {
      ...galleryState,
      isActive: true,
      activePhoto: updatedPhotoId,
      photoHW: 100,
    };
  };

  const zoomIn = (galleryState) => {
    const updatedPhotoSize =
      galleryState.photoHW === 200 ? 200 : galleryState.photoHW + 10;
    return {
      ...galleryState,
      photoHW: updatedPhotoSize,
    };
  };

  const zoomOut = (galleryState) => {
    const updatedPhotoSize =
      galleryState.photoHW === 100 ? 100 : galleryState.photoHW - 10;
    return {
      ...galleryState,
      photoHW: updatedPhotoSize,
    };
  };

  const resetSize = (galleryState) => {
    return {
      ...galleryState,
      photoHW: 100,
    };
  };

  switch (action.type) {
    case INIT_GALLERY:
      return InitialGallery(action.gallery, state);

    case ACTIVE_PHOTO:
      return OpenPhoto(action.photoId, state);

    case CLOSE_PHOTO:
      return ClosePhoto(state);

    case PREV_PHOTO:
      return PrevPhoto(state);

    case NEXT_PHOTO:
      return NextPhoto(state);

    case ZOOM_IN:
      return zoomIn(state);

    case ZOOM_OUT:
      return zoomOut(state);

    case RESET_SIZE:
      return resetSize(state);

    default:
      return defaultGalleryState;
  }
};

const GalleryProvider = (props) => {
  const [galleryState, dispatchGalleryAction] = useReducer(
    galleryReducer,
    defaultGalleryState
  );

  useEffect(() => {
    dispatchGalleryAction({ type: INIT_GALLERY, gallery });
  }, []);

  const openPhotoHandler = useCallback((photoId) => {
    dispatchGalleryAction({ type: ACTIVE_PHOTO, photoId });
  }, []);
  const closePhotoHandler = useCallback((photoId) => {
    dispatchGalleryAction({ type: CLOSE_PHOTO });
  }, []);
  const prevPhotoHandler = useCallback(() => {
    dispatchGalleryAction({ type: PREV_PHOTO });
  }, []);
  const nextPhotoHandler = useCallback(() => {
    dispatchGalleryAction({ type: NEXT_PHOTO });
  }, []);
  const zoomInHandler = useCallback((photoId) => {
    dispatchGalleryAction({ type: ZOOM_IN });
  }, []);
  const zoomOutHandler = useCallback(() => {
    dispatchGalleryAction({ type: ZOOM_OUT });
  }, []);
  const resetSizeHandler = useCallback(() => {
    dispatchGalleryAction({ type: RESET_SIZE });
  }, []);

  const galleryContext = {
    gallery: galleryState.gallery,
    isActive: galleryState.isActive,
    activePhoto: galleryState.activePhoto,
    photoHW: galleryState.photoHW,
    setActivePhoto: openPhotoHandler,
    closePhoto: closePhotoHandler,
    prevPhoto: prevPhotoHandler,
    nextPhoto: nextPhotoHandler,
    zoomIn: zoomInHandler,
    zoomOut: zoomOutHandler,
    resetSize: resetSizeHandler,
  };

  return (
    <GalleryContext.Provider value={galleryContext}>
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
