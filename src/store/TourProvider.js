import { useCallback, useReducer } from "react";
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
export const APPLY_FILTER = "APPLY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

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
    discountData: false,
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
      filteredTour.sort((a, b) => {
        if (sortBy === "price") {
          return (
            (a.discount ? +a["discountPrice"] : +a["price"]) -
            (b.discount ? +b["discountPrice"] : +b["price"])
          );
        } else {
          return a[sortBy].normalize().localeCompare(b[sortBy].normalize());
        }
      });
    } else if (tourSort.sortValue === "desc") {
      filteredTour.sort((a, b) => {
        if (sortBy === "price") {
          return (
            (b.discount ? +b["discountPrice"] : +b["price"]) -
            (a.discount ? +a["discountPrice"] : +a["price"])
          );
        } else {
          return b[sortBy].normalize().localeCompare(a[sortBy].normalize());
        }
      });
    }
  }

  return filteredTour;
};

const filterAction = (queryKey, queryParam, isNotDesktop, state) => {
  const updatedFilterConfig = {
    ...state.filterConfigs,
    [queryKey]: queryParam,
  };

  if (isNotDesktop) {
    return { ...state, filterConfigs: updatedFilterConfig };
  } else {
    const updatedTours = tourFiltering(updatedFilterConfig);
    const is_same =
      updatedTours.length === state.mainTours.length &&
      updatedTours.every(function (element, index) {
        return element === state.mainTours[index];
      });
    return {
      ...state,
      mainTours: is_same ? state.mainTours : updatedTours,
      isChanged: is_same,
      filterConfigs: updatedFilterConfig,
    };
  }
};


const tourReducer = (state, action) => {
  const titleQueryFilter = (titleQuery, isNotDesktop, filterState) => {
    return filterAction("title", titleQuery, isNotDesktop, filterState)
  };
  const PriceMinQueryFilter = (priceMinQuery, isNotDesktop, filterState) => {
    return filterAction("priceMin", +priceMinQuery, isNotDesktop, filterState)
  };
  const PriceMaxQueryFilter = (priceMaxQuery,isNotDesktop, filterState) => {
    return filterAction("priceMax", +priceMaxQuery, isNotDesktop, filterState)
  };
  const DaysMinQueryFilter = (daysMinQuery,isNotDesktop, filterState) => {
    return filterAction("daysMin", +daysMinQuery, isNotDesktop, filterState)
  };
  const DaysMaxQueryFilter = (daysMaxQuery,isNotDesktop, filterState) => {
    return filterAction("daysMax", +daysMaxQuery, isNotDesktop, filterState)
  };
  const SpecialQueryFilter = (specialQuery,isNotDesktop, filterState) => {
    return filterAction("special", specialQuery, isNotDesktop, filterState)
  };
  const DiscountQueryFilter = (discountQuery,isNotDesktop, filterState) => {
    return filterAction("discount", discountQuery, isNotDesktop, filterState)
  };
  const TourTypeQueryFilter = (tourTypeQuery,isNotDesktop, filterState) => {
    return filterAction("tourType", tourTypeQuery, isNotDesktop, filterState)
  };
  const SortingFilter = (sortBy, sortValue,isNotDesktop, filterState) => {
    return filterAction("tourSort", { sortBy: sortBy, sortValue: sortValue }, isNotDesktop, filterState)
  };

  const ApplyFilter = (isNotDesktop, filterState) => {
    if (isNotDesktop) {
      const updatedTours = tourFiltering(filterState.filterConfigs);
      const is_same =
        updatedTours.length === state.mainTours.length &&
        updatedTours.every(function (element, index) {
          return element === state.mainTours[index];
        });
      return {
        ...state,
        mainTours: is_same ? state.mainTours : updatedTours,
        isChanged: is_same,
      };
    } else {
      return defaultTourState
    }
  };

  const ClearFilter = () => {
    return defaultTourState
  };

  switch (action.type) {
    case TITLE_QUERY:
      return titleQueryFilter(action.titleQuery, action.isNotDesktop, state);
    case PRICEMIN_QUERY:
      return PriceMinQueryFilter(action.priceMinQuery, action.isNotDesktop, state);
    case PRICEMAX_QUERY:
      return PriceMaxQueryFilter(action.priceMaxQuery, action.isNotDesktop, state);
    case DAYSMIN_QUERY:
      return DaysMinQueryFilter(action.daysMinQuery, action.isNotDesktop, state);
    case DAYSMAX_QUERY:
      return DaysMaxQueryFilter(action.daysMaxQuery, action.isNotDesktop, state);
    case SPECIAL_QUERY:
      return SpecialQueryFilter(action.specialQuery, action.isNotDesktop, state);
    case DISCOUNT_QUERY:
      return DiscountQueryFilter(action.discountQuery, action.isNotDesktop, state);
    case TOURTYPE_QUERY:
      return TourTypeQueryFilter(action.tourTypeQuery, action.isNotDesktop, state);
    case TOURSORT_QUERY:
      return SortingFilter(action.sortBy, action.sortValue, action.isNotDesktop, state);

    case APPLY_FILTER:
      return ApplyFilter(action.isNotDesktop, state);
    case CLEAR_FILTER:
      return ClearFilter();
    default:
      return defaultTourState;
  }
};

