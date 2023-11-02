import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CheckCircle from '@mui/icons-material/CheckCircle'
const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
const demoVideoUrl = '/video/GDa8kZLNhJ4';
const demoChannelTitle = 'Ridham Goel';
const demoVideoTitle = 'Cant render Image';
const VideoCard = ({ videoDetail}) => {
  return (
    <Card
      sx={{
        width: { md: '305px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: 0,
        borderWidth: 0,
      }}
    >
      <Link to={`/video/${videoDetail?.id?.videoId || demoVideoUrl}`}>
        <CardMedia
          image={
            videoDetail?.snippet?.thumbnails?.high?.url || demoThumbnailUrl
          }
          alt={videoDetail?.snippet?.title}
          sx={{ width: { sm: '358px', xs: '100%' }, height: '180px' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={`/video/${videoDetail?.id?.videoId || demoVideoUrl}`}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#FFF', fontWeight: 'bold' }}
          >
            {videoDetail?.snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={`/video/${videoDetail?.id?.channelId || demoChannelUrl}`}>
          <Typography
            variant="subtitle2"
            sx={{ color: 'gray', fontWeight: 'bold' }}
          >
            {videoDetail?.snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
export default VideoCard