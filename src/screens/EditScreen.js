import React, { useContext } from 'react';
import { StyleSheet } from "react-native";
import BlogForm from '../components/BlogForm';
import { Context } from '../context/BlogContext';

const EditScreen = (props) => {
  const ID = props.route.params.id;
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find(Post =>
    Post.id === ID
  )

  return <BlogForm
    initialValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => { editBlogPost(ID, title, content, () => props.navigation.pop()) }}

  />
};



export default EditScreen;