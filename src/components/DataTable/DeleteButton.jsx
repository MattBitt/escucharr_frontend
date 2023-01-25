import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteButton = ({ url }) => {
  return (
    <IconButton component={Link} to={'' + url} tooltip="Delete">
      <DeleteIcon />
    </IconButton>
  )
}
