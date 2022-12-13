/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
*/


//My Solution
var majorityElement = function(nums) {
    let mapNums={}

    for(const num of nums){
        if(mapNums[num]){
            mapNums[num]++
        }else{
            mapNums[num]=1
        }
    }

    for(const key in mapNums){
        if(mapNums[key]> nums.length/2){
            return key
        }
    }
};