/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/


//My Soloution
var inorderTraversal = function(root) {
    let res=[]

    if(!root) return res

const traverse=node=>{
    if(node.left) traverse(node.left)
        res.push(node.val)
    if(node.right) traverse(node.right)
        
}
 traverse(root)       
    return res
};