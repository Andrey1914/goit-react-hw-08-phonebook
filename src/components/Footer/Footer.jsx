import Box from '@mui/material/Box';
import { FooterElem, Svg } from './FooterStyled';

export default function Footer() {
  return (
    <FooterElem>
      <Box display="flex" alignItems="center" mx="auto" color="#1976d2">
        © 2022 | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </Box>
    </FooterElem>
  );
}
