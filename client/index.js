

// Function to handle form submission and create a new post
// Function to handle form submission and create a new post
function createPostHandler(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get values from the form inputs
    const imageUrl = document.getElementById('image-url').value;
    const description = document.getElementById('description').value;

    // Validate if both imageUrl and description are provided
    if (imageUrl.trim() === '' || description.trim() === '') {
        alert('Please provide both image URL and description.');
        return;
    }

    // Create a new post object with the data
    const postData = {
        imageUrl: imageUrl,
        description: description
    };

    // Make a POST request using Axios
    axios.post('http://localhost:3000/post-user', postData)
        .then(response => {
            // Assuming the API responds with the created post data
            const createdPostData = response.data;

            // Call a function to display the created post (you need to implement this function)
            displayCreatedPost(createdPostData);
        })
        .catch(error => {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        });

    // Clear the form inputs for the next post
    document.getElementById('image-url').value = '';
    document.getElementById('description').value = '';
}

// Function to display the created post (you need to implement this function)
function displayCreatedPost(postData) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Display the image
    const imageElement = document.createElement('img');
    imageElement.src = postData.imageUrl;
    imageElement.alt = 'Post Image';
    postElement.appendChild(imageElement);

    // Display the post description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = postData.description;
    postElement.appendChild(descriptionElement);

    // Display comment section (you can customize this as needed)
    const commentSection = document.createElement('div');
    commentSection.innerHTML = '<label for="comment">Comment:</label> <input type="text" name="comment" class="comment-input"> <button onclick="addComment(this)">Add Comment</button>';
    postElement.appendChild(commentSection);

    // Append the new post element to the postList div
    const postList = document.getElementById('postList');
    postList.appendChild(postElement);
}


// Function to add a comment to a post
function addComment(button) {
    const commentInput = button.previousElementSibling; // Get the input element for the comment
    const commentText = commentInput.value;

    // Validate if comment text is provided
    if (commentText.trim() === '') {
        alert('Please provide a comment.');
        return;
    }

    // Create a new comment element
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;

    // Append the comment element to the comment section of the post
    const commentSection = button.parentNode;
    commentSection.appendChild(commentElement);

    // Clear the comment input for the next comment
    commentInput.value = '';
}

// Fetch posts when the page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('http://localhost:3000/get-posts');
        const allPosts = response.data;

        // Display all fetched posts
        allPosts.forEach(post => {
            displayCreatedPost(post);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        
    }
});