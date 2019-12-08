import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert,Picker, Text ,Modal, TouchableHighlight,TextInput } from 'react-native';
import { CheckBox, Input } from 'react-native-elements'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      personas:[],
      tableHead: ['Persona', 'Pedido', 'Pago', 'Debe'],
      tableData: [],
      form:{
	persona:"",
	docenas:1,
	radioProps:[
	  {label: 'Carne', value: 0 },
	  {label: 'Pollo', value: 1 }
	],
       textoAcobrar: "A cobrar",
       textoPago: "Pagó",
       monto:"",
       pago:false,
      }
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  onChangeText(key,value){
    let formAux = this.state.form
    formAux[key] = value

    this.setState({form:formAux})
  }

  calcularMonto(){
     return (280 * this.state.form.docenas).toString()
  }

  getDeuda(){
  	return (this.state.form.pago) ? "" :  this.calcularMonto()
  }
  getPago(){
  	return (this.state.form.pago) ? this.calcularMonto() :  ""
  }

  guardarPedido(){
    const {form} = this.state;

    let personas = { ...this.state.personas ,  ...[form.persona] }
    let tableData = this.state.tableData 

    tableData.push( [form.persona, form.docenas , this.getPago() , this.getDeuda() ] )

    this.setState( {
		tableData,
		personas,
	        modalVisible: false,
		form:{
			persona:"",
			docenas:1,
			pago:false
		}
	})   
  }

  render() {
    const state = this.state;
    
    const cobrarTexto = (state.form.pago)? state.form.textoPago: state.form.textoAcobrar

    return (
      <View style={styles.container}>
	<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
	>
          <View style={{marginTop: 22}}>
            <View>
		
	      <Button
		style={{ marginTop: 10,marginBottom: 10}}
		title="Detalle del pedido"
		onPress={() => this.agregarPedido()}
	      />

 	      <Input
		placeholder={"Ingrese en nombre de la persona"}
		containerStyle={{ marginTop: 40}}
		onChangeText={ text => this.onChangeText("persona",text)}
		value={this.state.form.persona}
	      />
	     
	      <RadioForm
		radio_props={this.state.form.radioProps}
		initial={0}
		buttonColor={'#50C900'}
		formHorizontal={true}
		animation={true}
		onPress={(value) => {this.setState({value:value})}}
	      />

              <Text>Docenas</Text>
	      <Picker selectedValue = {this.state.form.docenas} onValueChange = { count => this.onChangeText("docenas",count)}>
		       <Picker.Item label = "1" value = "1" />
		       <Picker.Item label = "2" value = "2" />
		       <Picker.Item label = "3" value = "3" />
              </Picker>
	      <Text>Cantidad</Text>
	      <Picker selectedValue = {this.state.form.cantidad} onValueChange = { count => this.onChangeText("cantidad",count)}>
		       <Picker.Item label = "1" value = "1" />
		       <Picker.Item label = "2" value = "2" />
		       <Picker.Item label = "3" value = "3" />
		       <Picker.Item label = "4" value = "4" />
		       <Picker.Item label = "5" value = "5" />
		       <Picker.Item label = "6" value = "6" />
		       <Picker.Item label = "7" value = "7" />
		       <Picker.Item label = "8" value = "8" />
		       <Picker.Item label = "9" value = "9" />
		       <Picker.Item label = "10" value = "10" />
		       <Picker.Item label = "11" value = "11" />
              </Picker>

		<CheckBox
		  title='Pagó'
		  checked={ this.state.form.pago }
		  onPress={() => this.onChangeText("pago",!this.state.form.pago) }
		/>
              <Text>{cobrarTexto}</Text>
 	      <TextInput
		style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
		value={this.calcularMonto()}
	      />

              <Button
		    title="Guardar Pedido"
		    onPress={() => this.guardarPedido()}
	      />

            </View>
          </View>
        </Modal>

	 <Button
            title="Agregar Pedido"
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
          />

        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});
