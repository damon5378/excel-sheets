console.log("====================================");
console.log("Module.js");
console.log("====================================");

async function Start() {
  return await Promise.resolve("async is working");
}

Start().then(console.log);
