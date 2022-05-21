import React from "react";
import {mainTours} from "./constant-images"

const TourContext = React.createContext({
    mainTours: mainTours,
    isChanged: false,
    filterConfigs: {},
    filterDefaults: {},
    titleFilter: (titleQ) => {},
    priceMinFilter: (priceMinQ) => {},
    priceMaxFilter: (priceMaxQ) => {},
    daysMinFilter: (daysMinQ) => {},
    daysMaxFilter: (daysMaxQ) => {},
    discountFilter: (discountQ) => {},
    specialFilter: (specialQ) => {},
    tourTypeFilter: (tourTypeQ) => {},
    tourSortFilter: (sortTypeBy, sortTypeQ) => {},
    applyFilter: () => {},
    clearFilter: () => {}
});

export default TourContext;
