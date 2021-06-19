import React from 'react';
import '../../style/Insert.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Insert = () => {
    return (
        <form className="Insert">
            <input placeholder="ToDo-List를 입력해보세요"></input>
            <button>
                <AiOutlinePlusCircle />
            </button>
        </form>
    );
};

export default Insert;