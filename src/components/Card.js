import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const StyledCard = ({name, htmlCode}) => {
  return (
    <Card sx={{ width: '22%', m: 2 }}>
      <div dangerouslySetInnerHTML={{ __html: htmlCode[0]}} style={{ fontSize: 50, textAlign: 'center' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
