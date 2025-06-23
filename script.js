// script.js
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  // Sample posts - just edit the /blog-posts folder to add more
  const blogPosts = [
    { title: "My First Blog Post", file: "blog-posts/post1.html" },
    { title: "Second Entry", file: "blog-posts/post2.html" }
  ];

  blogPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3><a href="${post.file}" target="_blank">${post.title}</a></h3>`;
    blogContainer.appendChild(postElement);
  });
});
