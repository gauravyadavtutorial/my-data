document.addEventListener("DOMContentLoaded", loadPosts);

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

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts();
}
