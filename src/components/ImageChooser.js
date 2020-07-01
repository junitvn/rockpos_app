import React, { Component } from "react";
import {
  View,
  PermissionsAndroid,
  ToastAndroid,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { lang } from "../configs/constants";
import styles from "../themes/default/styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "react-native-image-picker";
import { checkPermission } from "../../utils/apiUtils";
import _ from "lodash";

export default class ImageChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.customization.value
        ? this.props.customization.value
        : null
    };
  }

  componentDidMount() {
    const { customization, index } = this.props;
    this.checkRequired(customization, index);
    if (customization.value) {
      this.setState({ photo: customization.value });
    }
  }

  handleChoosePhoto = async () => {
    try {
      let permission = await checkPermission([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]);
      if (permission) {
        let { customization, index, onUploadImage } = this.props;
        const options = {
          noData: false,
          maxWidth: 100,
          maxHeight: 100
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            if (response.fileSize > 0) {
              this.setState({ photo: response });
              customization = _.assign({}, customization, {
                value: response
              });
              onUploadImage(customization, index);
              this.checkRequired(customization, index);
            } else {
              ToastAndroid.showWithGravity(
                lang.please_upload_another_img,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
            }
          }
        });
      } else {
        ToastAndroid.showWithGravity(
          lang.we_need_permission_to_use_this_function,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  handleDeletePhoto = () => {
    let { customization, index, onUploadImage } = this.props;
    customization = _.assign({}, customization, {
      value: null
    });
    onUploadImage(customization, index);
    this.setState({ photo: null }, () =>
      this.checkRequired(customization, index)
    );
  };

  checkRequired = (customization, index) => {
    let required = true;
    if (customization.required > 0) {
      if (this.state.photo !== null) {
        required = true;
      } else {
        required = false;
      }
    }
    this.props.checkRequiredFile(required, index);
  };

  render() {
    const { photo } = this.state;
    let { customization } = this.props;
    return (
      <View
        key={customization.id_customization}
        style={styles.imageChooseContainer}
      >
        <View style={styles.imageChooseTitle}>
          <Text style={styles.customizationTitle}>
            {customization.name}
            {customization.required > 0 ? (
              <Text style={styles.redTxt}>{lang.required}</Text>
            ) : null}
          </Text>
        </View>
        {photo == null ? (
          <TouchableOpacity
            onPress={this.handleChoosePhoto}
            style={styles.chooseImagePanel}
          >
            <View style={styles.textBoxImageChoose}>
              <Text style={styles.textSelectAtrribute}>{lang.img_type}</Text>
            </View>
            <View style={styles.buttonChooseImage}>
              <Text style={styles.chooseImageTitle}>{lang.choose_an_img}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.imageCustomizationContainer}>
            <Image
              source={{ uri: photo.uri }}
              style={styles.imageCustomization}
            />
            <TouchableOpacity
              style={styles.iconClearImageContainer}
              onPress={this.handleDeletePhoto}
            >
              <MaterialIcons name="clear" style={styles.iconClearImage} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
