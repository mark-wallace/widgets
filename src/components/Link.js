import React from "react";

//Link component prevents full page reloads when an anchor is clicked.
//creates an event which will tell the Route component to re-render.
const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a href={href} className={className} onClick={onClick}>{children}</a>
    )
};

export default Link;
