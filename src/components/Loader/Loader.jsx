import { Oval } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pt="100px">
      <Oval
        height={80}
        width={80}
        color="#1976d2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1976d2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
}
