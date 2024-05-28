// What will be logged here?

/*
Task 1
function getItem() {
  console.log(this); //= window 
}
getItem();
*/

/*

Task 2
const item = {
  title: "Ball",
  getItem() {
    console.log("this", this); //= 'this' item{title: Ball, getItem()}
  },
};

item.getItem();
*/
/*
Task 3
class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log("this", this);
    }
    someFn();
    }
}

const item = new Item();
item.getItem(); // = undefined

*/
