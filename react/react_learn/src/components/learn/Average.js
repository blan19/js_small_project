import React, { useState, useMemo } from 'react';

const getAvergage = (list) => {
    console.log("퍙균값 계산중...");
    if (list.length === 0) {
        return 0;
    }

    const sum = list.reduce((a, c) => a + c);
    return sum / list.length;
};

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ input, setInput ] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        const tmpList = list.concat(parseInt(input));
        setList(tmpList);
        setInput('');
    };

    const onClear = () => {
        setList([]);
    }

    const inputList = list.map((list, index) => {
        return <li key={index}>{list}</li>
    })

    const avg = useMemo(() => getAvergage(list), [list]);

    return (
        <div>
            <input value={input} placeholder="숫자를 입력하세요" onChange={onChange}></input>
            <button onClick={onClick}>등록</button>
            <button onClick={onClear}>Clear</button>

            <ul>
                {inputList}
            </ul>

            <div>
                <b>평균: {avg}</b>
            </div>
        </div>
    );
};

export default Average;