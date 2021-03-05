import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({ title, image, type, year }) {
  const classes = useStyles();
  const [like, setLike] = useState(0);

  const increaseMyLike = () => {
    const currentLike = like
    setLike(currentLike + 1);
  }
  const decreaseMyLike = () => {
    const currentLike = like
    setLike(currentLike - 1);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Type: ${type} Year: ${year}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ThumbUpIcon />}
          onClick={increaseMyLike}
        >
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ThumbDownIcon />}
          onClick={decreaseMyLike}
        >
        </Button>

        <div>{like}</div>
      </CardActions>
    </Card>
  );
}
