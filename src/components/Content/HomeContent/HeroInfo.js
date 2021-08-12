import styled from 'styled-components'

const HeroInfo = styled.div`
  h1 {
    font-family: var(--ff-logo);
    font-size: 3rem;
  }
  h1,
  h3 {
    line-height: 1;
    color: white;
  }
  h3 {
    text-transform: lowercase;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.125rem;
    margin: 1.5rem 0;
  }
  @media screen and (min-width: 768px) {
    h1 {
      letter-spacing: 0.5rem;
      font-size: 5rem;
      margin-bottom: 0;
    }
    h3 {
      font-size: 2.5rem;
    }
  }
`

export default HeroInfo
