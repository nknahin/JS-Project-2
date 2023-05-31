// // dummy data
// const posts = [

//     {
//         title: "This is Title 1",
//         body: "This is body for first posts 1"
//     },
//     {
//         title: "This is Title 2",
//         body: "This is body for first posts 2" 
//     },
//     {
//         title: "This is Title 3",
//         body: "This is body for first posts 3"
//     },
//     {
//         title: "This is Title 4",
//         body: "This is body for first posts 4"
//     },
//     {
//         title: "This is Title 5",
//         body: "This is body for first posts 5"
//     },
//     {
//         title: "This is Title 6",
//         body: "This is body for first posts 6"
//     },
//     {
//         title: "This is Title 7",
//         body: "This is body for first posts 7"
//     },
//     {
//         title: "This is Title 8",
//         body: "This is body for first posts 8"
//     },
// ]

        // <div class="post">
        //     <h4 class="post-title">Posts Title 1</h4>
        //     <p class="post-body">Post Description 1</p>
        // </div>





// fetch data

const fetchData = async (config) =>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data is not fetched.");
    }
    
}







// selection

const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h4 class="post-title">${post.title} </h4>
            <p class="post-body"> ${post.body} </p>
        `;
        postsElement.appendChild(postElement);
    });
    
};


loadAllData();
