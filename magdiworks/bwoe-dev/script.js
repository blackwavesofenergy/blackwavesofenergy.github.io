document.addEventListener("DOMContentLoaded", function () {
    function createPostElement(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.classList.add(post.tag);
        postElement.innerHTML = `
            <h2>${post.title}</h2>
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

/* Filter tags on links
    function showTagGame() {
        console.log("showTagGame function called");
        document.querySelector(".tag-game").style.display = "block";
        document.querySelector(".tag-internet").style.display = "none";
        document.querySelector(".tag-photo").style.display = "none";
        document.querySelector(".tag-other").style.display = "none";
    }

    function showTagInternet() {
        document.querySelector(".tag-game").style.display = "none";
        document.querySelector(".tag-internet").style.display = "block";
        document.querySelector(".tag-photo").style.display = "none";
        document.querySelector(".tag-other").style.display = "none";
    }

    function showTagPhoto() {
        document.querySelector(".tag-game").style.display = "none";
        document.querySelector(".tag-internet").style.display = "none";
        document.querySelector(".tag-photo").style.display = "block";
        document.querySelector(".tag-other").style.display = "none";
    }

    function showTagOther() {
        document.querySelector(".tag-game").style.display = "none";
        document.querySelector(".tag-internet").style.display = "none";
        document.querySelector(".tag-photo").style.display = "none";
        document.querySelector(".tag-other").style.display = "block";
    } */