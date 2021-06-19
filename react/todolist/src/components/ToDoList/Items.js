import React from 'react';
import '../../style/Items.scss';
import { MdCheckBoxOutlineBlank,
     MdRemoveCircleOutline,
      MdCheckBox } from 'react-icons/md';

const Items = () => {
    return (
        <div className="Items">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">할 일</div>
            </div>

            <button className="remove">
                <MdRemoveCircleOutline />
            </button>
        </div>
    );
};

export default Items;