document.addEventListener("DOMContentLoaded", function () {
    function createPostElement(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.classList.add(post.tag);
        const postDate = new Date(post.date);
        const formattedDate = `${postDate.getDate().toString().padStart(2, '0')}/${(postDate.getMonth() + 1).toString().padStart(2, '0')}/${postDate.getFullYear()}`;
        let anchorElement = ''; // Initialize an empty string for the anchor element
        if (post.url) { // Check if the 'url' property is present
            anchorElement = `<a class="link-header" href="${post.url}">Read the full article</a>`;
        }
        postElement.innerHTML = `
            <h2>${post.title} <time datetime="${post.date}">${formattedDate}</time></h2>
            ${anchorElement} <!-- Insert the anchor element here -->
            ${post.content.map(paragraph => `<p>${paragraph}</p>`).join('')}`; // Paragraphs are appended after anchor element
        return postElement;
    }

    function loadPosts() {
        const postsContainer = document.getElementById("posts-container");

        posts.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
    }

    loadPosts();
});