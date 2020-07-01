import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  dimContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  searchPanel: {
    height: 60
  },
  mainPanel: {
    flex: 1,
    flexDirection: "row"
  },
  listItemPanel: {
    flex: 7
  },
  cartPanel: {
    flex: 3,
    height: "100%",
    borderLeftColor: "gray",
    borderLeftWidth: 1
  },
  wrapperStyleListIcon: {
    justifyContent: "space-between",
    marginBottom: 8
  },
  optionPanel: {
    height: 50,
    flexDirection: "row",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderTopWidth: 0,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    elevation: 4,
    backgroundColor: "#fff"
  },
  cartDetailPanel: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  paymentPanel: {
    flex: 3
  },
  iconMenu: {
    fontSize: 40,
    color: "#000"
  },
  iconSearch: {
    fontSize: 41,
    color: "#000",
    marginEnd: 20,
    marginTop: 4
  },
  iconScan: {
    width: 33,
    height: 33,
    marginTop: 8,
    marginRight: 1
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 14,
    alignItems: "center",
    backgroundColor: "#4CB050"
  },
  headerRightPanel: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  headerLeftPanel: {
    flex: 8
  },
  searchingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    elevation: 5
  },
  indicator: {
    position: "absolute",
    height: "50%",
    width: "50%"
  },
  image: {
    width: 155,
    height: 155,
    marginBottom: 5
  },
  imageCustomizationContainer: {
    marginTop: 8,
    flexDirection: "row"
  },
  iconClearImageContainer: {
    position: "absolute",
    top: -9,
    left: 80,
    backgroundColor: "#C0C0C0",
    borderRadius: 20
  },
  flexRow: { flexDirection: "row" },
  flexEnd: { justifyContent: "flex-end" },
  marginBot40: { marginBottom: 40 },
  buttonClearCustomerContainer: {
    flex: 1,
    justifyContent: "center"
  },
  iconPlus: {
    fontSize: 22,
    opacity: 0.4
  },
  iconDelete: {
    fontSize: 25
  },
  itemCartContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingRight: 9,
    paddingBottom: 10
  },
  titlePopupItemCart: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    height: 80
  },
  closePopup: {
    width: "10%",
    fontSize: 20
  },
  titleItemCartWrapper: {
    width: "85%",
    flex: 8.5
  },
  confirmPopup: {
    width: "5%",
    fontSize: 20,
    color: "#4CB050"
  },
  txtQuantity: {
    fontSize: 15,
    margin: 10
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnChangeQuantity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  changeQuantityIcon: {
    fontSize: 32,
    color: "#4CB050"
  },
  quantityPopup: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  titleBarPopup: {
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "#CECECE",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingStart: 15,
    paddingBottom: 15
  },
  buttonPopupPanel: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  buttonChangeCombinationPanel: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginStart: 5
  },
  xButton: {
    color: "#000",
    fontSize: 40
  },
  iconClearImage: {
    color: "#808080",
    fontSize: 30
  },
  removeCustomerButton: {
    color: "#4CB050",
    fontSize: 35,
    paddingLeft: 4
  },
  checkButton: {
    color: "#4CB050",
    fontSize: 40
  },
  titlePopupPanel: {
    flex: 8,
    flexDirection: "column",
    marginStart: 15
  },
  titleCombination: {
    flexDirection: "row"
  },
  dialogContainer: {
    width: 765,
    height: 540,
    paddingVertical: 10
  },
  paddingVertical10: {
    paddingVertical: 10
  },
  paddingVertical5: {
    paddingVertical: 5
  },
  contentPopup: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 60
  },
  imageChooseContainer: {
    flex: 1,
    marginTop: 5
  },
  buttonChooseImage: {
    backgroundColor: "gray",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 250
  },
  textBoxImageChoose: {
    flex: 7,
    justifyContent: "center",
    marginStart: 10
  },
  imageChooseTitle: {
    flex: 1,
    justifyContent: "flex-end"
  },
  textDiscountWrapper: {
    marginStart: 10
  },
  buttonCheckPopupPanel: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 6
  },
  textTitlePopup: {
    fontSize: 27,
    color: "#070707"
  },
  inputQty: {
    fontSize: 43,
    fontWeight: "400",
    color: "#070707",
    paddingHorizontal: 60
  },
  disabledBtn: { color: "gray" },
  textCombinationWrapper: {
    flex: 1
  },
  textSecondTitlePopup: {
    fontSize: 16,
    color: "#808080",
    paddingBottom: 5,
    lineHeight: 10
  },
  itemAttributeContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CECECE",
    borderWidth: 2,
    paddingVertical: 20,
    marginRight: 30,
    marginTop: 10,
    width: 120
  },
  chooseImageTitle: {
    fontSize: 18,
    color: "white"
  },
  chooseImagePanel: {
    marginTop: 10,
    flexDirection: "row",
    borderColor: "#CECECE",
    borderWidth: 2
  },
  selectedItemAttribute: {
    borderColor: "#4CB050"
  },
  buttonCheckPopupPanel: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 6
  },
  listItemContainer: {
    padding: 20
  },
  listCart: {
    paddingTop: 10
  },
  listItemSearchContainer: {
    paddingLeft: 11,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 50,
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    elevation: 5,
    zIndex: 88,
    height: "100%"
  },
  listItemSearchTxt: {
    fontSize: 18,
    color: "#808080"
  },
  productNameSearchTxt: {
    fontSize: 20,
    color: "#808080"
  },
  highlightlistItemSearchTxt: {
    fontSize: 20,
    color: "#4CB050"
  },
  textChangeThis: {
    fontSize: 18,
    color: "#4CB050",
    textDecorationLine: "underline"
  },
  namePanelItemSearch: {
    flex: 7,
    marginTop: 5,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  priceItemSearch: {
    flex: 1,
    color: "#4CB050",
    fontSize: 20
  },
  priceItemSearchPanel: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 15,
    flex: 1
  },
  loadingItemContainer: {
    position: "absolute",
    top: "50%",
    left: "50%"
  },
  loadingItemContainerDim: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  imageItemSearch: {
    height: 90,
    width: 90,
    marginRight: 7
  },
  searchInputText: {
    flex: 9,
    fontSize: 18,
    color: "#808080"
  },
  barSearchIcon: {
    fontSize: 55,
    color: "#4CB050"
  },
  clearIcon: {
    fontSize: 42,
    color: "#4CB050"
  },
  iconBackContainer: {
    flex: 0.5
  },
  iconClearContainer: {
    flex: 0.5,
    alignItems: "flex-end"
  },
  infoTxt: {
    color: "#333",
    textAlign: "center"
  },
  selectedTxt: {
    fontSize: 18,
    color: "#333"
  },
  noBorderRadius: {
    borderRadius: 0,
    width: "67%"
  },
  dialogStyle: {
    borderRadius: 0
  },
  variantContainer: {
    marginBottom: 50
  },
  grayTxt: {
    fontSize: 18,
    color: "#808080"
  },
  customizationTitle: {
    fontSize: 18,
    color: "#808080",
    marginTop: 15
  },
  textDiscountInactiveTitle: {
    fontSize: 18,
    color: "#808080",
    marginTop: 5
  },
  textDiscountActiveTitle: {
    fontSize: 18,
    color: "#4CB050",
    marginTop: 5
  },

  textSelectAtrribute: {
    fontSize: 19,
    color: "#808080"
  },
  textCombinationAttribute: {
    fontSize: 19,
    color: "#808080"
  },
  textColorAttribute: {
    fontSize: 19,
    color: "#808080",
    marginTop: 15
  },
  greenTxt: {
    fontSize: 18,
    color: "#4CB050",
    marginTop: 5
  },
  redTxt: {
    fontSize: 16,
    color: "red"
  },
  notiTxt: {
    paddingLeft: 870
  },
  inputTxt: {
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    fontSize: 18,
    color: "#696969"
  },
  itemSearchResultContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 27
  },
  listCard: {
    padding: 20
  },
  itemCartWrapper: {
    width: "90%"
  },
  itemCart: {
    flex: 1,
    flexDirection: "row"
  },
  quantityCard: {
    fontSize: 29,
    color: "#000",
    paddingHorizontal: 5
  },
  textQtyCartWrapper: {
    alignItems: "center",
    flex: 1.5
  },
  infoItemCart: {
    flex: 6.5,
    paddingTop: 7
  },
  priceItemCart: {
    flex: 3,
    paddingTop: 7,
    textAlign: "right"
  },
  btnDelWrapper: {
    width: "10%",
    alignItems: "flex-end",
    paddingTop: 5
  },
  delProductCart: {
    fontSize: 25,
    color: "#4CB050"
  },
  inputDiscountItem: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#808080"
  },
  payCartContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  discountWarpper: {
    flexDirection: "row",
    width: "90%"
  },
  txtDiscountCart: {
    width: "60%",
    fontSize: 18,
    color: "#4CB050"
  },
  payCartTxt: {
    width: "60%",
    fontSize: 18,
    color: "#000"
  },
  amountDiscount: {
    width: "40%",
    textAlign: "right",
    fontSize: 18,
    color: "#4CB050",
    paddingRight: 5
  },
  currencyTxt: {
    width: "40%",
    textAlign: "right",
    fontSize: 18,
    color: "#000"
  },
  txtTotal: { width: "60%" },
  txtDiscount: {
    fontSize: 15,
    margin: 10
  },
  discountCartContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  discountCartWrapper: {
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    paddingLeft: 20,
    alignItems: "center"
  },
  percentInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    flex: 1,
    marginRight: 20,
    height: 40,
    paddingLeft: 10
  },
  discountTypeContainer: {
    flexDirection: "row",
    width: 100
  },
  inputDiscountCart: {
    height: 40,
    borderWidth: 0,
    width: "100%",
    paddingLeft: 10
  },
  selectedDiscountType: {
    backgroundColor: "#4CB050"
  },
  discountType: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 40,
    marginHorizontal: 5,
    borderColor: "#4CB050"
  },
  selectedIconDiscount: {
    color: "#fff"
  },
  iconDiscount: {
    fontSize: 20
  },
  iconDiscountPercent: {
    fontSize: 14
  },
  txtDiscountMsg: {
    fontSize: 16,
    color: "red",
    marginTop: 5
  },
  paymentPopup: {
    alignItems: "center",
    paddingTop: 20
  },
  txtTotalPopup: {
    fontSize: 22,
    color: "#000"
  },
  txtAmountPopup: {
    fontSize: 36,
    color: "#000",
    marginBottom: 30
  },
  btnTypePaymemtWrapper: {
    flexDirection: "row"
  },
  btnTypePayment: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 30,
    marginHorizontal: 5
  },
  txtTypePayment: {
    fontSize: 20,
    color: "#000"
  },
  thankContainer: {
    backgroundColor: "#4CB050",
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  iconCheck: {
    fontSize: 20,
    color: "white"
  },
  btnPayment: {
    backgroundColor: "#4CB050",
    paddingVertical: 8,
    marginTop: 10
  },
  txtPayment: {
    textAlign: "center",
    color: "#fff",
    fontSize: 28
  },
  disabledPayment: {
    opacity: 0.5,
    backgroundColor: "#CCCCCC"
  },
  addCustomerWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: 10,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  txtAddCustomer: {
    fontSize: 18,
    color: "#CCCCCC"
  },
  txtCustomer: {
    flex: 4,
    fontSize: 18,
    color: "#000"
  },
  cartTxt: {
    fontSize: 18,
    color: "#2d2929"
  },
  rightTxt: {
    textAlign: "right"
  },
  textPriceBlockList: {
    flexDirection: "row",
    justifyContent: "center"
  },
  popup: {
    elevation: 99,
    zIndex: 99
  },
  whiteBg: {
    backgroundColor: "#fff",
    paddingTop: 5
  },
  priceTxt: {
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
    paddingHorizontal: 50,
    paddingTop: 10,
    fontSize: 21,
    color: "#808080"
  },
  dollarIcon: {
    fontSize: 18,
    color: "#000"
  },
  marginBottom10: {
    marginBottom: 10
  },
  txtOrderCompleted: {
    fontSize: 40,
    color: "#000"
  },
  txtOrderRef: {
    fontSize: 20,
    color: "#000"
  },
  completeIcon: {
    fontSize: 140,
    color: "#fff",
    marginTop: 50
  },
  btnDelDiscount: {
    width: "10%",
    alignItems: "flex-end"
  },
  paddingTop5: {
    paddingTop: 5
  },
  menuContainer: {
    backgroundColor: "#fff",
    padding: 20,
    paddingLeft: 30,
    flex: 1
  },
  opacityBg: {
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 9,
    width: "100%",
    height: "100%",
    elevation: 5
  },
  productWrapper: {
    marginBottom: 15,
    paddingHorizontal: 10
  },
  popupTxt: {
    fontSize: 16,
    color: "#808080"
  },
  lineThrough: {
    textDecorationLine: "line-through"
  },
  textPriceWithoutReduction: {
    textDecorationLine: "line-through",
    color: "#808080"
  },
  textPriceWithReduction: {
    color: "#333",
    paddingRight: 5
  },
  txtCustomerName: {
    color: "#4CB050",
    fontSize: 18
  },
  txtCustomerEmail: {
    color: "#4CB050",
    fontSize: 16
  },
  currentCustomerWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: 10,
    paddingVertical: 4,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  customerInfo: {
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 5
  },
  drawerContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: "center",
    backgroundColor: "#4CB050"
  },
  listOrdersWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40
  },
  maxWidth: {
    maxWidth: 500
  },
  ordersDetailWrapper: {
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: "center"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headingWrapper: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    paddingVertical: 15
  },
  orderHeader: {
    fontWeight: "bold"
  },
  orderID: {
    width: "10%",
    color: "#000",
    paddingLeft: 20,
    fontSize: 18
  },
  orderRef: {
    width: "19%",
    color: "#000",
    fontSize: 18
  },
  orderCustomer: {
    width: "19%",
    color: "#000",
    fontSize: 18
  },
  orderStatus: {
    width: "22%",
    color: "#000",
    fontSize: 18
  },
  orderTotal: {
    width: "10%",
    textAlign: "right",
    color: "#000",
    fontSize: 18
  },
  orderDate: {
    width: "20%",
    textAlign: "right",
    paddingRight: 30,
    color: "#000",
    fontSize: 16
  },
  detailRef: {
    textAlign: "center",
    color: "#000",
    fontSize: 28,
    marginBottom: 30
  },
  detailName: {
    fontSize: 20,
    marginBottom: 8
  },
  blackTxt: {
    color: "#000"
  },
  itemOrderWrapper: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1"
  },
  detailItemwrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailLabel: {
    color: "#000000",
    fontSize: 20,
    marginTop: 10
  },
  itemDetailList: {
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    flex: 1
  },
  itemDetailContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  itemDetailQty: {
    width: "10%",
    fontSize: 20,
    color: "#000"
  },
  itemDetailInfo: {
    width: "70%"
  },
  itemDetailTxt: {
    fontSize: 20,
    color: "#000"
  },
  itemDetailPrice: {
    textAlign: "right",
    width: "20%"
  },
  cashTxt: {
    color: "#000000",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold"
  },
  discountTxt: {
    textAlign: "right",
    textDecorationLine: "line-through",
    fontSize: 16,
    color: "#808080"
  },
  infoProductTxt: {
    fontSize: 16,
    color: "#808080",
    marginLeft: -3
  },
  reverseIcon: {
    color: "white",
    fontSize: 50
  },
  headerBarScan: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  home: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  blinkLine: {
    backgroundColor: "red",
    height: 2,
    width: 260
  },
  containerFinder: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  finder: {
    alignItems: "center",
    justifyContent: "center"
  },
  topLeftEdge: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 20
  },
  topRightEdge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 40,
    height: 20
  },
  bottomLeftEdge: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 20
  },
  bottomRightEdge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 20
  },
  textNotExist: {
    color: "white",
    fontStyle: "normal"
  },
  warningText: {
    color: "red",
    fontSize: 18
  },
  warning: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "red"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  barcodeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  homeContainer: {
    flex: 1,
    flexDirection: "row"
  },
  itemListingWrapper: {
    flex: 7
  },
  itemListingContainer: {
    paddingTop: 20
  },
  columnWrapper: {
    paddingHorizontal: 10
  },
  imageContainer: {
    width: 300,
    height: 300
  },
  imageCustomization: {
    width: 100,
    height: 100
  },
  marStart10: {
    marginStart: 10
  },
  height100: {
    height: 100
  },
  flexDirectionRow: {
    flexDirection: "row"
  },
  paymentWrapper: {
    flex: 1
  },
  cartContainer: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "black"
  },
  itemCustomerSearchContainer: {
    paddingHorizontal: 72,
    paddingVertical: 6
  },
  itemCustomerNameSearch: {
    fontSize: 21,
    color: "#7b7878"
  },
  itemCustomerEmailSearch: {
    fontSize: 19,
    color: "#a9a9a9"
  }
}));
