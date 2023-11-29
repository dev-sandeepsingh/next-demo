'use client'

import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "@/app/redux/slice";

export default function DisplayUsers() {
    const userData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    return  (
        <div>
            <h3>User List</h3>
            {
                userData.map((user) => (
                    <div key={user.id}>
                        <span>{user.name}</span>
                        <button onClick={()=>dispatch(removeUser(user.id))}>Delete</button>
                    </div>
                ))
            }
        </div>)
}