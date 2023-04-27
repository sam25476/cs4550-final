import React from "react";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    return (
        <div className="list-group">
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house"></i>
                <span className="d-none d-xl-inline"> Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'login'?'active':''}`}
            href={'/login'}>
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="d-none d-xl-inline"> Login</span>
            </a>
            <a className={`list-group-item
                    ${active === 'labs'?'active':''}`}
               href={'/profile'}>
                <i className="bi bi-person"></i>
                <span className="d-none d-xl-inline"> Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'searcg'?'active':''}`}
               href={'/search'}>
                <i className="bi bi-search"></i>
                <span className="d-none d-xl-inline"> Search</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;