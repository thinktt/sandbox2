//This module is meant to test the displayPortfolioReport handler during 
//refactoring to make sure the final report objects it's producing are the same
//as the original. This should not be used in production! It serves a limited 

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var hash = require('object-hash'); 
var path = __dirname + '/';

//.............Exported Methods...............

//saves a object hash to check later
exports.saveHash = function(obj, fileName) {
  
  var objHash = totalHash(obj);
  fileName = fileName || 'targetHash';
  
  //save to hash file for retreival and comparison later
  fs.writeFileAsync(path + fileName, objHash, 'utf8')
  .then(function(){
    console.log('[reportChecker] target hash saved:');
    console.log('[reportChecker]', objHash); 
  })
  .catch(function(err) {
     console.log('[reportChecker] could not save target hash'); 
  });

};

//checks if the object matched what was saved last and console.logs true\false
exports.checkHash = function(obj, fileName) {
  
  fileName = fileName || 'targetHash';

  fs.readFileAsync(path + fileName, 'utf8')
  .then(function(targetHash){
    var objHash = totalHash(obj);
    console.log('[reportChecker] object hash:', objHash);
    console.log('[reportChecker] target hash:', targetHash);
    console.log('[reportChecker] hashes match:', objHash === targetHash );
  })
  .catch(function(err) { 
    console.log('[reportChecker] no target hash available to check');
  }); 

};


exports.save = function(obj, fileName) {

  fileName = fileName || 'tmp.json';

  fs.writeFileAsync(path + fileName, JSON.stringify(obj, null, 2), 'utf8')
  .then(function(){
    console.log('[reportChecker] saved to ' + fileName); 
  })
  .catch(function(err) {
    console.log('[reportChecker] could not save ' + fileName); 
  });

};



//.............Private Methods....................

//hashes every object in the array, sorts it, then hashes it all together
function totalHash (obj) {
  var objHashArr = [];
  var hashOfHashes;
  var i; 

  //hashs all items in the prorFolio Array
  for(i=0; i < obj.portFolio.length; i++) {
    objHashArr[i] = hash(obj.portFolio[i]);
  }
  //sort the hashes 
  objHashArr = objHashArr.sort();
  //create a final hash of all the hashes
  hashOfHashes = hash(objHashArr);

  return  hashOfHashes;
}

