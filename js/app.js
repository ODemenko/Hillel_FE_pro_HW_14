function clouser() {
    let total = 0;

    return function(value) {
      total += value;
      return total;
    };
}

sum = clouser();
 
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));