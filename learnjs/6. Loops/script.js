// for (let index = 1; index < 0; index = index + 3) {
//     console.log("Anuj", index);
// }

// let step = 6;
// while (step < 5) {
//     console.log("step", step);
//     step += 1;
// }

// let step = 6;
// do {
//     console.log("step", step);
//     step += 1;
// } while (step < 5);

let step = 0;
while (step < 5) {
    step += 1;
    if (step === 2) {
        continue;
    }
    console.log("step", step);
}
