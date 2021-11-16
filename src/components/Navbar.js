import styled from 'styled-components';

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: normal;
`;
const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
`;
const NavLink = styled.a`
  padding: 0.5rem 1rem;
`;

function Navbar() {
  return (
    <Header>
      <Logo>MySkils</Logo>
      <nav>
        <NavLink>Register</NavLink>
        <NavLink>Login</NavLink>
      </nav>
    </Header>
  );
}

export default Navbar;
