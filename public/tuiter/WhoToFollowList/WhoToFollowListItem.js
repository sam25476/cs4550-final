const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
                <div class="row align-items-center justify-content-xl-around">
                    <div>
                        <img width="50px" height="50px" class="rounded-circle" src=${who.avatarIcon}/>
                    </div>
                    <div class="col-6">
                        <div class="fw-bold wd-font-white-12">${who.userName}</div>
                        <div class="wd-font-white-12">@${who.handle}</div>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
    </li>
    `)
}

export default WhoToFollowListItem;