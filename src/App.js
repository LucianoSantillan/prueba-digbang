import './App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import InputNumber from 'rc-input-number';
import { isANumber, withThousandSeparator } from './utils/number';

function App() {

  const minMontoTotal = 5000;

  const minPlazo = 3;

  const [montoTotal, setMontoTotal] = useState(minMontoTotal);

  const [plazo, setPlazo] = useState(minPlazo);

  let cuotaFija = (montoTotal / plazo).toFixed(2);
  cuotaFija = cuotaFija.replace(".", ",");
  cuotaFija = withThousandSeparator(cuotaFija);

  return (
    <div className="App bg-gradient">

      <div style={{ backgroundColor: "#003b67", width: "300px", alignSelf: "center", padding: 30, margin: "10px" }}>

        <div className="titulo-formulario">Simulá tu crédito</div>

        {montoTotalHTML()}

        {plazoHTML()}

        <div style={{ width: "100%", alignSelf: "center", margin: "5px 0" }}>
          <div className="footer-formulario">
            <div style={{fontSize:"12px", fontWeight: "bold"}}>CUOTA FIJA POR MES</div>
            <div style={{fontSize: "20px", fontWeight: "bold"}}>${cuotaFija}</div>
          </div>
          <div style={{ display: "flex" }}>
            <button style={{ width: "70%", marginRight: "6px", background:"#17aa8d", fontWeight:"bold", padding: "5px 0px", border: 0, color:"white"}}>OBTENÉ TU CRÉDITO</button>
            <button style={{ backgroundColor: "#0b548b", width: "30%", fontSize:"10px", fontWeight:"bold", padding: "5px 5px", border: 0, color:"white" }}>VER DETALLE DE CUOTAS</button>
          </div>
        </div>

      </div>

    </div>
  );

  function montoTotalHTML() {
    const max = 50000;
    return <div className="section-slider-container">

      <div className="slider-header">
        <div className="slider-header-titulo">MONTO TOTAL</div>
        <InputNumber
          min={minMontoTotal}
          max={max}
          value={montoTotal}
          onChange={newValue => {
            if (!isANumber(newValue)) {
              setMontoTotal(montoTotal);
            }
            else if (newValue === "" || newValue === null) {
              newValue = minMontoTotal;
            }
            else {
              setMontoTotal(parseInt(newValue))
            }
          }}
          formatter={(value) => `$ ${withThousandSeparator(value)}`}
          parser={(value) => value.replace(".", "").replace("$", "").replace(" ", "")}
        />
      </div>
      <div className="slider-container">
        <Slider
          min={minMontoTotal}
          max={max}
          value={montoTotal}
          onChange={newValue => {
            setMontoTotal(newValue.toString())
          }}
        />
      </div>
      <div className="range-values-container">
        <div className="slider-range-value">${withThousandSeparator(minMontoTotal)}</div>
        <div className="slider-range-value">${withThousandSeparator(max)}</div>
      </div>

    </div>;
  }

  function plazoHTML() {
    const max = 24;
    return <div className="section-slider-container">

      <div className="slider-header">
        <div className="slider-header-titulo">PLAZO</div>
        <InputNumber
          min={minPlazo}
          max={max}
          value={plazo}
          onChange={newValue => {
            if (newValue === "" || newValue === null) {
              newValue = minPlazo;
            }
            setPlazo(parseInt(newValue))
          }}
        />
      </div>
      <div className="slider-container">
        <Slider
          min={minPlazo}
          max={max}
          value={plazo}
          onChange={e => {
            setPlazo(e.toString())
          }} />
      </div>
      <div className="range-values-container">
        <div className="slider-range-value">{minPlazo}</div>
        <div className="slider-range-value">{max}</div>
      </div>

    </div>;
  }

}

export default App;
