import mainBcg from '../../../images/main-bcg.jpeg';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mainBcg}) center/cover;
  padding: 0 1.328125rem;
  @media screen and (min-width: 768px) {
    padding: 0 3.2001875rem;
  }
  @media screen and (min-width: 1088px) {
    padding: 0 4.875rem;
  }
  @media screen and (min-width: 1400px) {
    padding: 0 8.4375rem;
  }
  display: grid;
  justify-content: flex-start;
  align-items: center;
`;

export default HeroWrapper;
