import { useState } from "react"
import { useEffect } from "react"
import { useParams,Link } from "react-router-dom"
import { Box, Stack, Typography } from '@mui/material'
import { FetchApi } from '../FetchApi'
import ReactPlayer from 'react-player'
import { CheckCircle } from "@mui/icons-material"
import Videos from './Videos'

const VideoDetails = () => {
  const { id } = useParams()
  const [Load,setLoad]=useState(true)
  const [videoDetails, setVideodetails] = useState(null)
  const [related, setRelated] = useState(null)
  useEffect(() => {
    FetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideodetails(data.items[0]))
    setLoad(true)
    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setRelated(data.items))
    setLoad(false)
  }, [id])
  console.log(videoDetails);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ md: 'row', xs: 'column' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography variant="h5" color="#fff" p={2}>
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              color="#fff"
              px={2}
            >
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', paddingLeft: '2' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography variant="body1">
                  {parseInt(
                    videoDetails?.statistics?.viewCount
                  ).toLocaleString()}{' '}
                  views
                </Typography>
                <Typography variant="body1">
                  {parseInt(
                    videoDetails?.statistics?.likeCount
                  ).toLocaleString()}{' '}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={1}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={related} Load={Load} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}
export default VideoDetails