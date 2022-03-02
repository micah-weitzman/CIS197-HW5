import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input } from 'antd'

import { editIntro } from '../actions'

const IntroModal = ({
  image, text, dispatchEditIntro, isVisible, closeModal,
}) => {
  const [imageLink, setImageLink] = useState(image)
  const [introText, setIntroText] = useState(text)

  const sendDispatch = async () => {
    await dispatchEditIntro(imageLink, introText)
    closeModal()
  }

  return (
    <Modal title="Edit Title" visible={isVisible} onOk={sendDispatch} onCancel={closeModal}>
      <Form>
        <Form.Item label="Image">
          <Input value={imageLink} onChange={e => setImageLink(e.target.value)} />
        </Form.Item>
        <Form.Item label="Text">
          <Input value={introText} onChange={e => setIntroText(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, text) => dispatch(editIntro(image, text)),
})

export default connect(null, mapDispatchToProps)(IntroModal)
