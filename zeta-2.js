const strpaths = [
  "Videos/Movies/Inception.mov",
  "MyComputer/ProgramFiles/Images",
  "MyComputer/ProgramFiles/Images/pic1.jpeg",
  "Videos/Movies/English",
  "Videos/Movies/Hindi",
  "MyComputer/ProgramFiles/Docs",
  "MyComputer/System/Settings",
  "code.js"
];
 
// {[videos]:{[Movies]:{files:[],[hindi]:{files:[]} }}}
 
//  "Videos"
// "---Movies"
// "------Inception.mov"
// "------English"
// "------Hindi"
// "MyComputer"
// "---ProgramFiles"
// "------Images"
// "---------pic1.jpeg"
// "------Docs"
// "---System"
// "------Settings"
// "code.js"
 
function format(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    const splitData = str[i].split("/");
    let Current;
    while (splitData.length) {
      const elem = splitData.shift();
      if (Current) {
        Current[elem] = Current[elem] || {};
        Current = Current[elem];
      } else {
        result[elem] = result[elem] || {};
        Current = result[elem];
      }
    }
  }
  return result;
}
 
 
 
 
 
// {}
// Object.keys 
// videos, MyCompouter, code.ks , ''
//  obj(videos) -> keys.lenght > 0 '---'
// // print (param? param+ ${key]}: keu)
// videos ''
// ---movies
// ------englies
 // '-----'
 
//  function print(obj,''){
//  Object.keys(obj).forEach(val=>{
//    if(obj[val] === 'object'){
//     print(ob[val], '---')
//    }
//  })}
 
// code.js
 
console.log(format(strpaths));
