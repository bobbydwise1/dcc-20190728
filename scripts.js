/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

   record(order_id): adds the order_id to the log
   get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/

class person {
  constructor(nameID, name, address) {
    this.nameID = nameID;
    this.name = name;
    this.address = address;
  }
}

class item {
  constructor(name, UPC, price) {
    this.name = name;
    this.UPC = UPC;
    this.price = price;
  }
}

//This class combines a person and their item(s) into a single order
class order {
  constructor(orderID, person, firstOrder) {
    this.orderID = orderID;
    this.person = person;
    this.orders = [firstOrder];
  }

  addOrder(item) {
    this.orders.push(item)
    return this.orders;
  }
}

//below this is the main Log class which contains order(s)
class orderLog {
  constructor() {
    this.log = [];
  }

  record(order_id) {
    this.log.push({orderID: order_id.orderID, inventory: order_id});
    return this.log;
  }

  get_last(i) {
    return this.log[i];
  }
}

//first define some person objects
let john = new person(0, 'John', '123 Evergreen Terrace');
let jane = new person(1, 'Jane', '444 Fourth Street');
let janice = new person(2, 'Janice', '111 Main Ave');
//next define some items objects
let apple = new item('apple', '5678', 1.50);
let bannana = new item('bannana', '4011', 1.01);
let orange = new item('orange', '3321', 2.06);
//now define some single orders.  You can add more inventory to a single order.
let order1 = new order(0, john, apple);
let order2 = new order(1, jane, bannana);
order2.addOrder(orange);
//Create the main logging object
let NewOrderLog = new orderLog;
//Add some orders to the object using the orderLog.prototype.record(orderid)
NewOrderLog.record(order1);
NewOrderLog.record(order2);
console.log('the orderlog class: ',NewOrderLog);
//you can now use the orderLog.prototype.get_last(i) to retrieve the last nth order
console.log(NewOrderLog.get_last(0))
console.log(NewOrderLog.get_last(1))

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(NewOrderLog));
  $('#output-section-2').text(JSON.stringify(NewOrderLog.get_last(1)));
});
