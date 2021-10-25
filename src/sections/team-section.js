/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Porto1 from 'assets/team/member-1.jpg';
import Porto2 from 'assets/team/member-2.jpg';
import Porto3 from 'assets/team/member-3.jpg';
import Porto4 from 'assets/team/member-4.png';
import Porto5 from 'assets/team/member-5.png';
import Porto6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Porto1,
    altText: 'Wika Sarinah',
    title: 'Wika Sarinah',
  },
  {
    id: 2,
    imgSrc: Porto2,
    altText: 'Lobelisco Uno Paramount Gading Serpong',
    title: 'Lobelisco Uno Paramount Gading Serpong',
  },
  {
    id: 3,
    imgSrc: Porto3,
    altText: 'Landscape Gedung Kintaka PU Citereup',
    title: 'Landscape Gedung Kintaka PU Citereup',
  },
  {
    id: 4,
    imgSrc: Porto1,
    altText: 'Client4',
    title: 'Client4',
  },
  {
    id: 5,
    imgSrc: Porto2,
    altText: 'Client5',
    title: 'Client5',
  },
  {
    id: 6,
    imgSrc: Porto3,
    altText: 'Client6',
    title: 'Client6',
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader slogan='' title='Portofolio' />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              imgSrc={item.imgSrc}
              altText={item.altText}
              title={item.title}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
