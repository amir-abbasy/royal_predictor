const history = require('./history.json')
const {lastResults} = require('./getHistory.js')



const string = "0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0"
// arr = history.page.content.map(_=> (parseInt(_['drawResults'][0][6]['name']) % 2 == 1 ? 1 : 0)) 
// const string  = arr.join()
// console.log(arr.join());

function predict(word = '') {
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

return r
}


async function run(word){
  // var data = await lastResults(1,10)
  // console.log(data);
  var rs = predict(word)
  // console.log("ON - ",  word, rs, rs.length > 2);
  if(rs.length == 0){
    run(word.slice(0, word.length - 2))
  }else{
    // PREDICT
    var _0s = rs.filter(_=>_ == 0).length
    var _1s = rs.filter(_=>_ == 1).length
    var abs_word = word.split(",").join("")
    var avrg = _1s > _0s ? "1 ODD" : "0 EVEN"
    var decision = "can't predict.. avarage : "+avrg

    var include_0 = rs.includes(0);
    var include_1 = rs.includes(1);
    var isPure = false
    if(include_0){
      if(!include_1)isPure = true 
    }else{
      if(include_1)isPure = true 
    }

    if(isPure && rs.length > 3){
      decision =  rs[0] == 0 ? "EVEN" : "ODD"
    }

    console.log(rs.length, '-> ', rs, word, abs_word.length)
    console.log(new Date().toLocaleString()+" -> "," ______"+(parseInt(new Date().getMinutes())+2), decision);
    // console.log(rs);
  }
}
// (async ()=>{
//   var lastWins = await lastResults(1,10)
//   // console.log(data);
//   lastWinsTo_01 = lastWins.map(_=> _ % 2 == 1 ? 1 : 0) 
//   var word = lastWinsTo_01.join()
//   // console.log(word);
//   run(word)
// })()


(function(){
  var min = null;

      (async function k(){
        var this_min = new Date().getMinutes()
        if(this_min != min){
          
          // RUN each minutes
          // console.log(this_min);
          console.log();

          var lastWins = await lastResults(1,10)
          // console.log(data);
          lastWinsTo_01 = lastWins.map(_=> _ % 2 == 1 ? 1 : 0) 
          var word = lastWinsTo_01.join()
          // console.log(word);
          run(word)




          min = this_min
        }
        // console.log(new Date().toLocaleString());
          setTimeout( k, 15000 );
      })()

  })()
  