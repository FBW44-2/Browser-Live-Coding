let promise = new Promise((resolve, reject) => {
  let data = true;

  if (data) {
    resolve("we have received data from server");
  } else {
    reject("something is wrong");
  }

  /*         reject("Promise Rejected") */
});

console.log("start");
//state in promise
/* pending
fulfilled(resolve)
rejected(reject) */

//get data out from promise
promise
.then((value) => console.log(value))
.catch((err) => console.log(err));

console.log("end")