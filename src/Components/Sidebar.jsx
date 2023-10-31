import {
  Home,
  Code,
  MusicNote,
  School,
  GraphicEq,
  OndemandVideo,
  SportsEsports,
  LiveTv,
  FitnessCenter,
  Checkroom,
  FaceRetouchingNatural,
  TheaterComedy,
  DeveloperMode,
} from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useState } from 'react'
const categories = [
  { name: 'New', icon: <Home /> },
  { name: 'Coding', icon: <Code/> },
  { name: 'ReactJS', icon: <Code /> },
  { name: 'NextJS', icon: <Code /> },
  { name: 'Music', icon: <MusicNote /> },
  { name: 'Education', icon: <School /> },
  { name: 'Podcast', icon: <GraphicEq /> },
  { name: 'Movie', icon: <OndemandVideo /> },
  { name: 'Gaming', icon: <SportsEsports /> },
  { name: 'Live', icon: <LiveTv /> },
  { name: 'Sport', icon: <FitnessCenter /> },
  { name: 'Fashion', icon: <Checkroom /> },
  { name: 'Beauty', icon: <FaceRetouchingNatural /> },
  { name: 'Comedy', icon: <TheaterComedy /> },
  { name: 'Gym', icon: <FitnessCenter /> },
  { name: 'Crypto', icon: <DeveloperMode /> },
]
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  const [selected,setSelected]=useState(selectedCategory)
  return (
    <Stack
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { sx: 'row', md: 'column' },
      }}
    >
      {categories.map((box) => (
        <button
          className="category-btn"
          onClick={() => {
            setSelectedCategory(box.name)
            setSelected(box.name)
          }}
          style={{
            backgroundColor: box.name === selected && '#fc1503'
          }}
        >
          <span style={{ color: box.name === selected ? '#fff' : '#fc1503' ,marginRight:'15px'}}>
            {box.icon}
          </span>
          <span style={{ color:'#fff' }}>
            {box.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}
export default Sidebar
