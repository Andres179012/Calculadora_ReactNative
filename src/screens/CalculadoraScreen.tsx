import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    borrar,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.historial}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc text="Del" color="#9B9B9B" action={borrar} />
        <BotonCalc text="/" color="#ff9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" action={armarNumero} />
        <BotonCalc text="8" action={armarNumero} />
        <BotonCalc text="9" action={armarNumero} />
        <BotonCalc text="X" color="#ff9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" action={armarNumero} />
        <BotonCalc text="5" action={armarNumero} />
        <BotonCalc text="6" action={armarNumero} />
        <BotonCalc text="-" color="#ff9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" action={armarNumero} />
        <BotonCalc text="2" action={armarNumero} />
        <BotonCalc text="3" action={armarNumero} />
        <BotonCalc text="+" color="#ff9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho action={armarNumero} />
        <BotonCalc text="." action={armarNumero} />
        <BotonCalc text="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
