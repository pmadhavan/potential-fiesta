import _ from 'Lodash'
function Node(value) {
  this.data = value;
  this.next = null;
}
function SLinkedList() {
  this.head = null;
}
/**
 * 
 * @param {*} value 
 */
SLinkedList.prototype.insertAtTheBegining = function (value) {
  if (!value) return;
  let newN = new Node(value);
  if (this.head) {
    newN.next = this.head;
  }
  this.head = newN;
}
SLinkedList.prototype.insertAtTheEnd = function (value) {
  if (!value) return;
  let newN = new Node(value);
  if (this.head) {
    if (this.tail) {
      this.tail.next = newN;
    }
    this.tail = newN;
  } else {
    this.head = newN;
    this.tail = newN;
  }
}

/**
 * SLinked List delete methods
 */
SLinkedList.prototype.delete = function (value) {
if(!value) return;
let currN = this.head;
let prevN = null;
while(currN){
  if(currN.data === value){
     if(prevN){
       if(!currN.next){
         this.tail=prevN;
       }
      prevN.next = currN.next;
      console.log('deleted ',currN);
    }else{
      this.head=currN.next;
    } 
  } 
  prevN = currN;
  currN = currN.next;
}
}
/**
 * To print the list nodes
 */
SLinkedList.prototype.toArray = function () {
  let node = this.head;
  let nodesArray = [];
  while (node) {
    nodesArray.push(node);
    node = node.next;
  }
  return nodesArray;
}
let sList = new SLinkedList();
sList.insertAtTheEnd(25);
sList.insertAtTheEnd(30);
sList.insertAtTheEnd(40);
sList.insertAtTheEnd(50);
console.log(sList.toArray());
sList.delete(30);
console.log(sList.toArray());
sList.delete(25);
console.log(sList.toArray());
sList.delete(50);
console.log(sList.toArray());
sList.insertAtTheEnd(50);
console.log(sList.toArray());
sList.insertAtTheEnd(60);
