import React, { useState } from 'react'
import { Button, Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditPostModal from './EditPostModal'

const { Meta } = Card

const Post = ({
  id,
  image,
  text,
  title,
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Card
        hoverable
        style={{ width: 240, height: 'auto' }}
        cover={<img alt={image} src={image} />}
        title={title}
        bordered
        extra={
          (
            <EditOutlined
              onClick={() => setVisible(true)}
              style={{ marg: '4px', color: '#40a9ff' }}
            />
          )
        }
      >
        <Meta description={text} />
      </Card>
      <EditPostModal
        isVisible={visible}
        closeModal={() => setVisible(false)}
        id={id}
        image={image}
        title={title}
        text={text}
      />
    </>
  )
}

export default Post
