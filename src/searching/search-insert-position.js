/**
 * Problem: Search Insert Position
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, return the index 
 * where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}

module.exports = searchInsert;
