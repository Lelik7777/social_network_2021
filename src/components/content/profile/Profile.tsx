import React from 'react';

export function Profile() {
    return (
        <div className="profile">
            <div>
                <img
                    src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o="
                    alt="sea"/>
            </div>
            <div>
                ava+description
                <div className="posts">
                    My posts
                    <div className="post">Post1</div>
                    <div className="post">Post2</div>
                </div>
            </div>
        </div>
    );
}