import Checkbox from "./subscription-checkbox";
interface IProps {
    options?: any[];
    selectedOptions?: any;
    onChange: Function;
    getPrice?: (price: string) => void;
}

const OptionsList = ({ options, onChange, selectedOptions, getPrice }: IProps) => {
    const handleCheckboxClicked = (selectedOption: any) => {
        let selectedOptionId = selectedOption.id;
        if (typeof getPrice === 'function') {
            getPrice(selectedOption.price);
        }
        let cloneSelectedOptions = Object.assign({}, selectedOptions);
        // is currently selected
        if (cloneSelectedOptions[selectedOptionId]) {
            // remove selected key from options list
            delete cloneSelectedOptions[selectedOptionId];
        } else { // is not currently selected
            // Add selected key to optionsList
            cloneSelectedOptions[selectedOptionId] = {}
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
                            getPrice={getPrice}
                        />
                    }
                </ul>
            ))}
        </div>
    )
}

export default OptionsList;