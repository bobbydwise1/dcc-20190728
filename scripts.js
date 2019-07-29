/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

   record(order_id): adds the order_id to the log
   get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/

class item {
  constructor(name, UPC, price) {
    this.name = name;
    this.UPC = UPC;
    this.price = price;
  }
}

class order {
  constructor(person, orders) {
    this.orderID = orderID;
    this.person = person;
    this.orders = [];
  }

  addOrder(item) {
    this.orders.push(item)
    return this.orders;
  }
}

class orderLog {
  this.orderID = 0;
  this.nameID = 0;
  constructor(person, orders) {
    this.log = [];
  }

}

class person {
  constructor(name, address) {
    this.nameID = nameID;
    this.name = name;
    this.address = address;
  }
}

let john = new person('John', '123 Evergreen Terrace');
let jane = new person('Jane', '444 Fourth Street');
let janice = new person('Janice', '111 Main Ave');

let apple = new item('apple', '5678', 1.50);
let bannana = new item('bannana', '4011', 1.01);
let orange = new item('orange', '3321', 2.06);


$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    let input1 = $('#input1').val()
    $('#output-section-1').text(1);
    $('#output-section-2').text(2);
  });
});
