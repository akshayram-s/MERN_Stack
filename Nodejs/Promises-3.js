function helloworld() {
  console.log("hello world");
}

function axiosget() {
  return new Promise((a, b) => {
    let project_status;
    setTimeout(() => {
      project_status = Math.round(Math.random());
      if (project_status) a();
      else b();
    }, Math.round(10000 * Math.random()));
  });
}

async function main() {
  let data = await axiosget()
    .then(() => {
      return "Wow!! ,we are going on picnic";
    })
    .catch(() => {
      return "Oh no,no picnic";
    });
  helloworld();
  console.log(data);
}

main();
