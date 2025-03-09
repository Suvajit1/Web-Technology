import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBrnKPYdoOQjECCUCtGyVfg1987s6lr1Ek7Spxk-rRU=";

  const Hot_URL =
    "https://images.unsplash.com/photo-1678025646638-8668650136ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx3YXJtJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D";
  const cold_URL =
    "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMGFyZWF8ZW58MHx8MHx8fDA%3D";
  const Rain_URL =
    "https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxyYWluJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? Rain_URL
              : info.temp > 15
              ? Hot_URL
              : info.temp < 15
              ? cold_URL
              : INIT_URL
          }
          title="synny day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>
              The weather can be describes as <i>{info.weather}</i> and feels
              like: {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
