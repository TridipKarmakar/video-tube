const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log(`Async  Task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log(`Async 2 resolved`);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ UserName: "Chai", email: "chai@example.com" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ UserName: "Chai", email: "chai@example.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.UserName;
  })
  .then((UserName) => {
    console.log(UserName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });
