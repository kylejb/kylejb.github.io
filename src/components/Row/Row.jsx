import { Children } from 'react';
import styled, { css } from  'styled-components';
import Column from  '../Column/Column';


const Wrapper = styled.div`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
  margin: 0 -${(props) => props.spacingX}px 0 -${(props) => props.spacingX}px;
  width: ${(props) =>
    props.standardWidth ? '100%' : `calc(100% + ${props.spacingX * 2}px)`};
  @media (min-width: ${(props) => props.breakpoint}px) {
    flex-direction: ${(props) =>
      props.flexDirections ? props.flexDirections[0] || 'row' : 'row'};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${(props) =>
      props.standardWidth
        ? '0'
        : `0 -${props.spacingX}px 0 -${props.spacingX}px`};
  }
`;

const Row = ({
  children,
  className,
  id,
  breakpoints = [769],
  spacing = [12],
  flexDirections,
  maxColumnCount = 4,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      breakpoint={breakpoints[0]}
      breakpointTwo={breakpoints[1] || breakpoints[0]}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      flexDirections={flexDirections || null}
      maxColumnCount={maxColumnCount}
    >
      {Children.toArray(children).map((item) => {
        return (
          item && (
            <Column
              key={`column-${item.props.className}-${item.props.id}`}
              breakpoints={breakpoints}
              widths={item.props.widths}
              offsets={item.props.offsets}
              maxColumnCount={maxColumnCount}
              className={item.props.className}
              id={item.props.id}
              spacing={item.props.spacing || spacing}
            >
              {item}
            </Column>
          )
        );
      })}
    </Wrapper>
  );
};

export default Row;
