/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import styled from 'styled-components'
import { getBySlug } from '../db.js'
import format from 'date-fns/format'
import BasePage from './BasePage'
import { unit } from './helpers'

/*
-----------------------------------------------------------------------------------
|
| Page
|
-----------------------------------------------------------------------------------
*/

export default class Article extends React.Component {
  state = {
    article: null,
  }

  componentDidMount = () => {
    const slug = this.props.slug.slice(1)
    const article = getBySlug(slug)
    this.setState({ article })
  }

  render = () => {
    const { article } = this.state
    if (Boolean(article)) {
      const { tags, title, date } = article
      return (
        <BasePage>
          <article>
            <ArticleHead>
              <Tags>
                {tags.map((tag, idx) => (
                  <Tag key={idx}>
                    {tag}
                    {idx !== tags.length - 1 && ', '}
                  </Tag>
                ))}
              </Tags>
              <Title>{title}</Title>
              <PublishDate>{format(date, 'Do [of] MMMM YYYY')}</PublishDate>
            </ArticleHead>
            <ArticleBody>{this.props.children}</ArticleBody>
          </article>
        </BasePage>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

const ArticleHead = styled.div`
  text-align: center;
  margin: 1.5rem 0 2rem 0;
`

const ArticleBody = styled.div``

const Title = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 3.4rem;
  font-family: Times, Georgia, serif;
  border-bottom: 1px solid transparent;
  line-height: 3.5rem;
`

const Author = styled.p`
  color: grey;
  margin-bottom: 0px;
`
const PublishDate = styled.p`
  font-size: 0.8rem;
  margin: 0px;
`

const Tags = styled.p`
  margin: 0px;
`

const Tag = styled.span`
  text-transform: uppercase;
  color: grey;
  font-size: 0.8rem;
  letter-spacing: 2px;
`

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6rem;
`

export const Code = styled.pre`
  font-family: Consolas, monaco, monospace;
  background: aliceblue;
  font-size: 0.8rem;
  padding: 1rem 2.8rem;
  line-height: 1.4rem;
  margin: 0rem -2.8rem;
  margin-bottom: 1.5rem;
`

export const SmallCode = styled.pre`
  font-family: Consolas, monaco, monospace;
  background: aliceblue;
  font-size: 0.8rem;
  display: inline;
  padding: 4px 6px;
`

export const List = styled.ul`
  line-height: 1.6rem;
`

export const Item = styled.li`
  margin-bottom: 0.5rem;
`

const RawLink = props => {
  const { href, children } = props
  return (
    <a href={href} {...props} target="_blank">
      {children}
    </a>
  )
}

export const Link = styled(RawLink)``

export const SubHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 2.5rem;
`

const ImageLabel = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`

const RawImage = styled(props => <img {...props} src={props.src} />)`
  width: 100%;
`

export const Image = styled(props => (
  <div {...props}>
    <RawImage src={props.src} />
    {props.title && <ImageLabel>{props.title}</ImageLabel>}
  </div>
))`
  width: 100%;
  margin-bottom: 1.5rem;
`

export const ImageGrid = styled(props => (
  <div {...props}>
    {props.images.map((image, idx) => <RawImage key={idx} src={image.src} title={image.title} />)}
  </div>
))`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px -${1 * unit}px 1.5rem;

  ${RawImage} {
    flex: 1;
    width: calc(50% - ${2 * unit}px);
    margin: ${1 * unit}px;
  }
`
