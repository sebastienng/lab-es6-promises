// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready</li>`;
        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));
  }, (error) => console.log(error));

});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
              .then((step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                  .then((step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                    obtainInstruction('steak', 5)
                      .then((step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                        obtainInstruction('steak', 6)
                          .then((step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`

                            document.querySelector("#steak").innerHTML += `<li>Steak are ready</li>`;
                            document.querySelector("#steakImg").removeAttribute("hidden");
                          }).catch(error)

                      }).catch(error => console.log(error))
                  }).catch(error => console.log(error))
              }).catch(error => console.log(error))
          }).catch(error => console.log(error))
      }).catch(error => console.log(error))
  }).catch(error => console.log(error))

// Iteration 3 using async/await brusselsSproutsImg
async function makeBroccoli() {
  // ... Your code here
  const ing1 = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${ing1}</li>`
  const ing2 = await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${ing2}</li>`
  const ing3 = await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${ing3}</li>`
  const ing4 = await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${ing4}</li>`
  const ing5 = await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${ing5}</li>`
  const ing6 = await obtainInstruction('broccoli', 5)
  document.querySelector("#broccoli").innerHTML += `<li>${ing6}</li>`
  const ing7 = await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>${ing7}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli()

// Bonus 2 - Promise all
function brussel() {
  const myPrommesses = [];

  for (let i = 0; i < 8; i++) {
    myPrommesses.push(obtainInstruction('brusselsSprouts', i))
  }

  Promise.all(myPrommesses).then((value) => {
    for (elem of value) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${elem}</li>`
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

  })
}

brussel()