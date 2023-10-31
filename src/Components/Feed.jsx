import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'
import Videos from './Videos'
import {FetchApi} from '../../src/FetchApi'
import { useEffect, useState } from "react"
import axios from "axios"
const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos,setVideos]=useState([])
  useEffect(() => {
   FetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items)) 
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
          height: { sx: 'auto', md: '92vh' },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography
          variant="body2"
          sx={{ color: '#fff' }}
          className="copyright"
        >
          Copyright by Ridham Goel!!
        </Typography>
      </Box>
      <Box p={2} sx={{ height: { sx: 'auto', md: '92vh' }, flex: '2' }}>
        <Typography variant="h5">
          <span style={{ fontWeight: 'bold', color: '#fff',paddingRight:'2px' }}>{selectedCategory}</span>
          <span style={{ fontWeight: 'bold', color: '#fc1503' }}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}
export default Feed