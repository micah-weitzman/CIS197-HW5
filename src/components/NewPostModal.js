import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input } from 'antd'

import { addPost } from '../actions'

const NewPostModal = ({ dispatchNewPost, isVisible, closeModal }) => {
  const [imageLink, setImageLink] = useState('')
  const [postText, setPostText] = useState('')
  const [titleText, setTitleText] = useState('')

  const sendDispatch = async () => {
    await dispatchNewPost(titleText, imageLink, postText)
    closeModal()
    setImageLink('')
    setPostText('')
    setTitleText('')
  }

  return (
    <Modal title="New Post" visible={isVisible} onOk={sendDispatch} onCancel={closeModal}>
      <Form>
        <Form.Item label="Title">
          <Input value={titleText} onChange={e => setTitleText(e.target.value)} />
        </Form.Item>
        <Form.Item label="Image">
          <Input value={imageLink} onChange={e => setImageLink(e.target.value)} />
        </Form.Item>
        <Form.Item label="Text">
          <Input value={postText} onChange={e => setPostText(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchNewPost: (title, image, text) => dispatch(addPost(title, image, text)),
})

export default connect(null, mapDispatchToProps)(NewPostModal)
