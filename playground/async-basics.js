console.log("Starting app");

setTimeout(() => {
    console.log("Inside of callback");
}, 2000); // Node's non-blocking nature means that "Finishing up" will print before this

setTimeout(() => {
    console.log("Zero delay");
}, 0); // Though this is zero seconds delay, it still prints after "Finishing up" but before "Inside of callback"

console.log("Finishing up");
