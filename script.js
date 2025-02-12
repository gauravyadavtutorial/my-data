* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 60%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-info h1 {
  font-size: 24px;
  margin-bottom: 5px;
}

.profile-info p {
  color: #555;
}

.upload-section {
  margin-bottom: 30px;
}

.upload-section h2 {
  font-size: 22px;
  margin-bottom: 15px;
}

#uploadPic {
  display: block;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.posts h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

.post-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.post {
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
}

.post img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.post-description {
  padding: 10px;
  font-size: 14px;
  color: #333;
}
