//your code here
const container = document.querySelector(".container");
const img = document.querySelector(".img");
const heading = document.querySelector(".heading");
const desc = document.querySelector(".desc");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const getUser = document.querySelector("#getUser");

let currentUser = { dob: "", email: "", phone: "" };

async function fetchUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];
    currentUser = user;
    setUser(user);
  } catch (err) {
    console.error(err);
  }
}

fetchUser();

function setUser(user) {
  const { picture, name } = user;
  img.setAttribute("src", picture.large);
  heading.innerText = Object.values(name).join(" ");
  desc.innerText = "";
}

age.onclick = () => {
  desc.innerText = currentUser.dob?.age;
};

email.onclick = () => {
  desc.innerText = currentUser.email;
};

phone.onclick = () => {
  desc.innerText = currentUser.phone;
};

getUser.onclick = () => fetchUser();