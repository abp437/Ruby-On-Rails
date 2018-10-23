import _ from 'lodash';

export const getClassSet = (e) => {
  return _.isObject(e) ? _.chain(e).map(function (e, t) {
    if (_.isString(t) && _.isBoolean(e))
      return e ? t : ""
  }).compact().join(" ").value() : "";
}
