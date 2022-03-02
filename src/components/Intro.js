import React, { useState } from 'react'
import { Button, Col, Row } from 'antd'
import { connect } from 'react-redux'

import IntroModal from './IntroModal'

const Intro = ({ intro }) => {
  const [editMode, setEditMode] = useState(false)

  const closeModal = () => {
    setEditMode(false)
  }

  return (
    <div
      style={{
        height: 'auto',
        backgroundColor: '#bfbfbf',
      }}
    >
      <Row>
        <Col span={18} style={{ padding: '20px' }}>
          <h1>Hey, this is me!</h1>
        </Col>
        <Col style={{ paddingTop: '10px' }}>
          <Button onClick={() => setEditMode(true)} shape="round">
            Edit Title
          </Button>
        </Col>
      </Row>
      <Row
        justify="center"
      >
        <Col span={12}>
          <img src={intro.image} alt="image here" height={200} />
        </Col>
        <Col span={12} align="middle">
          <h2>
            {intro.text}
          </h2>
        </Col>
      </Row>

      <IntroModal isVisible={editMode} image={intro.image} text={intro.text} closeModal={closeModal} />
    </div>
  )
}

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, null)(Intro)
