import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './CustomSlider.css';
import InputNumber from '../InputNumber/InputNumber';
import { withThousandSeparator } from '../../utils/number';

function CustomSlider({ minValue, maxValue, value, moneyFormat, onChange, title }) {
    return (
        <div className="section-slider-container">
            <div className="slider-header">
                <div className="slider-header-titulo">{title}</div>
                <InputNumber
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={(newValue) => onChange(newValue)}
                    moneyFormat={moneyFormat}
                />
            </div>
            <div className="slider-container">
                <Slider
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={e => {
                        onChange(e);
                    }}
                />
            </div>
            <div className="range-values-container">
                <div className="slider-range-value">
                    {moneyFormat === true
                        ? "$ " + withThousandSeparator(minValue)
                        : withThousandSeparator(minValue)
                    }
                </div>
                <div className="slider-range-value">
                    {moneyFormat === true
                        ? "$ " + withThousandSeparator(maxValue)
                        : withThousandSeparator(maxValue)
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomSlider;