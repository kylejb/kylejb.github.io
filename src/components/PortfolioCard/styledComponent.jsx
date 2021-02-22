import styled, { css, keyframes } from 'styled-components';

const border_radius = '2px';
const card_size = '25rem';
const flip_duration = '1s';
const perspective = '1000px';
const degree = '90deg';

const back_flip_1 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
  100% {transform: rotateY(${degree}); z-index: -1}
`;

const back_flip_2 = keyframes`
  0% {transform: rotateY(-${degree}); z-index: -1}
  50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

const front_flip_1 = keyframes`
  0% {transform: rotateY(-${degree}); z-index: -1}
  50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

const front_flip_2 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
  100% {transform: rotateY(${degree}); z-index: -1}
`;

export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-transition: transform 0.1s;
    transition: transform 0.1s;
  -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;


    ${ ({ flip }) => flip === 'FRONT_FLIP' && css`
    -webkit-animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
    animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
  `}
`;
export const FrontCard = styled.div`
  position: relative;
  z-index: 1;
  -webkit-perspective: ${perspective};
  perspective: ${perspective};
  display: flex;
  flex-direction: column;
  border-radius: ${border_radius};
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
  0 2px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  margin: 1rem;
  width: 12rem;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  /* @include breakpoint-small-down {
    width: 15rem;
  } */

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
  }

  ${ ({ flip }) => flip === 'FRONT_FLIP' && css`
    -webkit-animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
    animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
  `}
`;

export const BackCard = styled.div`
  position: relative;
  z-index: -1;
  top: -${card_size} / 2;
  font-size: 0.9rem;
  -webkit-perspective: ${perspective};
  perspective: ${perspective};
  display: flex;
  flex-direction: column;
  border-radius: ${border_radius};
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
  0 2px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  margin: 1rem;
  width: 12rem;
  overflow: hidden;

  /* @include breakpoint-small-down {
    width: 15rem;
  } */

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
  }

  ${ ({ flip }) => flip === 'FLIP_BACK' && css`
    -webkit-animation: ${back_flip_1} ${flip_duration} 0.01s forwards;
    animation: ${back_flip_1} ${flip_duration} 0.01s forwards;
  `}
`;

export const FlipBackCard = styled.div`
  ${props => console.log(props.flip)}
  -webkit-animation: ${back_flip_1} ${flip_duration} 0.01s forwards;
  animation: ${back_flip_1} ${flip_duration} 0.01s forwards;
`;

// &.portfolio-card-back-flip {
//   -webkit-animation: back-flip-2 ${flip_duration} 0.01s forwards;
//   animation: back-flip-2 ${flip_duration} 0.01s forwards;
//   @keyframes back-flip-2 {
//     0% {transform: rotateY(-${degree}); z-index: -1}
//     50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
//     100% {transform: rotateY(0deg); z-index: 1}
//   }
//   @-webkit-keyframes back-flip-2 {
//     0% {-webkit-transform: rotateY(-${degree}); z-index: -1}
//     50% {-webkit-transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
//     100% {-webkit-transform: rotateY(0deg); z-index: 1}
//   }
// }

export const FlipFrontCard = styled.div`
  -webkit-animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
  animation: ${front_flip_1} ${flip_duration} 0.01s forwards;
