
const fs = require('fs') 
const arrayNew =[];
const arrayNew1 =[];

function jsonFile (path) {

try {
  const rawdata = fs.readFileSync(path);
  const input = JSON.parse(rawdata);

  if (typeof(input.flag) === "boolean") {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({ flag:'Flag is not boolean'});}
  
  
  if (Array.isArray(input.myPromises)) {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({myPromises:'myPromises is not an array'});}
  
  if (typeof(input.element) === "object") {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({element:'Element is not an Object'});}
  
  if (input.screenshot === null) {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({screenshot:'screenshot is not null'});}
  
  
  if (typeof(input.elementText) === "string") {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({elementText:'elementText is not strng'});}
  
  
  if (input.allElementsText.includes('const')) {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({allElementsText: 'allElementsText does not contain const'});}
  
  if (typeof(input.counter) === "number") 
  {
  if (input.counter > 10) 
  {
    arrayNew.push ('ok');
  } else if (input.counter === 10) {
    arrayNew1.push ({counter:'counter = 10'});}
    else {
      arrayNew1.push ({counter:'counter is less than 10'});} 
  }
  else {arrayNew1.push ({counter:'counter is not number'});}
  
  
  if (input.config === "Common") {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({config:'config is not equal to Common'});}
  
  
  let par = input.const;
  par = par.toLowerCase();
  
  if (par === "first") {
    arrayNew.push ('ok');
  } else {arrayNew1.push ({const:'const is not equal to first'});}
  
  
  if (Array.isArray(input.parameters)) 
  {
       if (input.parameters.length == 8) 
       {arrayNew.push ('ok'); }
       else {
      arrayNew1.push ({parameters:'array length is not equal to 8 '});} 
  }
  else {arrayNew1.push ({parameters:'parameters is not an array'});}
  
  
  if (typeof(input.description) === "string") 
  {
       if (input.description.length > 5 && input.description.length < 13) 
       {arrayNew.push ('ok'); }
       else {
      arrayNew1.push ({description:'Description does not meet the following requirement: length more than 5 but less than 13. Description = ' + input.description.length} );} 
  }
  else {arrayNew1.push ({description:'description is not a string'});}
   

  } catch(err) {
  console.log(err)
  return
}

let result = false; 
if (arrayNew.length == 11) { result = true}
else {
result = false;
}
return result;
}



let summary = jsonFile('./test.json');

if (summary){
  console.log("OK");
} else {
    let data = JSON.stringify(arrayNew1,null, 1);
    fs.writeFileSync('./Newtest.json', data);
    console.log("New file with properties that not satisfied requirements was created");
  }


 