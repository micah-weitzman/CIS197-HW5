import { EDIT_POST, ADD_POST, DELETE_POST } from '../actions'

const default_state = []

const post = (state = default_state, action) => {
  const {
    type,
    id,
    title,
    image,
    text,
  } = action

  switch (type) {
    case ADD_POST:
      return [
        ...state, {
          id, title, image, text,
        }]
    case EDIT_POST:
      return state.map(p => {
        if (p.id === id) {
          return {
            id, title, image, text,
          }
        }
        return { ...p }
      })
    case DELETE_POST:
      return state.filter(p => p.id !== id)
    default:
      return state
  }
}

export default post
