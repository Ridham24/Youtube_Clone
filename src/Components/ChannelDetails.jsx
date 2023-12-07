import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../../src/FetchApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { Box } from '@mui/material'

const ChannelDetails = () => {
  const { id } = useParams()
  const [Channeldetail, setChanneldetail] = useState(null)
  const [Videodetail, setVideodetail] = useState(null)
  const [Load,setLoad]=useState(true)
  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChanneldetail(data?.items[0])
    )
  }, [id])
  useEffect(() => {
    setLoad(true)
    FetchApi(`search?channelId=${id}&part=snippet`).then((data) => {
      setVideodetail(data?.items)
      setLoad(false)
    }
    )
  }, [id])
  console.log(Videodetail)
  return (
    <Box sx={{ minHeight: '95vh' }}>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(244,72,240,1) 6%, rgba(196,0,239,1) 36%, rgba(113,187,226,1) 59%, rgba(18,221,209,1) 78%, rgba(0,255,188,1) 96%)',
            zIndex: 10,
            height: '250px',
          }}
        />
        <ChannelCard channelDetail={Channeldetail} marginTop="-110px" />
        <Box display='flex' p='2'>
          <Box sx={{ mr: { sm: '100px' } } }/>
          <Videos videos={Videodetail} Load={Load}/>
        </Box>
      </Box>
    </Box>
  )
}
export default ChannelDetails
