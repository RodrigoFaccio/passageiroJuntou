import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import styles from './styles';

const TimePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function createTrip(horas){

  }

  const horas = ['11:00','14:00','13:00','20:00']
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
		  {horas.map((item)=>(

			  <TouchableOpacity onPress={createTrip(item)} style={styles.hours}>
            		<Text style={styles.modalText}>{item}</Text>

			  </TouchableOpacity>
					
					))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >

				
              <Text style={styles.textStyle}>confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
	  <TouchableOpacity  onPress={() => setModalVisible(true)}  style={styles.plusView}>
        <View>
          <Text style={styles.plusText}>+</Text>
        </View>
      </TouchableOpacity>
     
     
        <Text style={styles.textStyle}>+</Text>
    </View>
  );
};



export default TimePicker;