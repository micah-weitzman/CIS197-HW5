export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

let id = 0

export const editIntro = (image, text) => ({
  type: EDIT_INTRO,
  image,
  text,
})

export const addPost = (title, image, text) => ({
  type: ADD_POST,
  title,
  image,
  text,
  id: id++,
})

export const editPost = (postID, title, image, text) => ({
  type: EDIT_POST,
  title,
  image,
  text,
  id: postID,
})

export const deletePost = postID => ({
  type: DELETE_POST,
  id: postID,
})
