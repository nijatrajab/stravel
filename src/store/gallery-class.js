const validatingImage = (value, defaultValue) => {
  if (value === (null || undefined)) {
    if (defaultValue === (null || undefined)) {
      return "";
    }
    return defaultValue;
  }
  return value;
};



export class Gallery {
  constructor(
    imageLink
  ) {
    this._id = Gallery.incrID();
    this.imageLink = validatingImage(imageLink, "https://www.chanchao.com.tw/HanoiPlas/images/default.jpg");
    this.imageText = "Gallery"
  }

  static incrID() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}

