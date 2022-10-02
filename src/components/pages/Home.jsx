import Box from '@mui/material/Box';

export default function Home() {
  return (
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
  );
}
