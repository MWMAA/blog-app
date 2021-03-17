import jsonServer from '../API/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {

  switch (action.type) {
    case "GET_BLOGPOSTS":
      return action.payload
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    case "EDIT_BLOGPOST":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    case "DELETE_BLOGPOST":
      return state.filter((blogpost) => blogpost.id !== action.payload)
    default:
      return state
  }
}

const getBlogPost = (dispatch) => {
  return async () => {
    const res = await jsonServer.get('/blogposts')
    dispatch({ type: "GET_BLOGPOSTS", payload: res.data })
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const res = await jsonServer.post('/blogposts', { title, content })
    callback ? callback() : null
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: "DELETE_BLOGPOST", payload: id })
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })

    dispatch({
      type: "EDIT_BLOGPOST",
      payload: { id, title, content }
    })
    callback ? callback() : null
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
)