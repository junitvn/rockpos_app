export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const STOP_SEARCHING = "STOP_SEARCHING";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const CHANGE_QUERY = "CHANGE_QUERY";
export const LOADING_ITEM = "LOADING_ITEM";
export const LOADING_SEARCH = "LOADING_SEARCH";
export const OPEN_POPUP = "OPEN_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";
export const INIT_APP = "INIT_APP";

export const toggleSearch = data => {
  return {
    type: TOGGLE_SEARCH,
    data
  };
};

export const stopSearching = data => {
  return {
    type: STOP_SEARCHING,
    data
  };
};

export const loadingItem = isLoadingItem => {
  return {
    type: LOADING_ITEM,
    data: isLoadingItem
  };
};

export const loadingSearch = isSearchDone => {
  return {
    type: LOADING_SEARCH,
    data: isSearchDone
  };
};

export const saveSearchResults = results => {
  return {
    type: SEARCH_RESULTS,
    data: results
  };
};

export const changeQuery = query => {
  return {
    type: CHANGE_QUERY,
    data: query
  };
};

export const openPopup = data => {
  return {
    type: OPEN_POPUP,
    data
  };
};

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  };
};