`;


export const CardWrapper = styled.div``;


export const _CardWrapper = styled.div`
  .portfolio-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    -webkit-transition: transform 0.1s;
      transition: transform 0.1s;
    -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;

      /* Flip from front to back */
    .portfolio-card--front {
      position: relative;
      z-index: 1;
      -webkit-perspective: ${perspective};
      perspective: ${perspective};
      display: flex;
      flex-direction: column;
      border-radius: ${border_radius};
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
      0 2px 1px -2px rgba(0, 0, 0, 0.2);
      -webkit-transition: box-shadow 0.25s;
      transition: box-shadow 0.25s;
      margin: 1rem;
      width: 12rem;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      /* @include breakpoint-small-down {
        width: 15rem;
      } */

      &:hover {
        box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
      }

      &.portfolio-card-back-flip {
        -webkit-animation: back-flip-1 ${flip_duration} 0.01s forwards;
        animation: back-flip-1 ${flip_duration} 0.01s forwards;
        @keyframes back-flip-1 {
          0% {transform: rotateY(0deg); z-index: 1}
          50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
          100% {transform: rotateY(${degree}); z-index: -1}
        }
        @-webkit-keyframes back-flip-1 {
          0% {-webkit-transform: rotateY(0deg); z-index: 1}
          50% {-webkit-transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
          100% {-webkit-transform: rotateY(${degree}); z-index: -1}
        }
      }

      &.portfolio-card-front-flip {
        -webkit-animation: front-flip-1 ${flip_duration} 0.01s forwards;
        animation: front-flip-1 ${flip_duration} 0.01s forwards;
        @keyframes front-flip-1 {
          0% {transform: rotateY(-${degree}); z-index: -1}
          50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
          100% {transform: rotateY(0deg); z-index: 1}
        }
        @-webkit-keyframes front-flip-1 {
          0% {-webkit-transform: rotateY(-${degree}); z-index: -1}
          50% {-webkit-transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
          100% {-webkit-transform: rotateY(0deg); z-index: 1}
        }
      }
    }

    /* Flip from back to front */
    .portfolio-card--back {
      position: relative;
      z-index: -1;
      top: -${card_size} / 2;
      font-size: 0.9rem;
      -webkit-perspective: ${perspective};
      perspective: ${perspective};
      display: flex;
      flex-direction: column;
      border-radius: ${border_radius};
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
      0 2px 1px -2px rgba(0, 0, 0, 0.2);
      -webkit-transition: box-shadow 0.25s;
      transition: box-shadow 0.25s;
      margin: 1rem;
      width: 12rem;
      overflow: hidden;


      /* @include breakpoint-small-down {
        width: 15rem;
      } */

      &:hover {
        box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
      }

      &.portfolio-card-back-flip {
        -webkit-animation: back-flip-2 ${flip_duration} 0.01s forwards;
        animation: back-flip-2 ${flip_duration} 0.01s forwards;
        @keyframes back-flip-2 {
          0% {transform: rotateY(-${degree}); z-index: -1}
          50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
          100% {transform: rotateY(0deg); z-index: 1}
        }
        @-webkit-keyframes back-flip-2 {
          0% {-webkit-transform: rotateY(-${degree}); z-index: -1}
          50% {-webkit-transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
          100% {-webkit-transform: rotateY(0deg); z-index: 1}
        }
      }

      &.portfolio-card-front-flip {
        -webkit-animation: front-flip-2 ${flip_duration} 0.01s forwards;
        animation: front-flip-2 ${flip_duration} 0.01s forwards;
        @keyframes front-flip-2 {
          0% {transform: rotateY(0deg); z-index: 1}
          50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
          100% {transform: rotateY(${degree}); z-index: -1}
        }
        @-webkit-keyframes front-flip-2 {
          0% {-webkit-transform: rotateY(0deg); z-index: 1}
          50% {-webkit-transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
          100% {-webkit-transform: rotateY(${degree}); z-index: -1}
        }
      }
    }

    .portfolio-card-content {
      &__title {
        padding: 1rem 1.5rem;
        font-size: 1.125rem;
        font-weight: 400;
        text-align: center;

        /* @include breakpoint-small-down {
          font-size: 1.25rem;
        } */
      }

      &__desc {
        display: flex;
        flex-direction: column;
        padding: 0 0.5rem;
        font-size: 0.75rem;
        font-weight: 400;
        text-align: center;
        line-height: 1.25rem;

        /* @include breakpoint-small-down {
          font-size: 0.875rem;
        } */
      }

      &__icon {
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: 100;
        text-align: center;

        svg {
          margin: 0 0.25rem;
        }
      }

      &__links {
        padding: 0 0 0.75rem;
        display: flex;
        justify-content: space-around;
        font-size: 0.875rem;
        font-weight: 400;

        a {
          padding-bottom: 0.25rem;
          border-bottom: 2px solid inherit;

          &:hover {
            cursor: pointer;
            border-bottom: 2px solid inherit;
          }
        }
      }
    }

    &__title {
      flex: 1;
      padding: 1rem 1.5rem;
      font-size: 1.125rem;
      font-weight: 400;
      text-align: center;

      /* @include breakpoint-small-down {
        font-size: 1.25rem;
      } */
    }

    &__desc {
      display: flex;
      flex-direction: column;
      padding: 0 0.5rem;
      font-size: 0.75rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.25rem;

      /* @include breakpoint-small-down {
        font-size: 0.875rem;
      } */
    }

    &__icon {
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 100;
      text-align: center;

      svg {
        margin: 0 0.25rem;
      }
    }

    &__links {
      padding: 0 0 0.75rem;
      display: flex;
      justify-content: space-around;
      font-size: 0.875rem;
      font-weight: 400;

      a {
        padding-bottom: 0.25rem;
        border-bottom: 2px solid inherit;

        &:hover {
          cursor: pointer;
          border-bottom: 2px solid inherit;
        }
      }
    }
  }
`;