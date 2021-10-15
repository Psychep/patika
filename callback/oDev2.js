const posts = [
    { author: "Salih", title: "i love coding", context: "bla bla bla" },
    { author: "Salih", title: "i love coding", context: "bla bla bla" },
    { author: "Salih", title: "i love coding", context: "bla bla bla" }
]

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title)
    })
}

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    });

    return promise;
};
listPosts()
async function getPosts() {
    try {
        console.log("yeni post eklendi")
        await addPost({ author: "Salih", title: "i love coding2", context: "bla bla bla2" })
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

getPosts();
