/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'Alamat',
  title: 'Isye Nursery. Landscaper & Rental Indoor Plant',
  description:
    'Jl. Graha Bintaro Sel. IV No.8, Pd. Kacang Barat, Kec. Pondok Aren, Kota Tangerang Selatan, Banten 15226',
  btnName: 'Rute',
  btnURL:
    'https://www.google.com/maps/place/Isye+Nursery.+Landscaper+%26+Rental+Indoor+Plant/data=!3m1!4b1!4m2!3m1!1s0x2e69fa51afaf2cdf:0x1ec567728415e139',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Box>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5608.851303381702!2d106.6828791913023!3d-6.256249154715584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa51afaf2cdf%3A0x1ec567728415e139!2sIsye%20Nursery.%20Landscaper%20%26%20Rental%20Indoor%20Plant!5e0!3m2!1sen!2sid!4v1635112227796!5m2!1sen!2sid'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </Box>
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='Shape' />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
