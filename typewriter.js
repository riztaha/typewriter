const sentence = "hello there from lighthouse labs";
let idx = 0;
for (const char of sentence) {
  idx += 1000;
  setTimeout(() => {
    process.stdout.write(char);
  }, idx);
}
console.log("\n");
