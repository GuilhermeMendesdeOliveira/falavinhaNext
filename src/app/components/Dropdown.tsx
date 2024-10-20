
import {useState} from "react";

export interface DropdownProps {
    label: string
    options: any[];
    onSelect: (value: any) => void;
}

const Dropdown = (props: DropdownProps) => {

    const [selectedOption, setSelectedOption] = useState<string | number>('')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        props.onSelect(value)
    }

    return(
        <div>
            <label className="flex justify-start">{props.label}</label>
            
            <select value={selectedOption} onChange={handleChange} className="mt-1 w-full rounded-md h-10 text-black">
                {props.options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown