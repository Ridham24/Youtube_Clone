import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchApi } from '../../src/FetchApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Search = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()
  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box p={2} sx={{ height: { sx: 'auto', md: '92vh' }, flex: '2' }}>
        <Typography variant="h5">
          <span
            style={{ fontWeight: 'bold', color: '#fff', paddingRight: '2px' }}
          >
            Search results for :
          </span>
          <span style={{ fontWeight: 'bold', color: '#fc1503' }}>
            {searchTerm}
          </span>
        </Typography>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} flag={false} />
        </Box>
      </Box>
    </Stack>
  )
}
export default Search
