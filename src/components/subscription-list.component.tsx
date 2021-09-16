import { Component, ChangeEvent } from "react";
import React, { useState } from "react";
import OptionsList from "./subscription-option-list";
import dummyData from '../demo-data.json'
import '../styles/option-list.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
type Props = {};

interface IProps {

};

const SubscriptionList: React.FC<IProps> = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [price, setPrice] = useState(0);
    return (
        <div className="list row text-center">
            <div className="col-md-12 mt-5">
                <h2>Subscribe Preference</h2>
                <div className="optionWrapper">
                    <OptionsList
                        options={dummyData}
                        onChange={(selectedOptions: any) => {
                            setSelectedOptions(selectedOptions)
                        }}
                        selectedOptions={selectedOptions}
                        addPrice={(p: number) => setPrice(price + p)}
                        subPrice={(p: number) => setPrice(price - p)}
                    />
                </div>
                <div>
                    
                    <button className="m-3 btn btn-sm btn-danger w-25">Pay {price?`($ ${price} / mo )`:''}</button>
                </div>    
            </div>
        </div>
    );
}

export default SubscriptionList;
