import React from 'react';
import '../../style/Items.scss';
import cn from 'classnames';
import { MdCheckBoxOutlineBlank,
     MdRemoveCircleOutline,
      MdCheckBox } from 'react-icons/md';

const Items = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="Items">
            <div className={cn('checkbox', { checked })} onClick={() => {onToggle(id)}}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>

            <button className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </button>
        </div>
    );
};

export default Items;