const TourProvider = (props) => {
  const [tourState, dispatchFilterAction] = useReducer(
    tourReducer,
    defaultTourState
  );

  const titleFilterHandler = useCallback((titleQuery, isNotDesktop) => {
    dispatchFilterAction({ type: TITLE_QUERY, titleQuery, isNotDesktop });
  }, []);
  const priceMinFilterHandler = useCallback((priceMinQuery, isNotDesktop) => {
    dispatchFilterAction({ type: PRICEMIN_QUERY, priceMinQuery, isNotDesktop });
  }, []);
  const priceMaxFilterHandler = useCallback((priceMaxQuery, isNotDesktop) => {
    dispatchFilterAction({ type: PRICEMAX_QUERY, priceMaxQuery, isNotDesktop });
  }, []);
  const daysMinFilterHandler = useCallback((daysMinQuery, isNotDesktop) => {
    dispatchFilterAction({ type: DAYSMIN_QUERY, daysMinQuery, isNotDesktop });
  }, []);
  const daysMaxFilterHandler = useCallback((daysMaxQuery, isNotDesktop) => {
    dispatchFilterAction({ type: DAYSMAX_QUERY, daysMaxQuery, isNotDesktop });
  }, []);
  const specialFilterHandler = useCallback((specialQuery, isNotDesktop) => {
    dispatchFilterAction({ type: SPECIAL_QUERY, specialQuery, isNotDesktop });
  }, []);
  const discountFilterHandler = useCallback((discountQuery, isNotDesktop) => {
    dispatchFilterAction({ type: DISCOUNT_QUERY, discountQuery, isNotDesktop });
  }, []);
  const tourTypeFilterHandler = useCallback((tourTypeQuery, isNotDesktop) => {
    dispatchFilterAction({ type: TOURTYPE_QUERY, tourTypeQuery, isNotDesktop });
  }, []);
  const tourSortFilterHandler = useCallback((sortBy, sortValue, isNotDesktop) => {
    dispatchFilterAction({ type: TOURSORT_QUERY, sortBy, sortValue, isNotDesktop });
  }, []);
  const applyFilterHandler = useCallback((isNotDesktop) => {
    dispatchFilterAction({ type: APPLY_FILTER, isNotDesktop });
  }, []);
  const clearFilterHandler = useCallback(() => {
    dispatchFilterAction({ type: CLEAR_FILTER });
  }, []);

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
    applyFilter: applyFilterHandler,
    clearFilter: clearFilterHandler,
  };

  return (
    <TourContext.Provider value={tourContext}>
      {props.children}
    </TourContext.Provider>
  );
};

export default TourProvider;
