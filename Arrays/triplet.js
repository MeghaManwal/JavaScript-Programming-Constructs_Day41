
const SumofThree = (arr, target) => {
let result = [];

 for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
           for(let k = j + 1; k < arr.length; k++) {
	       if (arr[i] + arr[j] + arr[k] == target) {
		   result.push(i);
		   result.push(j);
                   result.push(k);
                }
            }
       }
 }
 return result;
}

console.log(twoSum([2, 0, -2, -1, 3], 0));
