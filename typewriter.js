const sentence = "hello there from lighthouse labs";

let time = 0; 
for (const char of sentence) {
    //console.log(char);
// process.stdout.write(char);
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time) // <= 1s delay to make it noticeable. Can dial it down later.
    time += 50; 

  
}
