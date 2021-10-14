import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComponent = (props) => {
  const { loading = false } = props;

  return (
    <div>
      {loading ? (
        <Grid container wrap="wrap">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box sx={{ width: 320, marginLeft: 10, my: 5 }} key={index}>
              <Skeleton animation="wave" variant="rectangular" width={320} height={118} />
              <Box sx={{ pt: 3.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
                <Skeleton width="20%" sx={{ pt: 2.5 }} />
              </Box>
            </Box>
          ))}
        </Grid>
      )
        : ''}
    </div>
  );
};

SkeletonComponent.propTypes = {
  loading: PropTypes.bool,
};

SkeletonComponent.defaultProps = {
  loading: false,
};

export default SkeletonComponent;
