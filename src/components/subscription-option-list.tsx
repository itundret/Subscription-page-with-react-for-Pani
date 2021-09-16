import Checkbox from "./subscription-checkbox";
interface IProps {
    options?: any[];
    selectedOptions?: any;
    onChange: Function;
    addPrice: (price: number) => void;
    subPrice: (price: number) => void;
}

const OptionsList = ({ options, onChange, selectedOptions, addPrice, subPrice }: IProps) => {
    const handleCheckboxClicked = (selectedOption: any) => {
        let selectedOptionId = selectedOption.id;
        let cloneSelectedOptions = Object.assign({}, selectedOptions);
        // is currently selected
        if (cloneSelectedOptions[selectedOptionId]) {
            // remove selected key from options list
            delete cloneSelectedOptions[selectedOptionId];
            if (typeof selectedOption.price === 'number') subPrice(selectedOption.price);
        } else { // is not currently selected
            // Add selected key to optionsList
            cloneSelectedOptions[selectedOptionId] = {}
            if (typeof selectedOption.price === 'number') addPrice(selectedOption.price);
        }
        // call onChange function given by parent
        onChange(cloneSelectedOptions)
    }

    const handleSubOptionsListChange = (optionId: any, subSelections: any) => {
        // add sub selections to current optionId
        let cloneSelectedOptions = Object.assign({}, selectedOptions);

        cloneSelectedOptions[optionId] = subSelections;
        // call onChange function given by parent
        onChange(cloneSelectedOptions);
    }

    return (
        <div>
            {Array.isArray(options) && options.map((option,m) => (
                <ul key={m}>
                    <Checkbox
                        selected={selectedOptions[option.id]}
                        label={option.name} 
                        price={option.price} 
                        onChange={() => { handleCheckboxClicked(option) }}
                    />
                    {/* Base Case */}
                    {(option.subOptions.length > 0 && selectedOptions[option.id]) &&
                        <OptionsList
                            options={option.subOptions}
                            selectedOptions={selectedOptions[option.id]}
                            onChange={(subSelections: any) => handleSubOptionsListChange(option.id, subSelections)}
                            addPrice={addPrice}
                            subPrice={subPrice}
                        />
                    }
                </ul>
            ))}
        </div>
    )
}

export default OptionsList;