class Person {
  constructor (name) {
    this.name = name;
  }
  whatName() {
    if(typeof this.name === 'string') {
      return 'This is the name:' + this.name + '!';
    }else{
      return 'Give me a name!';
    }
  }
}

const james = new Person('James');
var cardHTML = templates['card']({
  message: james.whatName()
})

document.write(cardHTML);
