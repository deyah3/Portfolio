import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background:rgb(158, 155, 207);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

function Header() {
  return <HeaderBar>My App Header</HeaderBar>;
}

export default Header;
