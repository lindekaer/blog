/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import Link from 'next/link'
import styled from 'styled-components'
import Head from '../components/Head'
import BasePage from '../components/BasePage'
import { mobile, unit } from '../components/helpers'
import format from 'date-fns/format'
import { getAll } from '../db'

/*
-----------------------------------------------------------------------------------
|
| Page
|
-----------------------------------------------------------------------------------
*/

export default () => {
  const articles = getAll()
  return (
    <BasePage>
      {articles.map(({ slug, title, date, tags }, idx) => (
        <Article>
          <ArticleTop>
            <div>
              {tags.map((tag, idx) => (
                <Tag key={idx}>
                  {tag}
                  {idx !== tags.length - 1 && ', '}
                </Tag>
              ))}
            </div>
          </ArticleTop>
          <ArticleTitle>
            <Link prefetch href={slug}>
              <a>{title}</a>
            </Link>
          </ArticleTitle>
          <DateText>{format(date, 'Do [of] MMMM YYYY')}</DateText>
        </Article>
      ))}
    </BasePage>
  )
}

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

const Article = styled.div`
  margin-bottom: 1.4rem;
`

const DateText = styled.p`
  font-size: 0.8rem;
`

const ArticleTop = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile` flex-direction: column;`} p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin: 0px;
    color: #7d7d7d;
  }

  ${DateText} {
    letter-spacing: 0px;
    text-transform: none;
    ${mobile` order: -1;`};
  }
`

const Tag = styled.span`
  text-transform: uppercase;
  color: grey;
  font-size: 0.8rem;
  letter-spacing: 2px;
`

const ArticleTitle = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 1.6rem;

  a {
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid #2c2c2c;
  }
`
