/*function myPromise(a, b) {
  let status = Math.round(Math.random());
  if (status) a();
  else b();
}
myPromise(success, error);*/
let myPromise = new Promise((a, b) => {
  let status = Math.round(Math.random());
  if (status) a();
  else b();
});
myPromise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  });
