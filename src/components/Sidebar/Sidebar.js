import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import SidebarWrapper from './SidebarWrapper'
import StyledCloseBtn from '../Buttons/CloseBtn'
import StyledLink from '../Buttons/StyledLink'
import LinksData from '../../data-management/linksData'
import {
  changeToProducts,
  changeToHome,
  changeToAbout,
} from '../../actions/changePage'
import { close_modal } from '../../data-management/actions'
import { CloseModal } from '../../actions/toggleMenus'

const Sidebar = (props) => {
  const sidebarHolder = useRef(null)

  function closeModal() {
    sidebarHolder.current.classList.remove('open-modal')
  }

  function switchPage(clickPage) {
    props[clickPage]()
    props.closeModal()
  }

  useEffect(() => {
    if (props.modalstatus === close_modal) {
      closeModal()
    }
  }, [props.modalstatus])

  return (
    <SidebarWrapper>
      <section ref={sidebarHolder}>
        <section className='inner-modal'>
          <StyledCloseBtn onClick={props.closeModal} />
          <div className='holder'>
            {LinksData.map(({ id, textContent, path, clickPage }) => {
              return (
                <StyledLink
                  css={`
                    color: var(--clr-grey-1);
                    width: 100%;
                    text-align: center;
                    padding: 1rem;
                    font-size: 1.5rem;
                    :hover {
                      background-color: var(--clr-grey-1);
                      color: var(--clr-grey-10);
                    }
                  `}
                  key={id}
                  to={path}
                  currentpage={props.currentpage}
                  onClick={() => switchPage(clickPage)}
                >
                  {textContent}
                </StyledLink>
              )
            })}
          </div>
        </section>
      </section>
    </SidebarWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    currentpage: state.currentPage.currentPage,
    modalstatus: state.menuStatus.modalStatus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productsPage: () => dispatch(changeToProducts()),
    homePage: () => dispatch(changeToHome()),
    aboutPage: () => dispatch(changeToAbout()),
    closeModal: () => dispatch(CloseModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
