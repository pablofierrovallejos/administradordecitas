import React , {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';

const App = () =>  {
  const [modalVisible, setModalVisible] = useState(false)



  const presionarButton= ()=>{
      console.log('Pressable ok')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {' '}
          <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Button title='Nueva Cita' 
        onPress={()=> {
            console.log('Presionado')
        }}
      > 
      </Button>
      <Pressable 
        onPress={()=> setModalVisible(true)}
        style={styles.btnNuevaCita}
      >
          <Text style={styles.btnTextNuevaCita}>Presione aquí</Text>
      </Pressable>

      <Formulario modalVisible={modalVisible}
      />
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
        textAlign: 'center',
        fontSize: 30,
        color: '#374251',
        fontWeight: '600'
  },
  tituloBold:{
        fontWeight: '900',
        color: '#6D28D9'
  },
  btnNuevaCita:{
      backgroundColor: '#6D28D9',
      padding: 20,
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 10
  },  
  btnTextNuevaCita:{
      textAlign: 'center',
      color:'#FFFFFF',
      fontSize: 20,
      fontWeight:'900',
      textTransform: 'uppercase'
  }
})

export default App;
