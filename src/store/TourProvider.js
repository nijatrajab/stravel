import { useReducer } from "react";
import { mainTours } from "./constant-images";
import TourContext from "./tour-context";

export const TITLE_QUERY = "TITLE_QUERY";
export const PRICEMIN_QUERY = "PRICEMIN_QUERY";
export const PRICEMAX_QUERY = "PRICEMAX_QUERY";
export const DAYSMIN_QUERY = "DAYSMIN_QUERY";
export const DAYSMAX_QUERY = "DAYSMAX_QUERY";
export const SPECIAL_QUERY = "SPECIAL_QUERY";
export const DISCOUNT_QUERY = "DISCOUNT_QUERY";
export const TOURTYPE_QUERY = "TOURTYPE_QUERY";
export const TOURSORT_QUERY = "TOURSORT_QUERY";

const priceMinDefault = Math.min(...mainTours.map((i) => i.price));
const priceMaxLimit = Math.max(...mainTours.map((i) => i.price));
const daysMaxLimit = Math.max(...mainTours.map((i) => i.days));
const daysMinLimit = Math.min(...mainTours.map((i) => i.days));
const tourTypeData = [...new Set(mainTours.map((i) => i.type))];
const specialData = [...new Set(mainTours.map((i) => i.special))];
const discountData = [...new Set(mainTours.map((i) => i.discount))];

const defaultTourState = {
  mainTours: mainTours,
  isChanged: false,
  filterDefaults: {
    priceMinLimit: priceMinDefault,
    priceMaxLimit: priceMaxLimit,
    daysMinLimit: daysMinLimit,
    daysMaxLimit: daysMaxLimit,
    tourTypeData: ["All", ...tourTypeData],
    specialData: false,
    discountData: false
  },
  filterConfigs: {
    title: "",
    priceMin: priceMinDefault,
    priceMax: priceMaxLimit,
    daysMin: daysMinLimit,
    daysMax: daysMaxLimit,
    special: false,
    discount: false,
    tourType: "All",
    tourSort: { sortBy: "Default", sortType: "Default" },
  },
};

const inRange = (selNum, minNum, maxNum) => {
  return minNum <= selNum && selNum <= maxNum;
};

// let isNotSame = false
// isNotSame = (titleQuery !== "") && (titleQuery !== null) && (titleQuery !== undefined);
//   mainTours: !isNotSame ? state.mainTours : updatedTours,
//   isChanged: isNotSame || state.isChanged,

const tourFiltering = ({
  title,
  priceMin,
  priceMax,
  daysMin,
  daysMax,
  discount,
  special,
  tourType,
  tourSort,
}) => {
  let filteredTour;

  const sortBy = tourSort.sortBy;

  filteredTour = mainTours.filter(
    (mainTour) =>
      mainTour.title.match(new RegExp(title, "gi")) &&
      inRange(+mainTour.price, +priceMin, +priceMax) &&
      inRange(+mainTour.days, +daysMin, +daysMax) &&
      (tourType === "All" ? true : mainTour.type === tourType) &&
      (discount === false ? true : mainTour.discount === discount) &&
      (special === false ? true : mainTour.special === special)
  );

  if (tourSort.sortBy !== "Default") {
    if (tourSort.sortValue === "asc") {
      console.log("ascending");
      filteredTour.sort((a, b) => {
        if (sortBy === "price") {
          console.log("price sorting asc");
          return (
            (a.discount ? +a["discountPrice"] : +a["price"]) -
            (b.discount ? +b["discountPrice"] : +b["price"])
          );
        } else {
          console.log("title sorting asc");
          return a[sortBy].normalize().localeCompare(b[sortBy].normalize());
        }
      });
    } else if (tourSort.sortValue === "desc") {
      console.log("descending");
      filteredTour.sort((a, b) => {
        if (sortBy === "price") {
          console.log("price sorting desc");
          return (
            (b.discount ? +b["discountPrice"] : +b["price"]) -
            (a.discount ? +a["discountPrice"] : +a["price"])
          );
        } else {
          console.log("title sorting desc");
          return b[sortBy].normalize().localeCompare(a[sortBy].normalize());
        }
      });
    }
  }

  return filteredTour;
};

