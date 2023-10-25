import YouTubeIcon from '@mui/icons-material/YouTube'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      sx={{ position: 'sticky', background: '#000' }}
    >
      <Link to="/">
        <YouTubeIcon sx={{ color: 'red', fontSize: '50px' }} className='yt_icon' />
      </Link>
      <SearchBar/>
    </Stack>
  )
}
export default Navbar
