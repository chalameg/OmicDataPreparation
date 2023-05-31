import { Box, Typography } from '@material-ui/core';
import MainNavigation from '../header/Header';
import './PageContent.css';

function PageContent({ title, children }) {
  return (
    <>
    <MainNavigation/>
    <Box className="content">
      <Typography variant='h1'>{title}</Typography>
      {children}
    </Box>
    </>
  );
}

export default PageContent;