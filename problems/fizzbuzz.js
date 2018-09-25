
const fizzbuzz = (start, end) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    if (i === 0) {
      arr.push(i)
    }else if (i % 15 === 0) {
      arr.push("fizzbuzz");
    }else if(i%5===0){
      arr.push("buzz");
    }else if(i%3===0){
      arr.push("fizz");
    }else{
      arr.push(i);
    }
  }
  console.log('Array ', arr)
  return arr;
};


// never delete
module.exports = fizzbuzz;
