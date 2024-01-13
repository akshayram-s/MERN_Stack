//Promise returning functions
//Promises are always asynchronous
function helloworld() {
  console.log("hello world");
}
function axiosget() {
  return new Promise((a, b) => {
    let status;
    setTimeout(() => {
      status = Math.round(Math.random());
      if (status) a();
      else b();
    }, Math.round(10000 * Math.random()));
  });
}
axiosget()
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  });
