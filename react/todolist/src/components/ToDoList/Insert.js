import React, { useCallback, useState } from 'react';
import '../../style/Insert.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Insert = ({ onInsert }) => {
    const [ value, setValue ] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form onSubmit={onSubmit} className="Insert">
            <input value={value} onChange={onChange} placeholder="ToDo-List를 입력해보세요"></input>
            <button type="submit">
                <AiOutlinePlusCircle />
            </button>
        </form>
    );
};

export default Insert;