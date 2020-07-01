import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../themes/default/styles";
import { lang, configuration, api } from "../configs/constants";
import {
  saveSearchResults,
  changeQuery,
  loadingSearch,
  stopSearching
} from "../actions/homeActions";
import _ from "lodash";
import { toFormData } from "../../utils/apiUtils";
import Axios from "axios";

export default class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      dataProducts: [],
      searchResults: [],
      isEmptyResults: false,
      isSearchDone: true,
      typing: false,
      typingTimeout: 0,
      searchHistory: [],
      isProductSearch: _.isEqual(props.home.type, configuration.searchProduct)
    };
    this.typingTimeout = null;
  }

  componentDidMount() {
    this.searchInput ? this.searchInput.focus() : null;
  }

  componentWillReceiveProps(nextProps) {
    const { data, home } = nextProps;
    this.setState({
      dataProducts: data,
      searchHistory: home.searchHistory,
      type: home.type
    });
  }

  searchByLocalData = query => {
    /*SEARCH DATABASE OFFLINE*/
    const byName = this.searchByCategory(cloneData, productKey.name, query);
    const byRef = this.searchByCategory(cloneData, productKey.reference, query);
    const byId = this.searchByCategory(cloneData, productKey.id_product, query);
    const searchResults = _.union(byName, byId, byRef);
    return searchResults;
  };

  searchOnServer = query => {
    const { dispatch } = this.props;
    dispatch(loadingSearch(false));
    let data = {
      endpoint: "/product/search",
      keyword: query,
      search_by: "general"
    };
    let form = toFormData(data, null, "");
    Axios({
      method: "post",
      url: api,
      data: form
    })
      .then(response => {
        const searchResults = response.data.data.products;
        console.log("object", response.data);
        this.setState({ isSearchDone: true });
        dispatch(loadingSearch(true));
        dispatch(saveSearchResults({ query, searchResults }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchCustomerOnServer = query => {
    const { dispatch } = this.props;
    dispatch(loadingSearch(false));
    let data = {
      endpoint: "/product/search",
      keyword: query
    };
    let form = toFormData(data, null, "");
    Axios({
      method: "post",
      url: api,
      data: form
    })
      .then(response => {
        const searchResults = response.data.data.products;
        this.setState({ isSearchDone: true });
        dispatch(loadingSearch(true));
        dispatch(saveSearchResults({ query, searchResults }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchWithQueryExisted = resultExisted => {
    const { query, searchResults } = resultExisted;
    this.setState({
      isSearchDone: true
    });
    this.props.dispatch(saveSearchResults({ query, searchResults }));
  };

  searchByCategory = (data, category, query) => {
    return data.filter(item => {
      return _.includes(_.toLower(item[category]), _.toLower(query));
    });
  };

  onChangeText = query => {
    const { dispatch } = this.props;
    const { searchHistory, isProductSearch } = this.state;
    clearTimeout(this.typingTimeout);
    dispatch(changeQuery(query));
    let trimmedQuery = _.trim(query);
    this.setState({
      query,
      typing: false,
      isSearchDone: false
    });
    this.typingTimeout = setTimeout(() => {
      if (trimmedQuery.length >= configuration.minCharacterToSearch) {
        const resultExisted = _.find(searchHistory, ["query", query]);
        if (resultExisted) {
          this.searchWithQueryExisted(resultExisted);
        } else {
          isProductSearch
            ? this.searchOnServer(trimmedQuery)
            : this.searchCustomerOnServer(trimmedQuery);
        }
      } else {
        dispatch(stopSearching(configuration.params.stopSearching));
      }
    }, configuration.searchTimeout);
  };

  onBackClick = () => {
    const { dispatch } = this.props;
    if (this.state.isSearchDone) {
      dispatch(stopSearching(configuration.params.backAfterStopSearch));
    }
  };

  clearText = () => {
    const { dispatch } = this.props;
    this.setState({
      query: configuration.emptyString
    });
    dispatch(stopSearching(configuration.params.stopSearching));
  };

  render() {
    const { query, isSearchDone, isProductSearch } = this.state;
    return (
      <View style={styles.searchingContainer}>
        <TouchableOpacity
          style={styles.iconBackContainer}
          onPress={isSearchDone ? this.onBackClick : null}
          disabled={!isSearchDone}
        >
          <Icon name="ios-arrow-round-back" style={styles.barSearchIcon} />
        </TouchableOpacity>
        <TextInput
          ref={input => (this.searchInput = input)}
          style={styles.searchInputText}
          autoCorrect={false}
          value={query}
          onChangeText={text => this.onChangeText(text)}
          placeholder={
            isProductSearch ? lang.search_all_products : lang.search_customer
          }
        />
        {!isSearchDone ? null : query.length ? (
          <TouchableOpacity
            style={styles.iconClearContainer}
            onPress={this.clearText}
          >
            <Icon name="md-close" style={styles.clearIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
