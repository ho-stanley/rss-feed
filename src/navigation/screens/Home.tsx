import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, List} from 'react-native-paper';

type RssFeed = {
  title: string;
  items: Array<{
    title: string;
    description: string;
    link: string;
  }>;
};

const mockFzFeed: RssFeed = {
  title: 'FZ.se',
  items: [
    {
      title:
        'Kritikerkåren - Star Wars Jedi: Survivor bättre än Fallen Order, men pc-prestandan haltar',
      description: 'Konsolversionerna verkar flyta bättre.',
      link: 'https://www.fz.se/artikel/293760-kritikerkaren-star-wars-jedi-survivor-battre-an-fallen-order-men-pc-prestandan-haltar',
    },
    {
      title: 'Kolla in gameplay från Flashback 2',
      description: 'Ska släppas i slutet av 2023.',
      link: 'https://www.fz.se/artikel/293759-kolla-in-gameplay-fran-flashback-2',
    },
  ],
};

const mockDnFeed: RssFeed = {
  title: 'DN.se - Dagens Nyheter',
  items: [
    {
      title: 'Rysare när Djurgården förstörde Modos fest',
      description:
        'En fullsatt arena försökte sjunga och heja fram sitt Modo till seger – och SHL – men Djurgården förstörde den tänkta festen.',
      link: 'https://www.dn.se/sport/rysare-nar-djurgarden-forstorde-modos-fest/',
    },
    {
      title: 'Biden: Kärnvapenattack slutet för Nordkorea',
      description: 'Presidenterna Yoon Suk-Yeol och Joe Biden.',
      link: 'https://www.dn.se/varlden/biden-karnvapenattack-slutet-for-nordkorea/',
    },
    {
      title:
        'Martin Gelin: Republikanernas Biden-film visar hur AI kan förändra nästa val',
      description:
        'Experter varnar för en svallvåg av påhittad information som snabbt kan skapas med artificiell intelligens.',
      link: 'https://www.dn.se/varlden/martin-gelin-republikanernas-biden-film-visar-hur-ai-kan-forandra-nasta-val/',
    },
  ],
};

const Icon = (props: {color: string}) => <List.Icon {...props} icon="rss" />;

function Home(): JSX.Element {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Feed" />
        <Appbar.Action
          icon="plus"
          accessibilityLabel="Add feed"
          onPress={() => {}}
        />
      </Appbar.Header>
      <ScrollView>
        <List.Accordion title={mockFzFeed.title} left={Icon}>
          {mockFzFeed.items.map(item => (
            <List.Item
              key={item.link}
              title={item.title}
              description={item.description}
              onPress={() => console.log(item.link)}
            />
          ))}
        </List.Accordion>
        <List.Accordion title={mockDnFeed.title} left={Icon}>
          {mockDnFeed.items.map(item => (
            <List.Item
              key={item.link}
              title={item.title}
              description={item.description}
              onPress={() => console.log(item.link)}
            />
          ))}
        </List.Accordion>
      </ScrollView>
    </>
  );
}

export default Home;
