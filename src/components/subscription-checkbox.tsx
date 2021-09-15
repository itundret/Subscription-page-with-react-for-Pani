import React, { useState } from "react";
import clsx from 'clsx';
interface IProps {
    selected?: boolean;
    label?: string;
    price?: string;
    onChange: Function;
}

const Checkbox = ({ selected, label, price, onChange }: IProps) => {
    return (
        <div className="checkbox">
            <div
                className={clsx('fa', 'fa-2x', 'checkbox__icon', selected ? 'fa-check-square' : 'fa-square')}
                onClick={() => {
                    console.log(!selected)
                    onChange(!selected)
                }}
            />
            <div className="checkbox__label">{label}{price?`(${price})`:' ( - ) '}</div>
        </div>
    )
}

export default Checkbox;