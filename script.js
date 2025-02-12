document.addEventListener("DOMContentLoaded", function () {
    loadProfilePic();
    loadPosts();
});

// ✅ Profile Picture Upload & Save to LocalStorage
document.getElementById("profileUpload").addEventListener("change", function (event) {
    let file = event.target.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let profilePicUrl = e.target.result;
            localStorage.setItem("profilePic", profilePicUrl);
            document.getElementById("profilePic").src = profilePicUrl;
        };
        reader.readAsDataURL(file);
    }
});

function loadProfilePic() {
    let savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
    }
}

// ✅ Add New Post (Text + Image) & Save to LocalStorage
function addPost() {
    let caption = document.getElementById("caption").value;
    let imageInput = document.getElementById("imageUpload").files[0];

    if (!caption || !imageInput) {
        alert("Please add both an image and a caption!");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        let imageUrl = e.target.result;

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ caption, imageUrl });

        localStorage.setItem("posts", JSON.stringify(posts));

        loadPosts();
    };

    reader.readAsDataURL(imageInput);
}

// ✅ Load Posts from LocalStorage & Display in Grid
function loadPosts() {
    let postGrid = document.getElementById("postGrid");
    postGrid.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        let postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <button class="delete-btn" onclick="deletePost(${index})">X</button>
            <img src="${post.imageUrl}" alt="Post Image">
            <p>${post.caption}</p>
        `;

        postGrid.appendChild(postElement);
    });
}

// ✅ Delete Post from LocalStorage
function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts();
}
