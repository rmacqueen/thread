import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [''],
    };
  }

  onTextChanged(boxId, text) {
    const { boxes } = this.state;
    if (text.length > 20) {
      if (boxId === boxes.length - 1) {
        boxes.push('');
      }
      const words = text.split(' '); //make this regex
      const lastWord = words[words.length - 1];
      boxes[boxId + 1] = lastWord + ' ' + boxes[boxId + 1];
      boxes[boxId] = words.slice(0, words.length - 1).join(' ');
    } else {
      boxes[boxId] = text;
    }
    this.setState({
      boxes: boxes,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Write your tweetstorm!</Text>

        {
          this.state.boxes.map((text, i) =>
            <TextInput
              key={i}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              editable={true}
              multiline={true}
              maxLength={140}
              height={40}
              width={"100%"}
              value={text}
              onChangeText={(newText) => this.onTextChanged(i, newText)}
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
});
