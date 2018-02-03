/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import styled from 'styled-components'
import Head from '../components/Head'
import Link from 'next/link'
import { unit, mobile } from '../components/style-helpers'
import about from '../pages/about'

/*
-----------------------------------------------------------------------------------
|
| Page
|
-----------------------------------------------------------------------------------
*/

export default ({ children }) => (
  <div>
    <Head />
    <Page>
      <Header>
        <h1>
          <Link prefetch href="/">
            <a>Lindekaer</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link prefetch href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </Header>
      {children}
      <Footer>
        <IconRow>
          <Icon src="/static/icons/github.svg" alt="Github" href="https://github.com/lindekaer" />
          <Icon
            src="/static/icons/twitter.svg"
            alt="Twitter"
            href="https://twitter.com/lindekaer"
          />
          <Icon
            src="/static/icons/instagram.svg"
            alt="Instagram"
            href="https://instagram.com/lindekaer"
          />
          <Icon
            src="/static/icons/linkedin.svg"
            alt="LinkedIn"
            href="https://linkedin.com/in/lindekaer"
          />
          <Icon
            src="/static/icons/telegram.svg"
            alt="telegram"
            href="https://telegram.me/lindekaer"
          />
        </IconRow>

        <p>© {new Date().getFullYear()} - Theodor Lindekaer</p>
        <p>
          <a href="mailto:theodor.lindekaer@gmail.com" target="_blank">
            Email me
          </a>
        </p>
      </Footer>
    </Page>
  </div>
)

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

const IconLink = props => {
  const { src, alt, href } = props
  return (
    <a href={href} target="_blank" {...props}>
      <img src={src} alt={alt} />
    </a>
  )
}

const Icon = styled(IconLink)`
  transition: transform 0.2s ease-in-out;
  transform: translate(0px, 0px);
  border-bottom: none;

  &:hover {
    transform: translate(0px, -3px);
  }
`

const Page = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 0 2.8rem;
  background-color: white;

  ${mobile`
    padding: 0 1.5rem;
  `};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0 2rem 0;

  ${mobile`
    flex-direction: column;
  `} a {
    border: 0px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 900;
    margin: 0px;
    ${mobile`
      margin-bottom: ${unit}px;
    `};
  }

  ul {
    margin-bottom: 0px;
    padding: 0px;
  }

  li {
    display: inline-block;
    padding-right: ${3 * unit}px;
  }

  li:last-child {
    padding-right: 0px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Footer = styled.div`
  padding: 6rem 0 4rem 0;
  text-align: center;

  p {
    font-size: 0.8rem;
    margin: 0rem;
  }
`

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.3rem;

  img {
    margin: 0px ${unit}px;
    height: ${3 * unit}px;
    width: ${3 * unit}px;
  }
`
