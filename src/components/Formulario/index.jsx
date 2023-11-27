    import { useState } from "react";

    import styles from "./Formulario.module.css";

    const Formulario = () => {
    const [bodyWeigth, setBodyWeigth] = useState(0);
    const [bodyHeight, setBodyHeight] = useState(0);

    const calculaIndice = () => {
        if (Number(bodyWeigth) != 0 && Number(bodyHeight) != 0) {
        const indice = Number(bodyWeigth) / (Number(bodyHeight) / 100) ** 2;
        if (indice < 18.5) {
            return (
            <p className={styles.indexResult}>
                IMC: {indice.toFixed(1)} (Magreza)
            </p>
            );
        } else if (indice < 25) {
            return (
            <p className={styles.indexResult}>
                IMC: {indice.toFixed(1)} (Normal)
            </p>
            );
        } else if (indice < 30) {
            return (
            <p className={styles.indexResult}>
                IMC: {indice.toFixed(1)} (Sobrepeso)
            </p>
            );
        } else if (indice < 40) {
            return (
            <p className={styles.indexResult}>
                IMC: {indice.toFixed(1)} (Obesidade)
            </p>
            );
        } else {
            return (
            <p className={styles.indexResult}>
                IMC: {indice.toFixed(1)} (Obesidade grave)
            </p>
            );
        }
        } else {
        <p>Informe os valores para cálculo</p>;
        }
    };

    return (
        <>
        <div className="container">
            <h1>Calculadora de IMC com React</h1>
            <form onSubmit={(evento) => evento.preventDefault()}>
            <label htmlFor="altura">Altura (cm)</label>
            <input
                className={styles.inputValue}
                type="number"
                placeholder="Ex: 165"
                min={0}
                onChange={({ target }) => setBodyHeight(Number(target.value))}
            />
            <label htmlFor="">Peso (kg)</label>
            <input
                className={styles.inputValue}
                type="number"
                placeholder="Ex: 80"
                min={0}
                onChange={({ target }) => setBodyWeigth(Number(target.value))}
            />
            {calculaIndice()}
            </form>
        </div>
        </>
    );
    };

    export default Formulario;
