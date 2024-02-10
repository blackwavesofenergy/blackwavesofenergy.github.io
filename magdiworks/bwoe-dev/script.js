document.addEventListener("DOMContentLoaded", function () {
    function createPostElement(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.classList.add(post.tag);
        const postDate = new Date(post.date); // Convert date string to a Date object
        const formattedDate = `${postDate.getDate().toString().padStart(2, '0')}/${(postDate.getMonth() + 1).toString().padStart(2, '0')}/${postDate.getFullYear()}`;
        postElement.innerHTML = `
            <h2>${post.title} <time datetime="${post.date}">${formattedDate}</time></h2> <!-- Add time element with formatted date -->
            ${post.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
        `;
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