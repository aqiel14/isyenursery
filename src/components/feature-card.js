/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
  hours,
  contacts,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        {contacts &&
          contacts.map((contact, i) => (
            <Text sx={styles.wrapper.title} key={i}>
              {contact.icon} {contact.text}
            </Text>
          ))}
        {hours && (
          <table sx={styles.table}>
            <tr>
              <th>Senin</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Selasa</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Rabu</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Kamis</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Jumat</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Sabtu</th>
              <td>08.00–17.30</td>
            </tr>
            <tr>
              <th>Jumat</th>
              <td>Tutup</td>
            </tr>
          </table>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },
  table: {
    th: {
      textAlign: 'left',
    },
  },

  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
