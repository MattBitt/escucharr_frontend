import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export const EditButton = ({ url }) => {
  return (
    <IconButton component={Link} to={'' + url} tooltip="Edit">
      <EditIcon />
    </IconButton>
  )
}
