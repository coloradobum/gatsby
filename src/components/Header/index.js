import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  marginBottom: 1.5rem;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({data}) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt='Level Up Logo' />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              to='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
