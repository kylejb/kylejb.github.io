import styled from 'styled-components';
import { maxDownMediaBreakpoints } from 'styles/_mediaQueries';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;

  main {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 3.25rem 1.5rem 1rem;
    text-align: center;

    ${maxDownMediaBreakpoints.mobileL`
      padding: 4.25rem 1.5rem 1rem;
    `}

    .about-wrapper {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      > .about-header {
        font-family: 'Roboto', sans-serif;
        font-size: 4rem;
        font-weight: bold;
        line-height: 4rem;
        padding-bottom: 1rem;

        ${maxDownMediaBreakpoints.mobileL`
          font-size: 3rem;
          line-height: 3.5rem;
        `}
      }

      > .about-content {
        font-size: 1.375rem;
        margin: 1.5rem 0;
        font-weight: 300;

        ${maxDownMediaBreakpoints.mobileL`
          font-size: 1.25rem;
        `}
      }
    }
  }
`;
