// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
    const element = e.currentTarget;
    element.classList.toggle("active");
  }
  
  // Selects and HTML element, and calls a function which will be executed when the element is clicked.
  for (let i = 1; i <= 5; i++) {
  const sectionElement = document.getElementById("section" + i);
  sectionElement.addEventListener("click", toggle);}




  //Get information from JSON and create new divs
  const accordion = document.querySelector(".accordion");async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((posts) => {
      const postsEl = document.createElement("div");
      postsEl.setAttribute("class", "section");
      postsEl.innerHTML = `<h2><i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-down"></i> ${posts.title}</h2>`;
      postsEl.addEventListener("click", toggle);
      accordion.appendChild(postsEl);    const postBody = document.createElement("div");
      postBody.setAttribute("class", "description");
      postBody.innerHTML = `<p>${posts.body}</p>`;
      postsEl.appendChild(postBody);
    });
  }
  getPosts();


  