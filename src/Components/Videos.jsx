import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'
import React from 'react'
const Videos = ({ videos, Load ,flag,direction}) => {
  console.log(videos)
  if (Load) return <Loader />
  return (
    <div>
      <Stack
        flexWrap="wrap"
        direction={direction||"row"}
        gap={2}
        justifyContent="start"
      >
        {videos?.map((video, ind) => (
          <Box key={ind}>
            {!video.id.channelId && <VideoCard videoDetail={video} />}
            {!flag&&video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))}
      </Stack>
    </div>
  )
}
export default Videos
