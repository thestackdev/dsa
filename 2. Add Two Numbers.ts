class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseLinkedlist(l: any) {
  let current = l;
  let str = "";

  while (current) {
    str = current.val + str;
    current = current.next;
  }

  // @ts-ignore
  return BigInt(str);
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let a1 = 0;
  let a2 = 0;

  if (l1) a1 = reverseLinkedlist(l1);
  if (l2) a2 = reverseLinkedlist(l2);

  const sum = a1 + a2;
  const sumArr = sum.toString();

  console.log(sum);
  //   @ts-ignore
  const splitted = sumArr.split("").map((e) => parseInt(e));

  console.log(splitted);

  const res = new ListNode(splitted[splitted.length - 1], null);
  let currentHead = res;

  for (let i = splitted.length - 2; i >= 0; i--) {
    const x = new ListNode(splitted[i]);
    currentHead.next = x;
    currentHead = currentHead.next;
  }
  return res;
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

const l1 = buildList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l2 = buildList([5, 6, 4]);

console.log(addTwoNumbers(l1, l2));
