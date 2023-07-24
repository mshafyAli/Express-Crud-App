

window.createPost = function () {

    let postTitle = document.querySelector("#post-title").value;
    let postText = document.querySelector("#post-text").value;

    //baseUrl/api/v1/post
    axios.post('/post', {
        title: postTitle,
        text: postText
    })
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector('#result').innerHTML = response.data;
            getAllPost();

        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").innerHTML = "Error in post Submission"
        })
}

// window.getAllPost = function () {
//     // baseUrl/api/v1/post
//     axios.get(`/posts`)
//         .then(function (response) {
//             console.log(response.data);

//             document.querySelector("#posts").innerHTML = JSON.stringify(response.data);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error.data);
//             document.querySelector("#result").innerHTML = "error in post submission"
//         })


// }


window.getAllPost = function () {
    axios
        .get("/posts")
        .then(function (response) {
            console.log(response.data);
            let postsHtml = "";

            // Generate HTML for each post
            response.data.forEach(function (post) {
                postsHtml += `
            <div>
              <p>ID:${post.id}</p>
              <p>Title:${post.title}</p>
              <p>Text:${post.text}</p>
              <button onclick="editPost('${post.id}')">Edit</button>
              <button onclick="deletePost('${post.id}')">Delete</button>
            </div> 
          `;
            });

            // Update the posts section with the generated HTML
            document.querySelector("#posts").innerHTML = postsHtml;
        })
        .catch(function (error) {
            console.log(error.data);
            document.querySelector("#result").innerHTML = "Error in fetching posts";
        });
};
getAllPost();
window.editPost = function(postId) {
    // Get the post data from the user
    let postTitle = prompt("Enter new post title:");
    let postText = prompt("Enter new post text:");
  
    // Check if the user provided valid input
    if (postTitle === null || postTitle.trim() === "" || postText === null || postText.trim() === "") {
      console.log("Invalid input. Post title and text cannot be empty.");
      document.querySelector("#result").innerHTML = "Invalid input. Post title and text cannot be empty.";
      return;
    }
  
    // Update the post with the given ID
    axios
      .put(`/post/${postId}`, {
        title: postTitle,
        text: postText,
      })
      .then(function(response) {
        console.log(response.data);
        document.querySelector("#result").innerHTML = response.data;
  
        // Show the success message in a prompt
        alert("Post updated successfully");
  
        // Fetch and display all posts after the update
        getAllPost();
      })
      .catch(function(error) {
        console.log(error.data);
        document.querySelector("#result").innerHTML = "Error in updating post";
      });
  };

  window.deletePost = function(postId) {
    // Confirm with the user before deleting the post
    if (confirm("Are you sure you want to delete this post?")) {
      // Delete the post with the given ID
      axios
        .delete(`/post/${postId}`)
        .then(function(response) {
          console.log(response.data);
  
          // Show the success message in an alert box
          alert("Post deleted successfully");
  
          // Fetch and display all posts after the delete
          getAllPost();
        })
        .catch(function(error) {
          console.log(error.data);
          document.querySelector("#result").innerHTML = "Error in deleting post";
        });
    }
  };
  getAllPost();