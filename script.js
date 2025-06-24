const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzqaO75c5mTwEXPtwDhd_2NCs1ABKNQ4txFfk9HY6eu-RJiGZOvRRQLZjV9X-Ic9w0C1A/exec';

document.getElementById("blog-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) return;

  const response = await fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    alert("Post submitted!");
    document.getElementById("blog-form").reset();
    loadBlogPosts();
  } else {
    alert("Something went wrong. Try again.");
  }
});

async function loadBlogPosts() {
  const container = document.getElementById("blog-container");
  container.innerHTML = "Loading...";
  const res = await fetch(SHEET_URL);
  const posts = await res.json();
  container.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>${new Date(post.timestamp).toLocaleString()}</small><hr/>`;
    container.appendChild(div);
  });
}

loadBlogPosts();