const tourReducer = (state, action) => {
  const titleQueryFilter = (titleQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      title: titleQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, title: titleQuery },
    };
  };

  const PriceMinQueryFilter = (priceMinQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      priceMin: +priceMinQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, priceMin: +priceMinQuery },
    };
  };

  const PriceMaxQueryFilter = (priceMaxQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      priceMax: +priceMaxQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, priceMax: +priceMaxQuery },
    };
  };

  const DaysMinQueryFilter = (daysMinQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      daysMin: +daysMinQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, daysMin: +daysMinQuery },
    };
  };
  const DaysMaxQueryFilter = (daysMaxQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      daysMax: +daysMaxQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, daysMax: +daysMaxQuery },
    };
  };
  const SpecialQueryFilter = (specialQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      special: specialQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });

    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, special: specialQuery },
    };
  };
  const DiscountQueryFilter = (discountQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      discount: discountQuery,
    });

    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });

    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, discount: discountQuery },
    };
  };
  const TourTypeQueryFilter = (tourTypeQuery, state) => {
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      tourType: tourTypeQuery,
    });
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: { ...state.filterConfigs, tourType: tourTypeQuery },
    };
  };

  const SortingFilter = (sortBy, sortValue, state) => {
    console.log(state.filterConfigs);
    const updatedTours = tourFiltering({
      ...state.filterConfigs,
      tourSort: { sortBy: sortBy, sortValue: sortValue },
    });

    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: {
        ...state.filterConfigs,
        tourSort: { sortBy: sortBy, sortValue: sortValue },
      },
    };
  };

  switch (action.type) {
    case TITLE_QUERY:
      return titleQueryFilter(action.titleQuery, state);
    case PRICEMIN_QUERY:
      return PriceMinQueryFilter(action.priceMinQuery, state);
    case PRICEMAX_QUERY:
      return PriceMaxQueryFilter(action.priceMaxQuery, state);
    case DAYSMIN_QUERY:
      return DaysMinQueryFilter(action.daysMinQuery, state);
    case DAYSMAX_QUERY:
      return DaysMaxQueryFilter(action.daysMaxQuery, state);
    case SPECIAL_QUERY:
      return SpecialQueryFilter(action.specialQuery, state);
    case DISCOUNT_QUERY:
      return DiscountQueryFilter(action.discountQuery, state);
    case TOURTYPE_QUERY:
      return TourTypeQueryFilter(action.tourTypeQuery, state);
    case TOURSORT_QUERY:
      return SortingFilter(action.sortBy, action.sortValue, state);
    default:
      return defaultTourState;
  }
};

const TourProvider = (props) => {
  const [tourState, dispatchFilterAction] = useReducer(
    tourReducer,
    defaultTourState
  );

  const titleFilterHandler = (titleQuery) => {
    dispatchFilterAction({ type: TITLE_QUERY, titleQuery });
  };
  const priceMinFilterHandler = (priceMinQuery) => {
    dispatchFilterAction({ type: PRICEMIN_QUERY, priceMinQuery });
  };
  const priceMaxFilterHandler = (priceMaxQuery) => {
    dispatchFilterAction({ type: PRICEMAX_QUERY, priceMaxQuery });
  };
  const daysMinFilterHandler = (daysMinQuery) => {
    dispatchFilterAction({ type: DAYSMIN_QUERY, daysMinQuery });
  };
  const daysMaxFilterHandler = (daysMaxQuery) => {
    dispatchFilterAction({ type: DAYSMAX_QUERY, daysMaxQuery });
  };
  const specialFilterHandler = (specialQuery) => {
    dispatchFilterAction({ type: SPECIAL_QUERY, specialQuery });
  };
  const discountFilterHandler = (discountQuery) => {
    dispatchFilterAction({ type: DISCOUNT_QUERY, discountQuery });
  };
  const tourTypeFilterHandler = (tourTypeQuery) => {
    dispatchFilterAction({ type: TOURTYPE_QUERY, tourTypeQuery });
  };
  const tourSortFilterHandler = (sortBy, sortValue) => {
    dispatchFilterAction({ type: TOURSORT_QUERY, sortBy, sortValue });
  };

  const tourContext = {
    mainTours: tourState.mainTours,
    filterConfigs: tourState.filterConfigs,
    filterDefaults: tourState.filterDefaults,
    isChanged: tourState.isChanged,
    titleFilter: titleFilterHandler,
    priceMinFilter: priceMinFilterHandler,
    priceMaxFilter: priceMaxFilterHandler,
    daysMinFilter: daysMinFilterHandler,
    daysMaxFilter: daysMaxFilterHandler,
    discountFilter: discountFilterHandler,
    specialFilter: specialFilterHandler,
    tourTypeFilter: tourTypeFilterHandler,
    tourSortFilter: tourSortFilterHandler,
  };

  return (
    <TourContext.Provider value={tourContext}>
      {props.children}
    </TourContext.Provider>
  );
};

export default TourProvider;
