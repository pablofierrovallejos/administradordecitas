import React,{useState} from 'react'
import {Modal, Text, SafeAreaView, StyleSheet, View, TextInput, ScrollView, Alert} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Formulario = (props) => {
    const {modalVisible, setModalVisible} = props
    const [paciente, setPaciente] =  useState('')
    const [propietario, setPropietario] =  useState('')
    const [email, setEmail] =  useState('')
    const [telefono, setTelefono] =  useState('')
    const [sintomas, setSintomas] =  useState('')
    const [fecha, setFecha] =  useState(new Date())
   
    const handleCita = () =>{
        //console.log('Presionaste nueva cita')
        if([paciente, propietario, email,telefono, sintomas,fecha].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios'
            )
            return
        }    
        console.log('Agregando cita')
    }
    
    return(
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView  style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {' '} <Text style={styles.tituloBold}>Cita</Text> 
                    </Text>  

                    <Pressable 
                        style={styles.btnCancelar}
                        onPress={ ()=> setModalVisible(false)}>
                        <Text style={styles.btnCancelarTexto}>Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}>
                        
                        </TextInput>
                    </View>    
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}>
                        </TextInput>
                    </View>    
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}>
                        </TextInput>
                    </View>    
                    <View style={styles.campo}>
                        <Text style={styles.label}>Télefono Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Télefono Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            values={telefono}
                            onChangeText={setTelefono}
                            maxLength={10}>
                        </TextInput>
                    </View>  

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fecha}
                                locale='es'
                                onDateChange={ (date)=> setFecha(date)}
                            />
                        </View>
                    </View>  
                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={[styles.input,styles.sintomasInput]}
                            placeholder='Síntomas'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}>
                        </TextInput>
                    </View>  
                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto}>Agregar Cita</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#6D28D9',
        flex:1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign:'center',
        marginTop:30,
        color: '#FFFFFF'
    },
    tituloBold:{
        fontWeight: '900'
    },
    btnCancelar:{
        marginTop: 20,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FFF'
    },
    btnCancelarTexto:{
        color:'#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20
    },
    campo:{
        marginTop: 10,
        marginHorizontal:30,
        marginBottom:10
    },
    label:{
        color:'#FFF',
        marginBottom:10,
        marginTop: 10,
        fontSize:20,
        fontWeight:'600'
    },
    input:{
        backgroundColor:'#FFF',
        padding: 5,
        borderRadius: 10,
        marginBottom: 5
    },
    sintomasInput:{
        height:100
    },
    fechaContenedor:{
        backgroundColor:'#FFF',
        borderRadius:10
    },
    btnNuevaCita:{
        marginVertical: 50,
        backgroundColor:'#F59E0B',
        paddingVertical:15,
        marginHorizontal:30,
        borderRadius:10
    },
    btnNuevaCitaTexto:{
        color: '#5827A4',
        textAlign: 'center',
        fontWeight:'900',
        fontSize:16,
        textTransform: 'uppercase'
    }
})

export default Formulario 