/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import Head from 'next/head'
import { mobile } from '../components/style-helpers'

/*
-----------------------------------------------------------------------------------
|
| Component
|
-----------------------------------------------------------------------------------
*/

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html,
      body {
        margin: 0px;
        padding: 0px;
        font-size: 18px;
        background-color: #f7f7f7;
      }

      @media (max-width: 600px) {
        html,
        body {
          font-size: 14px;
        }
      }

      h1,
      h2,
      h3,
      h4,
      p,
      ul,
      ol,
      li,
      a {
        margin: 0px;
        padding: 0px;
      }

      h1,
      h2,
      h3 {
        margin-top: 1.5rem;
      }

      h1,
      h2,
      p,
      ul {
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      li {
        line-height: 1.5rem;
      }

      ul {
        padding-left: 16px;
      }

      * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        font-smoothing: antialiased !important;
        font-feature-settings: 'kern';
        font-kerning: normal;
        color: #2c2c2c;
      }

      a {
        color: inherit;
        border-bottom: 1px solid #2c2c2c;
        text-decoration: none;
      }
    `}</style>
  </div>
)
