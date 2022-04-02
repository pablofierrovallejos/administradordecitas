import React from 'react'
import {Modal, Text} from 'react-native'

const Formulario = (props) => {
    return(
        <Modal animationType='slide'
            visible={props.modalVisible}
        >
            <Text>Desde Modal</Text>     
        </Modal>
    )
}

export default Formulario