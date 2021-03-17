import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { FontAwesome } from "@expo/vector-icons"

const ShowScreen = (props) => {
  const { state } = useContext(Context)

  const blogPost = state.find(blogPost => blogPost.id === props.route.params.id)

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() =>
          props.navigation.navigate("Edit Screen", { id: props.route.params.id })
        }>
          <FontAwesome name="pencil" size={30} />
        </TouchableOpacity>
      )
    });
  }, [props.navigation])

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};



export default ShowScreen;