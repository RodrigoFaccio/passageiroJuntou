import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button, 
  Platform
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from  './styles'


const TimePicker = ({ navigation }) => {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
  
	const onChange = (event, selectedDate) => {
	  const currentDate = selectedDate || date;
	  setShow(Platform.OS === 'ios');
	  setDate(currentDate);
	  console.log(date);
	};
  
	const showMode = (currentMode) => {
	  setShow(true);
	  setMode(currentMode);
	};
  
	const showDatepicker = () => {
	  showMode('date');
	};
  
	const showTimepicker = () => {
	  showMode('time');
	};
	
	return (
		<View>
		   <TouchableOpacity onPress={showTimepicker} style={styles.plusView}>
        <View>
          <Text style={styles.plusText}>+</Text>
        </View>
      </TouchableOpacity>

		  {show && (
			<DateTimePicker
			MinuteInterval={10} 
			  testID="dateTimePicker"
			  value={date}
			  mode={mode}
			  is24Hour={true}
			  display="default"
			  onChange={onChange}
			/>
		  )}
		</View>
	  );
};

export default TimePicker;
