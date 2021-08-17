Minimum Number of Platforms Required for a Railway/Bus Station
Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits. 
We are given two arrays that represent the arrival and departure times of trains that stop.

Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00} 
dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00} 
Output: 3 
Explanation: There are at-most three trains at a time (time between 11:00 to 11:20)
Input: arr[] = {9:00, 9:40} 
dep[] = {9:10, 12:00} 
Output: 1 
Explanation: Only one platform is needed. 





const input = [900, 940, 950, 1100, 1500, 1800]; // nlgn
const dep = [910, 1200, 1120, 1130, 1900, 2000];

function find(input, dep) {
  let result = 1;
  for (let i = 0; i < input.length; i++) {
    let count = 0;
    for (let j = i + 1; j < dep.length; j++) {
      if (
        (input[i] <= dep[j] && input[j] >= input[i]) ||
        (input[j] >= input[i] && input[j] <= dep[i])
      ) {
        count++;
      }
    }
    result = Math.max(count, result);
  }
  return result;
}

console.log(find(input, dep));







2. Nested object iteration

var cars={
  label: 'Autos',
  subs: [
    {
      label: 'SUVs',
      subs: [
        
      ]
    },
    {
      label: 'Trucks',
      subs: [
        {
          label: '2 Wheel Drive',
          subs: [
            
          ]
        },
        {
          label: '4 Wheel Drive',
          subs: [
            {
              label: 'Ford',
              subs: [
                
              ]
            },
            {
              label: 'Chevrolet',
              subs: [
                
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Sedan',
      subs: [
        
      ]
    }
  ]
}

1. Iterate deeply into a complex object in JavaScript and print all labels

For Eg: Can be inside string or array
Final output - ‘Autos, Suvs , trucks,... etc‘ 
2. Also if possible return ‘Ford’ object by iterating over it.

function callFn(obj, str = "") {
  for (let key in obj) {
    if (obj[key] === "Ford") {
      console.log(obj);
    }
    if (key === "label") {
      str = `${str} ${obj["label"]}`;
    } else if (Array.isArray(obj[key])) {
      str = obj[key].reduce((acc, cur) => {
        acc = callFn(cur, acc);
        return acc;
      }, str);
    } else if (typeof obj[key] === "object") {
      return callFn(obj[key], str);
    }
  }
  return str;
}

console.log(callFn(cars));





