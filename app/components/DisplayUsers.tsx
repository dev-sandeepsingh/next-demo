'use client'

import {useSelector} from "react-redux";

export default function DisplayUsers() {
    const userData = useSelector((state) => state.users);
    return  (
        <div>
            <h3>User List</h3>
            {
                userData.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>)
}