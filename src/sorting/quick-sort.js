/**
 * Problem: Quick Sort Implementation
 * Implement the quick sort algorithm to sort an array in ascending order.
 * 
 * Example:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort(nums) {
    // Make a copy to avoid modifying the input array
    nums = [...nums];
    quickSortHelper(nums, 0, nums.length - 1);
    return nums;
}

function quickSortHelper(nums, low, high) {
    if (low < high) {
        const pivotIndex = partition(nums, low, high);
        quickSortHelper(nums, low, pivotIndex - 1);
        quickSortHelper(nums, pivotIndex + 1, high);
    }
}

function partition(nums, low, high) {
    // Choose rightmost element as pivot
    const pivot = nums[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (nums[j] <= pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    
    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;
}

module.exports = quickSort;
