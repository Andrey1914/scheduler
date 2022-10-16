import Box from '@mui/material/Box';
import { Svg } from './FooterStyled';

export default function Footer() {
  return (
    <Box
      component="footer"
      backgroundColor="#1976d2"
      display="flex"
      alignItems="center"
      py={2}
    >
      <Box display="flex" alignItems="center" mx="auto" color="#fff">
        © 2022 | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </Box>
    </Box>
  );
}
