console.log("loaded......");
let currentLikes = 0;
function incrementLike(e) {
  // const click = document.querySelector("#like-button");
  // click.addEventListener("click", function () {
  //   currentLikes += 1;
  //   console.log("currentLikes: ", currentLikes);
  //   let likes = document.querySelector("#likes");
  //   likes.innerText = currentLikes + "  like(s)";
  // });

  currentLikes += 1;
  console.log("currentLikes: ", currentLikes);
  let likes = document.querySelector("#likes");
  likes.innerText = currentLikes + "  like(s)";
}
