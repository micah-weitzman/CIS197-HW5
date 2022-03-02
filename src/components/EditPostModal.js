import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  Form,
  Input,
  Button,
} from 'antd'

import { editPost, deletePost } from '../actions'

const EditPostModal = ({
  isVisible,
  closeModal,
  id,
  title,
  image,
  text,
  dispatchEditPost,
  dispatchDeletePost,
}) => {
  const [postTitle, setPostTitle] = useState(title)
  const [imageLink, setImageLink] = useState(image)
  const [postText, setPostText] = useState(text)

  const sendDispatch = async () => {
    await dispatchEditPost(id, postTitle, imageLink, postText)
    closeModal()
  }

  const handleDelete = async () => {
    await dispatchDeletePost(id)
    closeModal()
  }

  return (
    <Modal title="Edit Post" visible={isVisible} onOk={sendDispatch} onCancel={closeModal}>
      <Form>
        <Form.Item label="Title">
          <Input value={postTitle} onChange={e => setPostTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Image">
          <Input value={imageLink} onChange={e => setImageLink(e.target.value)} />
        </Form.Item>
        <Form.Item label="Text">
          <Input value={postText} onChange={e => setPostText(e.target.value)} />
        </Form.Item>
      </Form>
      <Button danger type="primary" onClick={handleDelete} shape="round">
        Delete Post
      </Button>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (id, title, image, text) => dispatch(editPost(id, title, image, text)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(EditPostModal)
