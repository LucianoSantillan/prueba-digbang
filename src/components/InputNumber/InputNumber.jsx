import './InputNumber.css';
import { isANumber, withThousandSeparator } from "../../utils/number";
import RcNumber from 'rc-input-number';

function InputNumber({ min, max, value, moneyFormat, onChange }) {
    return (
        <RcNumber
            min={min}
            max={max}
            value={value}
            onChange={newValue => {
                if (!isANumber(newValue)) {
                    newValue = min;
                }
                onChange(newValue);
            }}
            formatter={(value) => {
                return moneyFormat === true
                    ? "$ " + withThousandSeparator(value)
                    : withThousandSeparator(value)
            }}
            parser={(value) => value.replace(".", "").replace("$", "").replace(" ", "")}
        />
    )
}

export default InputNumber;