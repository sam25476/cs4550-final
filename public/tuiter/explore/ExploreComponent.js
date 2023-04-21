import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="input-group mb-2">
                <input type="text" class="form-control rounded-pill border-left-0" placeholder="Search Tuiter">
                    <span class="input-group-text rounded-pill border-0 wd-bg-black"><i class="fa-solid fa-gear wd-blue"></i></span>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                <a class="nav-link active text-dark" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
            <div class="wd-container">
            <img width="100%" src="../../images/starship.webp"/>
            <div class="wd-bottom-left-text wd-font-24">SpaceX's Starship</div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
