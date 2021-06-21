import React, { useRef, useState } from 'react';

const UserList = () => {

    const [ users, setUsers ] = useState([
        {
            id: 0,
            name: '',
            email: '',
        }
    ])

    const [ input, setInput ] = useState({
        name: '',
        email: '',
    });

    const { name, email } = input;

    const nextId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const onClick = () => {
        const user = {
            id: nextId.current,
            ...input
        }
        setUsers([...users, user]);
        setInput({
            name: '',
            email: '',
        });
        nextId.current += 1;
    }

    const usersList = users.map((user) => {
        return <li key={user.id}>{user.name} {user.email}</li>
    })

    return (
        <div>
            <div>
                <input name="name" value={name} placeholder="이름" onChange={onChange}></input>
                <input name="email" value={email} placeholder="이메일" onChange={onChange}></input>
                <button onClick={onClick}>Submit</button>
            </div>

            <ul>
                {usersList}
            </ul>
        </div>
    );
};

export default UserList;