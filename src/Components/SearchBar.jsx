import { Box, Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material'
import { useState } from 'react';
const SearchBar = () => {
  const [text, setText] = useState('')
  console.log(text);
  return (
    <Paper component="form" sx={{ borderRadius: 20, height: 35, width: 350}}>
      <input
        placeholder='Search...'
        className="search-bar"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton >
        <Search className="search_icon" />
      </IconButton>
    </Paper>
  )
}
export default SearchBar