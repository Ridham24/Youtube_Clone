import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import React from 'react'
const Videos = ({ videos }) => {
  return (
    <div>
      <Stack flexWrap="wrap" direction="row" gap={2} justifyContent="start">
        {videos.map((video, ind) => (
          <Box>
            {!video.id.channelId && <VideoCard videoDetail={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))}
      </Stack>
    </div>
  )
}
export default Videos
