import { configuration } from "../src/configs/constants";
import { sprintf } from "printj";
import { PermissionsAndroid } from "react-native";
import _ from "lodash";

export const toFormData = (obj, form, namespace) => {
  let fd = form || new FormData();
  let formKey;
  for (let property in obj) {
    if (obj.hasOwnProperty(property) && obj[property]) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }
      // if the property is an object, but not a File, use recursivity.
      if (obj[property] instanceof Date) {
        fd.append(ormKey, obj[property].toISOString());
      } else if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        toFormData(obj[property], fd, formKey);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

export const limitText = text => {
  if (text.length >= configuration.maxLength) {
    let trimmedTxt = text.substr(0, configuration.maxLength);
    return trimmedTxt + configuration.threeDot;
  } else {
    return text;
  }
};

export const displayPrice = price => {
  return sprintf(
    configuration.format.price,
    Number(price).toFixed(configuration.precision)
  );
};
export const formatPrice = price => {
  return Number(price).toFixed(configuration.precision);
};

export const fixedNumber = (number, digit) => {
  return Number(number).toFixed(digit);
};

export async function checkPermission(permission) {
  const granted = await PermissionsAndroid.requestMultiple(permission);
  let permissionAccepted = !_.includes(
    _.values(granted),
    PermissionsAndroid.RESULTS.DENIED
  );
  return permissionAccepted;
}
