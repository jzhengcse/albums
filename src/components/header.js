// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
  },
  textStyle: {
    fontSize: 20,
  },
};

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>How are you?</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export default Header;
