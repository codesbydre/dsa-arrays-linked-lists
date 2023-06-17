/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //create a new node with the value given
    let newNode = new Node(val);
    //if linked list currently empty (head=null), new node becomes both head and tail of list
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //if not empty, sets the next property of current tail node to the new node and updates tail to the new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let pre = current;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);

    let newNode = new Node(val);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count !== idx) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = newNode;
    newNode.next = current;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count !== idx) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    this.length--;

    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let sum = 0;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
