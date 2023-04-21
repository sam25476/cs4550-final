import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
       return (`
        <ul class="list-group">
            ${
           who.map(w => {
                  return WhoToFollowListItem(w);
           }).join('')
       }
        </ul>
    `)
}
export default WhoToFollowList;