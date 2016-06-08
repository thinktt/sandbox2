var currentDate = (new Date().toISOString()).slice(0,10);
var endDate = '2016-02-26';
var isLess = Date.parse(endDate) < Date.parse(currentDate);

console.log(Date.parse(endDate));
console.log(Date.parse(currentDate));
console.log(isLess);