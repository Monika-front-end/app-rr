import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun',
    author: 'Jan Nowak',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis pariatur incidunt architecto, magni ratione ad rerum maiores nesciunt? Quasi incidunt nostrum voluptatem tempora impedit nesciunt earum sit, mollitia fuga.'
  },
  {
    id: 2,
    title: 'Czym jest paradoks Fermiego?',
    author: 'Ania Kwiatkowska',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore minus rem dignissimos quod illum repudiandae qui odit blanditiis nemo recusandae exercitationem ipsam nesciunt facilis laborum impedit, dolorem quo!'
  },
  {
    id: 3,
    title: 'Ciemna materia i ciemna energia',
    author: 'Jan Kowalski',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cupiditate vero atque voluptatem quasi esse veniam, obcaecati nihil minima, modi fuga debitis nam suscipit expedita tenetur at maiores eum ullam!'
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div>{artList}</div>;
};

export default HomePage;
