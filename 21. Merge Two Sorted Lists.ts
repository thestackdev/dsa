class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): any {
  let dummyHead: ListNode | null = new ListNode();
  let current: ListNode | null = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 ? list1 : list2;

  return dummyHead.next;
}

function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  for (const value of values) {
    const newNode = new ListNode(value);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      // @ts-ignore
      current.next = newNode;
      // @ts-ignore
      current = current.next;
    }
  }

  return head;
}

const l1List = buildList([1, 2, 4]);
const l2List = buildList([1, 3, 4, 5]);

console.log(mergeTwoLists(l1List, l2List));
