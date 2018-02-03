/*
-----------------------------------------------------------------------------------
|
| Articles
|
-----------------------------------------------------------------------------------
*/

const articles = {
  'provider-and-hoc-pattern-with-react': {
    title: 'Provider & HOC Pattern with React',
    tags: ['Code', 'React'],
    date: new Date('2018-02-02'),
  },
  'camino-de-santiago': {
    title: 'Camino de Santiago',
    tags: ['Hiking'],
    date: new Date('2016-06-05'),
  },
}

/*
-----------------------------------------------------------------------------------
|
| Methods
|
-----------------------------------------------------------------------------------
*/

export const getAll = () => Object.keys(articles).map(slug => ({ ...articles[slug], slug }))

export const getBySlug = slug => ({ ...articles[slug], slug })
