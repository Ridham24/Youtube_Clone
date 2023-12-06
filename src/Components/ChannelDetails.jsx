import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../../src/FetchApi'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import { Box } from '@mui/material'

const ChannelDetails = () => {
  const { id } = useParams()
  const [ChannelDetail, setChanneldetail] = useState(null)
  const [VideoDetail, setVideodetail] = useState(null)
  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChanneldetail(data?.items[0])
    )
    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideodetail(data?.items)
    )
  }, [id])
  console.log(ChannelDetail, VideoDetail)
  return (
    <Box sx={{ minHeight: '95vh' }}>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(244,72,240,1) 6%, rgba(196,0,239,1) 36%, rgba(113,187,226,1) 59%, rgba(18,221,209,1) 78%, rgba(0,255,188,1) 96%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <div
          style={{
            marginTop: '-93px',
          }}
        >
          <ChannelCard channelDetail={ChannelDetail} />
        </div>
      </Box>
    </Box>
  )
}
export default ChannelDetails
