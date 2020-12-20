import './CreditSimulator.css';
import { useState } from 'react';
import { withThousandSeparator } from '../../utils/number';
import CustomSlider from '../CustomSlider/CustomSlider';
import Button from '../Button/Button';

const minMontoTotal = 5000;

const minPlazo = 3;

function CreditSimulator() {

    const [montoTotal, setMontoTotal] = useState(minMontoTotal);

    const [plazo, setPlazo] = useState(minPlazo);

    let cuotaFija = (montoTotal / plazo).toFixed(2);
    cuotaFija = cuotaFija.replace(".", ",");
    cuotaFija = withThousandSeparator(cuotaFija);

    return (
        <div className={"container"}>
            <div className="titulo-formulario">Simulá tu crédito</div>
            <CustomSlider
                title={"PLAZO"}
                maxValue={24}
                minValue={3}
                onChange={(value) => setPlazo(value)}
                value={plazo}
            />
            <CustomSlider
                title={"MONTO TOTAL"}
                maxValue={50000}
                minValue={5000}
                onChange={(value) => setMontoTotal(value)}
                value={montoTotal}
                moneyFormat={true}
            />
            <div style={{ width: "100%", alignSelf: "center", margin: "5px 0" }}>
                <div className="footer-formulario">
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>CUOTA FIJA POR MES</div>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>${cuotaFija}</div>
                </div>
                <div style={{ display: "flex" }}>
                    <Button style={{ width: "70%", marginRight: "6px", backgroundColor: "#17aa8d" }}>
                        OBTENÉ TU CRÉDITO
                    </Button>
                    <Button style={{ width: "30%", fontSize: "10px" }}>
                        VER DETALLE DE CUOTAS
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreditSimulator;