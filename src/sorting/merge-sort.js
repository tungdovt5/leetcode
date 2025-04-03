/**
 * Problem: Merge Sort Implementation
 * Implement the merge sort algorithm to sort an array in ascending order.
 * 
 * Example:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function mergeSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
    
    return merge(left, right);
}

/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;
