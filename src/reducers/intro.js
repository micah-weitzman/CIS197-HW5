import { EDIT_INTRO } from '../actions'

const default_state = {
  image: 'https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png',
  text: 'Welcome!',
}

const intro = (state = default_state, action) => {
  const { type, image, text } = action

  switch (type) {
    case EDIT_INTRO:
      return { image, text }
    default:
      return state
  }
}

export default intro
