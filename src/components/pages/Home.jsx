import Box from '@mui/material/Box';
import { Image } from './HomeStyled';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../GlobalStyles';

export default function Home() {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <Image>
        <Box
          width="75%"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginX: 'auto',
          }}
        >
          <h1>
            Sheduler{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
        </Box>
      </Image>
    </div>
  );
}
