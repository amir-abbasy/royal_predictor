// import history from './history.json'
const history = require('./history.json')
const {lastResults} = require('./getHistory.js')
// import {lastResults} from './getHistory.js'
// arr = history.page.content.map(_=> {
//     var oddEven =  parseInt(_['drawResults'][0][6]['name']) % 2 == 1 ? 'ODD' : "EVEN"
//    return _['issue'] + ' : ' + _['drawResults'][0][6]['name'] + ' : ' +oddEven
// })
// arr = history.page.content.map(_=> (parseInt(_['drawResults'][0][6]['name']) % 2 == 1 ? 1 : 0)) 
// console.log(arr);
// console.log(arr.join());
// console.log(history.page.content.length);

// "type": "module",

// last
// 202210150529	15/10 08:48:00




const string = "0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0"
// arr = history.page.content.map(_=> (parseInt(_['drawResults'][0][6]['name']) % 2 == 1 ? 1 : 0)) 
// const string  = arr.join()
// console.log(arr.join());

function predict(props) {
  
const word = '1,0,0,0,0,0,0,0,0';
var newString = string
var result = []
do{
    const index = newString.indexOf(word);
    // console.log(newString.indexOf(word) , '-> ', newString.substring(index, index+word.length));
    var lucky = newString.substring(index-2, index-1)
    // console.log(newString.indexOf(word) , '-> ', res);
    newString = newString.substring(index+word.length, newString.length);
    result.push(parseInt(lucky))
}while (newString.indexOf(word) !== -1)

var r = result.splice(1)
var _0s = r.filter(_=>_ == 0).length
var _1s = r.filter(_=>_ == 1).length
console.log(r.length, '-> ', r)
console.log("NEXT -> ", _1s > _0s ? "1 ODD" : "0 EVEN");
}


async function run(){
  var data = await lastResults(1,10)
  console.log(data);
  predict()
}

run()