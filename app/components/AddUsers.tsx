'use client'

import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "@/app/redux/slice";

export default function AddUsers() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const userDispatch = () => {
        dispatch(addUser(name));
    }

    return  (
        <div>
            <h3>Add User</h3>
            <input type="text"
            onChange={(e) => setName(e.target.value)}
                   placeholder="Add New User"
            />
            <button onClick={userDispatch}>Add</button>
        </div>)
}