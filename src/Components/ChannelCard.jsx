import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CheckCircle from '@mui/icons-material/CheckCircle'
const demoProfilePicture =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
const demoChannelUrl = 'UCmXmlB4-HJytD7wek0Uo97A'
const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        width: { md: '305px', xs: '100%' },
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
        alignItems: 'center',
        borderRadius: 0,
        borderWidth: 0,
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.snippet?.channelId || channelDetail?.id}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6" sx={{ color: '#fff' }}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ color: '#fff' }}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
export default ChannelCard
