var moment = require('moment')

console.log(moment().format())

// January 1st 1970 @ 12AM -> 0
// January 1st 1970 @ 1AM -> 60

var now = moment();

console.log("current timestamp", now.unix());

var timestamp = 1472242490;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'))

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))
