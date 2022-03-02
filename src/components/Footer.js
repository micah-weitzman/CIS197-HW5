import React, { useState } from 'react'
import { Button, Col, Row } from 'antd'
import { connect } from 'react-redux'
import NewPostModal from './NewPostModal'
import Post from './Post'

const Footer = ({ post }) => {
  const [newPostModal, setNewPostModal] = useState(false)

  const closeModal = () => {
    setNewPostModal(false)
  }

  const getGroupsOfThree = () => {
    const postsArr = [...post]
    const arrays = []
    const size = 3
    while (postsArr.length > 0) {
      arrays.push(postsArr.splice(0, size))
    }
    return arrays
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#d9ebff',
        height: '100%',
      }}
    >
      <Row>
        <Col span={2}>
          <h2>Posts</h2>
        </Col>
        <Button shape="round" onClick={() => setNewPostModal(true)}>
          New Post
        </Button>
      </Row>

      <NewPostModal isVisible={newPostModal} closeModal={closeModal} />

      {getGroupsOfThree().map(arr => (
        <Row gutter={16} style={{ margin: '10px' }}>
          {
          arr.map(({
            id, image, title, text,
          }) => (
            <Col span={8}>
              <Post key={id} id={id} image={image} title={title} text={text} />
            </Col>
          ))
          }
        </Row>
      ))}
    </div>

  )
}

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, null)(Footer)
