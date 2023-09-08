import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function CardHeaderSubHeader({
  src,
  header,
  subHeader,
  backgroundColor,
  color,
}) {
  return (
    <Card sx={{ maxWidth: "100%", backgroundColor, color }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subHeader}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardHeaderSubHeader.propTypes = {
  src: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any.isRequired,
};
