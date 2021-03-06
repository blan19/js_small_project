import React, { useEffect, useState } from 'react';

const Info = () => {
    const [ name, setName ] = useState('');
    const [ nickName, setNickName ] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };

    useEffect(() => {
        console.log("effect");
        console.log(name);

        return () => {
            console.log('clean up');
            console.log(name);
        };
    });

    return (
        <div>
            <input value={name} type="text" onChange={onChangeName}></input>
            <input value={nickName} type="text" onChange={onChangeNickName}></input>
            <div>
                <div>
                    <b>이름 : </b>{name}
                    </div>
                <div>
                    <b>닉네임 : </b>{nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;