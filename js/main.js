window.addEventListener("scroll", (e) => {
  //   console.log(e);
  //   console.log(window.scrollY);
  if (window.scrollY > 120) {
    document.querySelector("nav").classList.add("active");
  } else {
    document.querySelector("nav").classList.remove("active");
  }
});

const questions = document.querySelectorAll("section.faqs .faq");
Array.from(questions).forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    el.querySelector(".icon").textContent = el.classList.contains("active")
      ? "arrow_drop_down"
      : "arrow_right";
  });
});

// Syntax
// toggle("active", <condition>)

// Menu Click
// const menuIcons = document.querySelectorAll("nav button");
// menuIcons.forEach(icon=> {
//   if(icon.classList.contains("open-menu-btn")) {
//     icon.addEventListener("click", ()=> {
//       icon.classList.add("open");
//     })
//   }else {

//   }
// })
const menu = document.querySelector("nav ul");
const menuIcon = document.querySelector("nav button");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  if (menuIcon.classList.contains("open")) {
    menuIcon.querySelector("span").textContent = "close";
    menu.classList.add("active");
  } else {
    menuIcon.querySelector("span").textContent = "menu";
    menu.classList.remove("active");
  }
});
