import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: white;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #48484847;
  padding: 0 22px 10px 22px;
  padding-top: 20px;
`
const Headline = styled.h2`
  color: #424242;
`

const Notifications = props => {
  const { notifications } = props
  return (
    <Wrapper>
      <Headline>Notifications</Headline>
      <ul className="online-users">
        {notifications &&
          notifications.map(item => {
            return (
              <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </li>
            )
          })}
      </ul>
    </Wrapper>
  )
}

export default Notifications
