/**
 * JSON array object or array to JSON map converter.
 */
module.exports = (ja, key) => {
  return ja.reduce((a, r) => ({ ...a, [r[key]]: r }), {});
};
