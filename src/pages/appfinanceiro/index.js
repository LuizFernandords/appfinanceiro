import React, {Component, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/styles.js'
import { useNavigation } from '@react-navigation/native'
import CandidatosData from '../../data/candidatos.json'
import { getpercentual } from '../../utils/util.js';

export default function DeputadoEstadualOne(){
  
  const [totdespesas, setdespesas] = useState(0);
  const [totreceitas, setreceitas] = useState(0);
  const [totsobrou, setsobrou] = useState(0);
  const [gastoalimentacao, setgastoalimentacao] = useState(0);
  const [gastoaluguel, setgastoaluguel] = useState(0);
  const [gastoagua, setgastoagua] = useState(0);
  const [gastoluz, setgastoluz] = useState(0);
  const [gastointernet, setgastointernet] = useState(0);
  const [gastogasolina, setgastogasolina] = useState(0);
  const [gastocontas, setgastocontas] = useState(0);
  const [gastofaculdade, setgastofaculdade] = useState(0);
  const [gastooutras, setgastooutra] = useState(0);
  const [porcgastoalimentacao, setporcgastoalimentacao] = useState(0);
  const [porcgastoaluguel, setporcgastoaluguel] = useState(0);
  const [porcgastoagua, setporcgastoagua] = useState(0);
  const [porcgastoluz, setporcgastoluz] = useState(0);
  const [porcgastointernet, setporcgastointernet] = useState(0);
  const [porcgastogasolina, setporcgastogasolina] = useState(0);
  const [porcgastocontas, setporcgastocontas] = useState(0);
  const [porcgastofaculdade, setporcgastofaculdade] = useState(0);
  const [porcgastooutras, setporcgastooutra] = useState(0);
  const [salario, setsalario] = useState(0);
  const [vale, setvale] = useState(0);
  const [outrasreceitas, setoutrasreceitas] = useState(0);
  

  function somaResultado(){
    setdespesas(parseInt(gastoalimentacao)+parseInt(gastoaluguel)+parseInt(gastoagua)+parseInt(gastoluz)+parseInt(gastointernet)+parseInt(gastogasolina)+parseInt(gastocontas)+parseInt(gastofaculdade)+parseInt(gastooutras))
    setreceitas(parseInt(salario)+parseInt(vale)+parseInt(outrasreceitas))
    setsobrou(parseInt(totreceitas)-parseInt(totdespesas))
    setporcgastoalimentacao(getpercentual(gastoalimentacao, totdespesas))
    setporcgastoaluguel(getpercentual(gastoaluguel, totdespesas))
    setporcgastoagua(getpercentual(gastoagua, totdespesas))
    setporcgastoluz(getpercentual(gastoluz, totdespesas))
    setporcgastointernet(getpercentual(gastointernet, totdespesas))
    setporcgastogasolina(getpercentual(gastogasolina, totdespesas))
    setporcgastocontas(getpercentual(gastocontas, totdespesas))
    setporcgastofaculdade(getpercentual(gastofaculdade, totdespesas))
    setporcgastooutra(getpercentual(gastooutras, totdespesas))
  }

  
    return (
      
      <View style={styles.container}>
      <Text style={styles.textHeader}>Despesas</Text>
      <View style={styles.groupInput}>
        
        <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Alimentação"
          value={gastoalimentacao}
          onChangeText={text=> text == '' ? setgastoalimentacao(0) : setgastoalimentacao(text)}
       />    

        <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Aluguel"
          value={gastoaluguel}
          onChangeText={text=> text == '' ? setgastoaluguel(0) : setgastoaluguel(text)}
       />   

      <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Água"
          value={gastoagua}
          onChangeText={text=> text == '' ? setgastoagua(0) : setgastoagua(text)}
       />  

      <TextInput
         style={styles.input1}
         maxLength={5}
         keyboardType='numeric'
         placeholder="R$ Luz"
         value={gastoluz}
         onChangeText={text=> text == '' ? setgastoluz(0) : setgastoluz(text)}
       />  

     <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder='R$ Internet'
          value={gastointernet}
          onChangeText={text=> text == '' ? setgastointernet(0) : setgastointernet(text)}
       />  

     <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Gasolina"
          value={gastogasolina}
          onChangeText={text=> text == '' ? setgastogasolina(0) : setgastogasolina(text)}
       />  

     <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Contas"
          value={gastocontas}
          onChangeText={text=> text == '' ? setgastocontas(0) : setgastocontas(text)}
       />  

     <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Faculdade"
          value={gastofaculdade}
          onChangeText={text=> text == '' ? setgastofaculdade(0) : setgastofaculdade(text)}
       />  

     <TextInput
          style={styles.input1}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Outras despesas"
          value={gastooutras}
          onChangeText={text=> text == '' ? setgastooutra(0) : setgastooutra(text)}
       />  
      </View>

     
      <Text style={styles.textHeader2}>Receitas</Text>
      <View style={styles.groupInput2}>
      
      
        <TextInput
          style={styles.input2}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Salário"
          value={salario}
          onChangeText={text=> text == '' ? setsalario(0) : setsalario(text)}
        />   

        <TextInput 
          style={styles.input2}
          maxLength={5}
          keyboardType='numeric'
          placeholder="R$ Vale"
          value={vale}
          onChangeText={text=> text == '' ? setvale(0) : setvale(text)}
        />   

        <TextInput
          style={styles.input2}
          maxLength={5}
          keyboardType='numeric'
          value={outrasreceitas}
          placeholder="R$ Outras receitas"
          onChangeText={text=> text == '' ? setoutrasreceitas(0) : setoutrasreceitas(text)}
        />  

      <Text style={styles.textResultado}>Total de despesas: R$ {totdespesas}</Text> 
      <Text style={styles.textResultado}>Total de Receitas: R$ {totreceitas}</Text>
      <Text style={styles.textResultado}>Sobrou: R$ {totsobrou}</Text>
      <Text style={styles.textResultado}>Gastos com Alimentação: {porcgastoalimentacao}%</Text>
      <Text style={styles.textResultado}>Gastos com Aluguel: {porcgastoaluguel}%</Text>
      <Text style={styles.textResultado}>Gastos com Água: {porcgastoagua}%</Text>
      <Text style={styles.textResultado}>Gastos com Luz:{porcgastoluz}%</Text>
      <Text style={styles.textResultado}>Gastos com Internet: {porcgastointernet}%</Text>
      <Text style={styles.textResultado}>Gastos com Gasolina: {porcgastogasolina}%</Text>
      <Text style={styles.textResultado}>Gastos com Contas: {porcgastocontas}%</Text>
      <Text style={styles.textResultado}>Gastos com Faculdade: {porcgastofaculdade}%</Text>
      <Text style={styles.textResultado}>Gastos com Outras despesas:{porcgastooutras}%</Text>
      

      </View>

      <View style={styles.teclado}> 
        <View style={styles.quinta}>
              <TouchableOpacity style={styles.botaoVerde} onPress={() => somaResultado()}>
                <Text style={styles.textButtonM}>Calcular</Text>
              </TouchableOpacity>
        </View>
        </View> 
    </View>
    );
  }


