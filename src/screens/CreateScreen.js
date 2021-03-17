import React, { useContext, useState } from 'react';
import { StyleSheet } from "react-native";
import BlogForm from '../components/BlogForm';
import { Context } from '../context/BlogContext';

const CreateScreen = (props) => {
  const { addBlogPost } = useContext(Context);

  return <BlogForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => { props.navigation.navigate("Index Screen") })
  }} />
};

export default CreateScreen;