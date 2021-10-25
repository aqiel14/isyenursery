/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'Fast Performance',
    title: 'Kontak',
    text: '',
    contacts: [
      {
        id: 1,
        name: 'WhatsApp',
        text: '0815-1960-4298',
        icon: <FaWhatsapp />,
      },
      {
        id: 2,
        name: 'Email',
        text: 'isyenursery@gmail.com',
        icon: <FaMailBulk />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Jadwal',
    text: '',
    hours: {},
  },
  // {
  //   id: 3,
  //   imgSrc: Subscription,
  //   altText: 'Partnership deal',
  //   title: 'Partnership deal',
  //   text:
  //     'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  // },
  // {
  //   id: 4,
  //   imgSrc: Support,
  //   altText: 'Customer Support',
  //   title: 'Customer Support',
  //   text:
  //     'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  // },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader slogan='Kontak' title='Hubungi Kami' />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              hours={item.hours}
              contacts={item.contacts}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
