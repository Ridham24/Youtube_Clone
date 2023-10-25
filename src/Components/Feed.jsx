import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }, height: { sx: 'auto', md: '92vh' } }}>
        <Sidebar/>
        <Typography variant="body2" sx={{color:'#fff'}} className="copyright">
          Copyright by Ridham Goel!!
      </Typography>
      </Box>
    </Stack>
  )
}
export default Feed