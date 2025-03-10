import React from 'react';
import users from '/data/users.json'

export function UserList() {
    const User = users.map((user) => {
        return (
            <a className='showcaseLogo' href={user.infolink} target="_blank" key={user.caption}>
                <img src={"/img/" + user.image} title={user.caption} />
            </a>
        );
    });
    return (
        <div className="showcaseLogos">
            {User}
        </div>
    )
}