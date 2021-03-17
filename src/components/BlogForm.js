import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Context } from '../context/BlogContext';

const BlogForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.label}>Content</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} />
      <Button
        title="SAVE BLOG"
        onPress={() => { onSubmit(title, content) }}
      />
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 7,
    marginBottom: 15,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 7
  }
});

export default BlogForm;