import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const StyledCloseBtn = styled(FaTimes)`
  transition: var(--transition);
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: var(--clr-grey-5);
  }
`

export default StyledCloseBtn
