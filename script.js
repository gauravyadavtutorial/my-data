// Function to preview the image before saving
function previewImage() {
  const file = document.getElementById('uploadPic').files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.createElement('img');
      preview.src = e.target.result;
      preview.classList.add('preview-img');
      document.body.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }
}

// Function to save the post
function savePost() {
  const file = document.getElementById('uploadPic').files[0];
  const description = document.getElementById('picDescription').value;

  if (!file || !description) {
    alert('Please upload a picture and add a description');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const postGallery = document.getElementById('postGallery');
    
    // Create a new post element
    const post = document.createElement('div');
    post.classList.add('post');
    
    // Create image element
    const img = document.createElement('img');
    img.src = e.target.result;
    post.appendChild(img);

    // Create description element
    const postDescription = document.createElement('p');
    postDescription.classList.add('post-description');
    postDescription.textContent = description;
    post.appendChild(postDescription);
    
    // Add the new post to the gallery
    postGallery.appendChild(post);

    // Save to localStorage
    saveToLocalStorage(img.src, description);

    // Clear the input fields after saving
    document.getElementById('uploadPic').value = '';
    document.getElementById('picDescription').value = '';
  };
  reader.readAsDataURL(file);
}

// Function to save post data to localStorage
function saveToLocalStorage(imageSrc, description) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ imageSrc, description });
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to load posts from localStorage
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const postGallery = document.getElementById('postGallery');
  
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const img = document.createElement('img');
    img.src = post.imageSrc;
    postElement.appendChild(img);

    const postDescription = document.createElement('p');
    postDescription.classList.add('post-description');
    postDescription.textContent = post.description;
    postElement.appendChild(postDescription);
    
    postGallery.appendChild(postElement);
  });
}

// Load posts from localStorage when the page loads
window.onload = loadPosts;
