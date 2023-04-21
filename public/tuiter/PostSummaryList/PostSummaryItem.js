const PostSummaryItem = (post) => {
    return (`
     <div class="border rounded row">
            <div class="col-10">
                <div class="wd-font-12">${post.topic}</div>
                <div>
                    <span class="fw-bold wd-font-white-12">${post.userName}</span>
                    <span class="wd-font-12"> - ${post.time}</span>
                </div>
                <div class="fw-bold wd-font-white-12">${post.title}</div>
            </div>
            <div class="col-2">
                <img class="wd-explore-post-img rounded" src=${post.image}/>
            </div>
        </div>
    `)
}

export default PostSummaryItem