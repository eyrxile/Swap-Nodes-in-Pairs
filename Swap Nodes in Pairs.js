class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }

    const dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;

    while(prev.next && prev.next.next){
        const firstNode = prev.next;
        const secondNode = prev.next.next;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        prev.next = secondNode;

        prev = firstNode;
    }
    return dummy.next;
};

//Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(list1));

const list2 = null;
console.log(swapPairs(list2));

const list3 = new ListNode(1);
console.log(swapPairs(list3));