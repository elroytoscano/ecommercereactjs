import React from 'react'
import styled from 'styled-components/macro'
import { changeToAbout } from '../../actions/changePage'
import { connect } from 'react-redux'

import { BaseWrapper, SubWrapper } from './BaseContent'

const AboutContent = (props) => {
  React.useEffect(() => {
    props.setAboutPage()
  }, [])

  return (
    <BaseWrapper>
      <SubWrapper>
        <Wrapper>
          <div className='container'>
            <h2>about</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ipsum est natus voluptatem reprehenderit? Natus optio
              omnis odio quia quidem? Modi fuga officiis ea, iusto doloremque
              quod consequuntur eius ratione suscipit fugit. Earum, dolor? Optio
              quis doloremque possimus ducimus. Consectetur, iure labore eum
              accusamus dignissimos nobis voluptatem quod est ut?
            </p>
          </div>
        </Wrapper>
      </SubWrapper>
    </BaseWrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 15rem);
  display: grid;
  place-items: center;
  width: 100vw;
  max-width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
  .container {
    width: 50vw;
    text-align: center;
    h2 {
      font-size: 2.75rem;
      font-weight: 500;
    }
    p {
      line-height: 2.5;
    }
  }
`

const mapDispatchToProps = (dispatch) => {
  return { setAboutPage: () => dispatch(changeToAbout()) }
}

export default connect(null, mapDispatchToProps)(AboutContent)
