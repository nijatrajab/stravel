import { mainTours } from "./constant-images";

const validatingTour = (value, defaultValue) => {
  if (value === (null || undefined)) {
    if (defaultValue === (null || undefined)) {
      return "";
    }
    return defaultValue;
  }
  return value;
};

const discEnds = (discount) => {
  const todayDate = new Date();
  let Difference_In_Days = 0;
  try {
    const customDate = new Date(discount);
    const Difference_In_Time = customDate.getTime() - todayDate.getTime();
    Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1;
  } catch {
    return Difference_In_Days;
  }

  return Difference_In_Days > 0 ? Math.ceil(Difference_In_Days) : 0;
};



export class Tour {
  constructor(
    toCity,
    toCountry,
    fromCity,
    fromCountry,
    distance,
    price,
    days,
    star,
    type,
    discountPercent,
    discountLastDate,
    special,
    specialLastDate,
    specialText,
    desc
  ) {
    this._id = Tour.incrID();
    this.toCity = validatingTour(toCity, "City");
    this.toCountry = validatingTour(toCountry, "Country");
    this.fromCity = validatingTour(fromCity, "City");
    this.fromCountry = validatingTour(fromCountry, "Country");
    this.distance = validatingTour(distance, "distance");
    this.price = validatingTour(price, 0);
    this.days = validatingTour(days, 0);
    this.star = validatingTour(star, 5);
    this.type = validatingTour(type, "Guided");
    this.discountPercent = validatingTour(discountPercent, 0);
    this.discountLastDate = validatingTour(discountLastDate, "01/01/1970");
    this.special = validatingTour(special, false);
    this.specialLastDate = validatingTour(specialLastDate, "01/01/1970");
    this.specialText = validatingTour(specialText, this.specialTextDefault);
    this.desc = validatingTour(
      desc,
      `Spend ${this.days} day${this.days > 1 ? "s" : ""} falling in love with ${
        this.toCity
      }, among its great places. During the ${this.days} day${
        this.days > 1 ? "s" : ""
      } you spend with us, you will have fun and gain insight.`
    );
  }

  get title() {
    return `${this.toCity}, ${this.toCountry}`;
  }

  get discount() {
    return +this.discountEnds > 0 ? true : false;
  }

  get discountEnds() {
    return discEnds(this.discountLastDate);
  }

  get discountPrice() {
    return Math.round((this.price / 100) * (100 - +this.discountPercent));
  }

  get discountEndsText() {
    return `Discount ends in ${this.discountEnds} day${
      this.discountEnds > 1 ? "s" : ""
    }`;
  }

  get specialEnds() {
    return discEnds(this.specialLastDate);
  }

  get specialTextDefault() {
    let specText = "Special offer will be available for a limited time";
    if (this.specialEnds > 0) {
      specText = `Special offer ends in ${this.specialEnds} day${
        this.specialEnds > 1 ? "s" : ""
      }`;
    }
    return specText;
  }

  static incrID() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}

// const listCity = [
//   "Venice",
//   "Italy",
//   "Paris",
//   "France",
//   1420,
//   560,
//   7,
//   3,
//   "guided",
//   30,
//   "05/04/2022",
//   true,
// ];

// export const tourFiltering = ({title, priceMin, priceMax, daysMin, daysMax, star, type, discount, special}
// ) => {
//   const filteredTour = mainTours.filter(
//     (mainTour) =>
//       (title !== null ? mainTour.title.match(new RegExp(title, "gi")) : true) &&
//       ((priceMin !== null && priceMax !== null)
//         ? inRange(+mainTour.price, +priceMin, +priceMax)
//         : true) &&
//       ((daysMin !== null && daysMax !== null) ? inRange(+mainTour.days, +daysMin, +daysMax) : true) &&
//       (star !== null
//         ? mainTour.star.toString().match(new RegExp(star))
//         : true) &&
//       (type !== null ? mainTour.type.match(new RegExp(type, "gi")) : true) &&
//       (discount !== null ? mainTour.discount === discount : true) &&
//       (special !== null ? mainTour.special === special : true)
//   );

//   return filteredTour;
// };
