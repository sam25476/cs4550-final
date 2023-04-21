import React from "react";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
                <span className="d-none d-xl-inline"> Tuiter</span>
            </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house"></i>
                <span className="d-none d-xl-inline"> Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}
            href={'/test'}>
                <i className="bi bi-hash"></i>
                <span className="d-none d-xl-inline"> Explore</span>
            </a>
            <a className={`list-group-item
                    ${active === 'labs'?'active':''}`}>
                <i className="bi bi-asterisk"></i>
                <span className="d-none d-xl-inline"> Labs</span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"></i>
                <span className="d-none d-xl-inline"> Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope"></i>
                <span className="d-none d-xl-inline"> Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"></i>
                <span className="d-none d-xl-inline"> Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-list"></i>
                <span className="d-none d-xl-inline"> Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i>
                <span className="d-none d-xl-inline"> Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span className="d-none d-xl-inline"> More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;