import {
  TOGGLE_SEARCH,
  SEARCH_RESULTS,
  CHANGE_QUERY,
  LOADING_ITEM,
  OPEN_POPUP,
  CLOSE_POPUP,
  LOADING_SEARCH,
  STOP_SEARCHING
} from "../actions/homeActions";
import _ from "lodash";

const initialData = {
  isSearching: false,
  searchResults: [],
  query: "",
  isEmptyResults: false,
  isLoadingItem: false,
  currentItem: {},
  isDialogVisible: false,
  isSearchDone: true,
  searchHistory: [],
  type: "product"
};

export function home(state = initialData, action) {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        isSearching: action.data ? !state.isSearching : false,
        type: action.data
      };
    case STOP_SEARCHING:
      const { isSearching, searchResults, isEmptyResults } = action.data;
      return {
        ...state,
        isSearching: _.isNull(isSearching) ? state.isSearching : isSearching,
        searchResults,
        isEmptyResults,
        query: ""
      };
    case SEARCH_RESULTS:
      const { query, searchResults: results } = action.data;
      let searchHistory = state.searchHistory;
      if (query && results) {
        const existed = _.find(searchHistory, ["query", query]);
        if (_.isUndefined(existed)) {
          searchHistory.push({ query, searchResults: results });
        }
      }
      return {
        ...state,
        searchResults: results ? results : [],
        isEmptyResults: _.isEmpty(results),
        searchHistory
      };
    case CHANGE_QUERY:
      return {
        ...state,
        query: action.data
      };
    case LOADING_ITEM:
      return {
        ...state,
        isLoadingItem: action.data
      };
    case LOADING_SEARCH:
      return {
        ...state,
        isSearchDone: action.data
      };
    case OPEN_POPUP:
      return {
        ...state,
        currentItem: action.data,
        isDialogVisible: true
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isDialogVisible: false
      };
    default:
      return state;
  }
}
