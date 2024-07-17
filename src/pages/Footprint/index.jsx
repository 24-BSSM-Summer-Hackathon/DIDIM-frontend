import React from 'react';
import * as s from './style';
import Footer from '../../components/Footer';

const Footprint = () => {
  const locations = [
    { id: 1, location: '부산 진구', address: '개금본동로 23번길', timeAgo: '7분전' },
    { id: 2, location: '부산 진구', address: '개금본동로 23번길', timeAgo: '7분전' },
    { id: 3, location: '부산 진구', address: '개금본동로 23번길', timeAgo: '7분전' },
  ];

  return (
    <s.Container>
      <s.Header>
        <s.Title>발자국</s.Title>
      </s.Header>
      <s.Content>
        {locations.map(location => (
          <s.Card key={location.id}>
            <div>
              <s.Location>{location.location}</s.Location>
              <s.Address>{location.address}</s.Address>
            </div>
            <s.TimeAgo>{location.timeAgo}</s.TimeAgo>
          </s.Card>
        ))}
      </s.Content>
      <Footer/>
    </s.Container>
  );
};

export default Footprint;
