// Change Profile Picture
document.addEventListener("DOMContentLoaded", function () {
  const profilePic = document.getElementById("profilePic");
  const profileInput = document.getElementById("profileInput");

  profilePic.addEventListener("click", function () {
    profileInput.click();
  });

  profileInput.addEventListener("change", function () {
    const file = profileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.src = e.target.result;
        localStorage.setItem("profilePic", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Load saved profile picture
  if (localStorage.getItem("profilePic")) {
    profilePic.src = localStorage.getItem("profilePic");
  }
});

// Preview and Save Post
function previewImage() {
  const file = document.getElementById("uploadPic").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      sessionStorage.setItem("tempImg", e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function savePost() {
  const imageSrc = sessionStorage.getItem("tempImg");
  const description = document.getElementById("picDescription").value;

  if (imageSrc) {
    const postGallery = document.getElementById("postGallery");
    const newPost = document.createElement("div");
    newPost.classList.add("post");

    newPost.innerHTML = `
      <img src="${imageSrc}" alt="Uploaded Image">
      <p>${description}</p>
    `;

    postGallery.appendChild(newPost);

    // Clear input fields
    document.getElementById("uploadPic").value = "";
    document.getElementById("picDescription").value = "";
    sessionStorage.removeItem("tempImg");
  } else {
    alert("Please upload an image first!");
  }
}
