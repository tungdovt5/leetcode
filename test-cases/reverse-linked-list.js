const { ListNode } = require('../src/linked-list/reverse-linked-list');

function arrayToList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

module.exports = [
    {
        input: [arrayToList([1,2,3,4,5])],
        expected: [5,4,3,2,1],
        transform: result => listToArray(result)
    },
    {
        input: [arrayToList([1,2])],
        expected: [2,1],
        transform: result => listToArray(result)
    },
    {
        input: [arrayToList([])],
        expected: [],
        transform: result => listToArray(result)
    }
];
