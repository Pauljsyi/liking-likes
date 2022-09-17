console.log("loaded......");

let currentLikes = {
  neilLikes: 0,
  nicholeLikes: 0,
  jimLikes: 0,
};

function incrementLike(e) {
  if (e.id === document.querySelector("#like-button1").id) {
    currentLikes.neilLikes++;
    console.log("neil's likes: ", currentLikes.neilLikes);

    let neil = document.querySelector("#likes1");
    neil.innerText = currentLikes.neilLikes + " like(s)";
  } else if (e.id === document.querySelector("#like-button2").id) {
    currentLikes.nicholeLikes++;
    console.log("nichole's likes: ", currentLikes.nicholeLikes);

    let nichole = document.querySelector("#likes2");
    nichole.innerText = currentLikes.nicholeLikes + " like(s)";
  } else if (e.id === document.querySelector("#like-button3").id) {
    currentLikes.jimLikes++;
    console.log("Jim's likes: ", currentLikes.jimLikes);

    let nichole = document.querySelector("#likes3");
    nichole.innerText = currentLikes.jimLikes + " like(s)";
  }
}
