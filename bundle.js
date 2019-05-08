(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const initialData = require('./initialData');
const utils = require('./utils');

class database {
  constructor() {
    this.data = initialData;
  }

  get(keys) {
    return utils.findDeep(keys, this.data);
  }

  update(keys, value) {
    this.data = utils.assocPath(keys, value, this.data);
  }

  reset() {
    this.data = initialData;
  }
}

module.exports = database;

},{"./initialData":3,"./utils":4}],2:[function(require,module,exports){
const database = require('./database');
const db = new database();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

console.log('ddd');
},{"./database":1}],3:[function(require,module,exports){
module.exports = {
  state: 'init'
};

},{}],4:[function(require,module,exports){
const isObject = (v) => (!Array.isArray(v) && v !== null && typeof v === 'object');

/**
 * assocPath
 * @example
 * assocPath(['a','b','c'], 'new', {a: {b: {c: 'old'}}}) // => {a: {b: {c: 'new'}}}
 * assocPath(['a','b','c'], 'new', {a: {b: {c: 'old', d: 'old'}}}) // => {a: {b: {c: 'new', d: 'old'}}}
 */
const assocPath = (path, val, obj) => {
  if (!Array.isArray(path)) throw Error('the first parameter must be array');

  const idx = path[0];

  if (path.length > 1) {
    const nextObj = (obj !== undefined) ? obj[idx] : {};
    val = assocPath(path.slice(1), val, nextObj);
  }

  if (!isObject(obj)) return {[idx]: val};

  let result = {};

  for (let key in obj) {
    result[key] = obj[key];
  }
  result[idx] = val;

  return result;
}

/**
 * findDeep
 * @example
 * findDeep(['a', 'b'], { a: { b: 'value' } }) // => 'value'
 * findDeep(['a', 'c'], { a: { b: 'value' } }) // => undefined
 */
const findDeep = (keys, obj) => {
  if (!Array.isArray(keys)) throw Error('the first parameter must be array');

  let accumulator = obj;

  for (let i = 0; i < keys.length; i += 1) {
    accumulator = accumulator[keys[i]];
    if (i === keys.length - 1) return accumulator;
    if (typeof accumulator !== 'object' || Array.isArray(accumulator) === true || accumulator === null) break;
  }
  return undefined;
};

module.exports = {
  findDeep,
  assocPath
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YWJhc2UuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvaW5pdGlhbERhdGEuanMiLCJzcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBpbml0aWFsRGF0YSA9IHJlcXVpcmUoJy4vaW5pdGlhbERhdGEnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jbGFzcyBkYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuICB9XG5cbiAgZ2V0KGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZmluZERlZXAoa2V5cywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShrZXlzLCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YSA9IHV0aWxzLmFzc29jUGF0aChrZXlzLCB2YWx1ZSwgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YWJhc2U7XG4iLCJjb25zdCBkYXRhYmFzZSA9IHJlcXVpcmUoJy4vZGF0YWJhc2UnKTtcbmNvbnN0IGRiID0gbmV3IGRhdGFiYXNlKCk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zb2xlLmxvZygnZGRkJyk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0YXRlOiAnaW5pdCdcbn07XG4iLCJjb25zdCBpc09iamVjdCA9ICh2KSA9PiAoIUFycmF5LmlzQXJyYXkodikgJiYgdiAhPT0gbnVsbCAmJiB0eXBlb2YgdiA9PT0gJ29iamVjdCcpO1xuXG4vKipcbiAqIGFzc29jUGF0aFxuICogQGV4YW1wbGVcbiAqIGFzc29jUGF0aChbJ2EnLCdiJywnYyddLCAnbmV3Jywge2E6IHtiOiB7YzogJ29sZCd9fX0pIC8vID0+IHthOiB7Yjoge2M6ICduZXcnfX19XG4gKiBhc3NvY1BhdGgoWydhJywnYicsJ2MnXSwgJ25ldycsIHthOiB7Yjoge2M6ICdvbGQnLCBkOiAnb2xkJ319fSkgLy8gPT4ge2E6IHtiOiB7YzogJ25ldycsIGQ6ICdvbGQnfX19XG4gKi9cbmNvbnN0IGFzc29jUGF0aCA9IChwYXRoLCB2YWwsIG9iaikgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHRocm93IEVycm9yKCd0aGUgZmlyc3QgcGFyYW1ldGVyIG11c3QgYmUgYXJyYXknKTtcblxuICBjb25zdCBpZHggPSBwYXRoWzBdO1xuXG4gIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBuZXh0T2JqID0gKG9iaiAhPT0gdW5kZWZpbmVkKSA/IG9ialtpZHhdIDoge307XG4gICAgdmFsID0gYXNzb2NQYXRoKHBhdGguc2xpY2UoMSksIHZhbCwgbmV4dE9iaik7XG4gIH1cblxuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiB7W2lkeF06IHZhbH07XG5cbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICB9XG4gIHJlc3VsdFtpZHhdID0gdmFsO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogZmluZERlZXBcbiAqIEBleGFtcGxlXG4gKiBmaW5kRGVlcChbJ2EnLCAnYiddLCB7IGE6IHsgYjogJ3ZhbHVlJyB9IH0pIC8vID0+ICd2YWx1ZSdcbiAqIGZpbmREZWVwKFsnYScsICdjJ10sIHsgYTogeyBiOiAndmFsdWUnIH0gfSkgLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmNvbnN0IGZpbmREZWVwID0gKGtleXMsIG9iaikgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHRocm93IEVycm9yKCd0aGUgZmlyc3QgcGFyYW1ldGVyIG11c3QgYmUgYXJyYXknKTtcblxuICBsZXQgYWNjdW11bGF0b3IgPSBvYmo7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcltrZXlzW2ldXTtcbiAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgaWYgKHR5cGVvZiBhY2N1bXVsYXRvciAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShhY2N1bXVsYXRvcikgPT09IHRydWUgfHwgYWNjdW11bGF0b3IgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmluZERlZXAsXG4gIGFzc29jUGF0aFxufTtcbiJdfQ==
