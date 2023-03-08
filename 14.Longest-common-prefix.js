/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/


//My Solution
var longestCommonPrefix = function(strs) {
    let first=strs[0]
    
    for(i=0;i<first.length;i++){
        for(j=1;j<strs.length;j++){
            if(first[i]!==strs[j][i]){
                return first.slice(0,i)
            }
        }
    }
    return first
    };