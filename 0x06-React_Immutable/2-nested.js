import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  const immutObj = fromJS(object);
  return immutObj.getIn(array, undefined);
}
