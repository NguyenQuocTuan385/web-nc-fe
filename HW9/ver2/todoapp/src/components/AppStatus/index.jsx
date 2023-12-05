import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

export const AppStatus = () => {
  const status = useSelector((state) => state.status);
  return (
    <>
      {(status.isLoading) && <CircularProgress />}
    </>
  )
}

export default AppStatus;