import Article, {
  Paragraph,
  Link,
  SubHeading,
  Image,
  List,
  Item,
  ImageGrid,
} from '../components/Article'
import { getPath } from '../components/helpers'

export default ({ url: { asPath: slug } }) => (
  <Article slug={slug}>
    <Paragraph>
      In the summer of 2015 I started out on an amazing journey with my friend Andrei. We decided to
      dedicate one month to walking the <strong>Camino de Santiago</strong>. Before we knew it, we
      had met many wonderful people that would turn out to become some of our closest friends.
    </Paragraph>

    <SubHeading>History</SubHeading>
    <Paragraph>
      Since the Middle Ages pilgrims have been walking towards Santiago as it is believed that the
      remains of St. James are buried there; hence the English name St. James's Way. The symbol for
      the Camino is a scallop shell - in the Middle Ages, bringing back a scallop shell was the
      proof for having visited the Atlantic Coast. The scallop shell also holds great symbolic
      power, as the grooves in the shell meet at the same point and thereby symbolizes the joint
      goal of reaching the shrine in Santiago. The camino is gaining a lot of popularity in recent
      times. Today more than 200,000 start the pilgrimage towards Santiago, while only few attempted
      the same in the 1980s. Since 1987 the Camino de Santiago has been present on UNESCO's list of{' '}
      <Link href="https://en.wikipedia.org/wiki/World_Heritage_Site">world heritages sites</Link>.
    </Paragraph>

    <SubHeading>Pilgrimage</SubHeading>
    <Paragraph>
      We decided to walk Camino Francés which starts in the small French town St. Jean Pied de Port
      and ends in Santiago de Compostela. The total route amounts to roughly 800 kilometers. We also
      planned to walk an additional 90 kilometers to the city of Fisterra, which plays a central
      role in the pilgrimage. In pre-Christian times Fisterra was regarded as the end of the world
      due to its western location and proximity to the endless Atlantic ocean.
    </Paragraph>

    <Paragraph>
      When starting out in St. Jean Pied de Port we received a hiking guide suggesting daily hikes
      all the way to Santiago. It was suggested to walk an average of 23 kilometers per day and thus
      reach Santiago in 35 days. The number of kilometers that one is able to walk every day highly
      depends on the terrain and the weather. We experienced extremes in both ends - walking in 45 ℃
      from Pamplona and traversing the steep Pyrenees. It was a great comfort to have the guide at
      hand for looking ahead while walking, but we didn't strictly follow it. We ended up walking a
      bit ahead and completed the camino in just 28 days.
    </Paragraph>

    <Image
      src={getPath(slug, 'pyrenees.jpg')}
      title="The beautiful view from the Pyrenees on our first morning."
    />

    <Paragraph>
      Walking the camino, you are taken from sight to sight. Never once do you have to worry whether
      you could experience something more elsewhere; the camino is packed with experiences and takes
      your pass the most adorable villages, magnificent churches and lively town squares. It is
      therefore recommended to leave behind the tourist mindset and just indulge the camino
      experiences coming your way.
    </Paragraph>

    <SubHeading>Accommodation</SubHeading>
    <Paragraph>
      Throughout the pilgrimage you find plenty of opportunities for accommodation. In most cities,
      you find hostels that are publicly owned and often a bit cheaper than the private
      alternatives. Additionally many churches and monasteries along the way open their doors to
      pilgrims. We found these experiences to be the most memorable and provide the most authentic
      experiences. The prices range from 5-15 EUR per night (often including a simple meal).
    </Paragraph>

    <Image
      src={getPath(slug, 'group.jpg')}
      title="Happily wearing our sandals after a long day on the road. Time to rest for the night."
    />

    <Paragraph>
      Staying for the night is a wonderful opportunity to get to know the other pilgrims. It was not
      unusual to sleep 20 people in the same room and engaging in conversations was therefore
      inevitable. If you desire more comfort, many hostels offer both private and double rooms.
      Despite it being hard to pick, here are a few suggestions for hostels worth a visit:
    </Paragraph>

    <List>
      <Item>
        <Link hreF="http://alberguesanmiguel.com/en/inicio-2/">Albergue San Miguel</Link> (one day
        hike from Léon)
      </Item>
      <Item>
        <Link href="http://www.hsanmartinpinario.com/">Hospederia San Martín Pinario</Link> (ask for
        a pilgrims room; there is also an ordinary hotel)
      </Item>
    </List>

    <SubHeading>People</SubHeading>
    <Paragraph>
      On the Camino people are everything. The camino is a special journey; the daily grind is left
      at home, the phone barely has signal and every day passes by in a gentle pace of memorable
      moments. On top of this, you stay active for the entire day and spend every moment in nature.
      This, I believe, brings forth the best in people.
    </Paragraph>

    <Paragraph>
      The motivations for walking the camino are as manyfold as the number of places on your feet
      where you can have blisters. Some people have faced a life-changing event at home and seek the
      contemplation of the open road, while others seek out the physical challenge of walking
      nonstop for one month. Personally, I saw the camino as an opportunity to do something
      completely different and spend some quality time with Andrei.
    </Paragraph>

    <ImageGrid
      images={[
        {
          src: getPath(slug, 'break.jpg'),
          title: 'Taking a break after descending from the Mountain of Forgiveness',
        },
        {
          src: getPath(slug, 'iron-pilgrim.jpg'),
          title: 'Hanging out with Klara, Jessie and Marie',
        },
        {
          src: getPath(slug, 'family.jpg'),
          title: 'A family photo',
        },
        {
          src: getPath(slug, 'leon.jpg'),
          title: 'Sitting at the central square of Léon',
        },
        {
          src: getPath(slug, 'statue.jpg'),
          title: "Posing at a pilgrim's statue",
        },
        {
          src: getPath(slug, 'water-and-wine.jpg'),
          title: 'The amazing taps - on with water and one with wine',
        },
      ]}
    />

    <Paragraph>
      It has been wonderful staying in touch with my friends from the camino. On the camino you meet
      many other pilgrims every single day and it is impossible to stay in touch with everyone. In
      the context of our society's constant and pervasive networking (yes, I am guilty), these
      one-time spontaneous good deeds and great moments hold a lot of beauty - at home, such are
      unfortunately far too rare. This made a tremendous impression on me and I have tried my best
      to bring it back home.
    </Paragraph>

    <SubHeading>Religion</SubHeading>
    <Paragraph>
      Given the nature of the camino being a pilgrimage, the topic of religion is omnipresent. I
      started the camino with my rational, Scandinavian, fact-driven mind equipped with a strong
      denial of transcendent powers. This turned out to give rise to many interesting and intense
      discussions.
    </Paragraph>

    <Paragraph>
      One of my greatest struggles was to understand how one could possibly believe that all the
      biblical figures and events wasn't just fiction. I quickly realized this emphasis lacked
      nuance and prevented the discussion to depart any further. I greatly benefited from many long
      discussions with my dear friend Karel, a strongly devoted Christian fighting for unity through
      [TLIG](http://www.tlig.org/), who opened my eyes to the symbolic meaning of biblical
      references. Digging more into religious symbolism I read [The Power of
      Myth](http://www.goodreads.com/book/show/35519.The_Power_of_Myth) by Joseph Campbell - this
      book is a **must read** for anyone wanting to nuance their view on religion and was a perfect
      match for the pilgrimage.
    </Paragraph>

    <Image
      src={getPath(slug, 'burgos-cathedral.jpg')}
      title="The breathtaking cathedral of Burgos."
    />

    <Paragraph>
      Being more aware of religion than in my daily life, I started noticing the warmth, compassion
      and brotherhood with which religious people met on the camino. Two people who prior to the
      meeting had been total strangers suddenly had a strong emotional bond and the same frame of
      reference. As an atheist, one cannot avoid envying this. In essence, the camino made me aware
      of the positive aspects of religion. This was achieved mostly by self-discovery fueled by deep
      conversations with people on the road.
    </Paragraph>

    <SubHeading>Culinary adventures</SubHeading>
    <Paragraph>
      I am admittedly a foodie and the topic of my culinary experiences can therefore not be left
      out. The Spanish cuisine offers a range of delicious goodies including paella, tortilla, jamón
      serrano, pulpo, great wine and of course an endless range of tapas.
    </Paragraph>

    <Paragraph>
      A typical day started out with a cup of strong coffee and a tortilla sandwich, which was
      usually offered at almost every restaurant and cafe. When having lunch and dinner many
      restaurants offered a *pilgrims menu* consisting of basic and nutritious dishes. This was most
      often the cheapest alternative at around 10 EUR for two courses and a drink. Due to the
      constant physical effort, the tastiness of every meal was greatly amplified and made even the
      smallest bite a memorable moment.
    </Paragraph>

    <ImageGrid
      images={[
        {
          src: getPath(slug, 'paella.jpg'),
          title: 'A delicious paella served on our last night in Santiago',
        },
        {
          src: getPath(slug, 'drinks.jpg'),
          title: 'Celebrating our amazing experiences with a drink in Santiago',
        },
        {
          src: getPath(slug, 'pasta.jpg'),
          title: 'haring a meal together at a hostel',
        },
        {
          src: getPath(slug, 'beer.jpg'),
          title: 'A refreshing midday beer',
        },
        {
          src: getPath(slug, 'tapas.jpg'),
          title: 'One of the better pilgrim menus, tapas!',
        },
        {
          src: getPath(slug, 'clams.jpg'),
          title: 'The delicious jackknife clam served at Fisterra',
        },
      ]}
    />

    <Paragraph>
      At many hostels there kitchen facilities were available. Some pilgrims cook for themselves
      every single day, which is the cheapest way of getting by. We cooked 4-5 times in total; when
      arriving late in the afternoon we sought the comfort of having our meals prepared.
    </Paragraph>

    <SubHeading>Looking back</SubHeading>
    <Paragraph>
      It is impossible to conclude and make a final remark about my experiences on the camino. I can
      however only say that I believe everyone should give it a go. The only prerequisite for being
      generously rewarded when walking the camino is having an open mind. To me the camino marked a
      period of change in my life; I believe the pace of walking and the long hours on the road gave
      rise to being brutally responsive and honest to myself. Tie your shoes and get on the road.
    </Paragraph>

    <Image src={getPath(slug, 'end.jpg')} title="We made it to the end." />
  </Article>
)
