import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectItem = ({ data }) => (
  <Card className="content-box__card" sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <a href="/#!">
        <Button size="small" color="primary">
          View
        </Button>
      </a>
    </CardActions>
  </Card>
);

ProjectItem.propTypes = {
  data: PropTypes.shape([]).isRequired,
};

export default ProjectItem;
