// Blog form functionality: Save and display blogs in localStorage

document.addEventListener('DOMContentLoaded', function () {
  const blogForm = document.getElementById('blog-form');
  const blogContainer = document.getElementById('blog-container');

  // Load blogs from localStorage
  function loadBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    blogContainer.innerHTML = '';
    blogs.reverse().forEach(blog => {
      const blogDiv = document.createElement('div');
      blogDiv.className = 'blog-post';
      blogDiv.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
      blogContainer.appendChild(blogDiv);
    });
  }

  // Handle blog form submission
  if (blogForm) {
    blogForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
      if (title && content) {
        const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs.push({ title, content });
        localStorage.setItem('blogs', JSON.stringify(blogs));
        blogForm.reset();
        loadBlogs();
      }
    });
  }

  loadBlogs();
});