import Box from '@mui/material/Box';
import { Image, Title } from './HomeStyled';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../GlobalStyles';
import background from '../../components/images/bg-img3.jpg';

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Image style={{ backgroundImage: `url(${background})` }}>
        <Box
          width="75%"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginX: 'auto',
          }}
        >
          <Title>
            Sheduler{' '}
            {/* <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span> */}
          </Title>
        </Box>
      </Image>
    </>
  );
}
