import RocketSVG from '@/assets/rocket.svg';
import RocketPNG from '@/assets/rocket.png';
import styled from 'styled-components';

const StyledIcon = styled.img`
  width: 1rem;
`;

export default function HelloWorld() {
  return (
    <div>
      <RocketSVG width="1rem" /> Hello, world <StyledIcon src={RocketPNG} />
    </div>
  );
}
