const validatingBlog = (value, defaultValue) => {
  if (value === (null || undefined)) {
    if (defaultValue === (null || undefined)) {
      return "";
    }
    return defaultValue;
  }
  return value;
};

const truncSentence = (sentence, wordsLength) => {
  return sentence
    .split(" ")
    .splice(0, +wordsLength)
    .join(" ") + " ...";
};

export class BlogPost {
  constructor(title, content, image) {
    this._id = BlogPost.incrID();
    this.title = validatingBlog(
      title,
      "https://www.chanchao.com.tw/HanoiPlas/images/default.jpg"
    );
    this.content = validatingBlog(
      content,
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    );
    this.image = validatingBlog(
      image,
      "https://www.chanchao.com.tw/HanoiPlas/images/default.jpg"
    );
  }

  get desc() {
    return truncSentence(this.content, 15);
  }

  static incrID() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}
