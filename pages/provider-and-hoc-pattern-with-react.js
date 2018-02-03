import Article, { Paragraph, Code, SmallCode, List, Item, Link } from '../components/Article'

export default () => (
  <Article>
    <Paragraph>
      The <strong>provider pattern</strong> is useful for passing down data to nested components.
      The provider component is basically a parent component that wraps an arbitrary number of child
      components and makes data available to them. The pattern makes use of of React's{' '}
      <SmallCode>context</SmallCode> which is a shared data store between parent and child
      components. Let's dig into an example of passing down an object holding theme data.
    </Paragraph>
    <Code>{snippet1}</Code>
    <Paragraph>
      We define the type of data that we want to pass to child components using{' '}
      <SmallCode>PropTypes</SmallCode>. The <SmallCode>getChildContext</SmallCode> method return the
      object, which will be available in all child components. Finally the provider component simply
      returns the children passed to it. Once instantiated, we provide the actual theme to the
      provider component.
    </Paragraph>
    <Code>{snippet2}</Code>
    <Paragraph>
      Now we only need to access the theme data from a child component - but how? Firstly, the child
      component <strong>must</strong> specify the data it expects to receive from its context using{' '}
      <SmallCode>contextTypes</SmallCode>. Having done this, all left to do is access{' '}
      <SmallCode>this.context[__CONTEXT_KEY__]</SmallCode> and we are good to go.
    </Paragraph>
    <Code>{snippet3}</Code>
    <Paragraph>However, we are faced with a few problems:</Paragraph>
    <List>
      <Item>
        We have to define <SmallCode>contextTypes</SmallCode> in every single child component that
        needs to access the context
      </Item>
      <Item>
        We are forced to include the logic that pulls the data from the context in every child
        component
      </Item>
    </List>
    <Paragraph>
      The higher order component (HOC) to the rescue! An HOC is simply a "wrapper" component that
      augments the component it wraps and returns it. In our case it will pull the theme from the
      context and pass it down as a <SmallCode>prop</SmallCode> to the component it received.
    </Paragraph>
    <Code>{snippet4}</Code>
    <Paragraph>
      With the help of the HOC, we can access the theme directly from the{' '}
      <SmallCode>props</SmallCode>. Voila!
    </Paragraph>
    <Code>{snippet5}</Code>
    <Paragraph>
      A full example is available on{' '}
      <Link href="https://codesandbox.io/s/24nmvjm7pp">CodeSandbox</Link>.
    </Paragraph>
  </Article>
)

/*
-----------------------------------------------------------------------------------
|
| Code snippets
|
-----------------------------------------------------------------------------------
*/

const snippet1 = `const __CONTEXT_KEY__ = 'theme'

class ThemeProvider extends React.Component {
  static childContextTypes = {
    [__CONTEXT_KEY__]: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { [__CONTEXT_KEY__]: this.props.theme }
  } 

  render() {
    return this.props.children
  }
}`

const snippet2 = `const theme = {
  backgroundColor: green,
}

<ThemeProvider theme={theme}>
  <Component />
</ThemeProvider>
`

const snippet3 = `class Component extends React.Component {
  static contextTypes = {
    theme: PropTypes.object,
  }

  render() {
    const theme = this.context[__CONTEXT_KEY__]
    return (
      <h1 style={{ backgroundColor: theme.backgroundColor }}>Hello!</h1>
    )
  }
}
`

const snippet4 = `const withTheme = Component => {
  class Wrapper extends React.Component {
    static contextTypes = {
      theme: PropTypes.object,
    }

    render() {
      const theme = this.context[__CONTEXT_KEY__]
      return <Component theme={theme} {...this.props} />
    }
  }

  return Wrapper
}`

const snippet5 = `const ComponentWithTheme = withTheme(Component)

<ThemeProvider theme={theme}>
  <ComponentWithTheme />
</ThemeProvider>
`
