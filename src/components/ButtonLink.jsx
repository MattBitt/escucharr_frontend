import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'

export const ButtonLink = ({ url, state, caption }) => {
  return (
    <Button
      component={Link}
      to={url}
      state={state}
      variant="contained"
      color="secondary"
    >
      {caption}
    </Button>
  )
}
