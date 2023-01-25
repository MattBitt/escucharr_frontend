import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <p>Escucharr - Navigation</p>
      <p>
        <Link to="/sources">Sources </Link>
      </p>
      <p>
        <Link to="/sources/187">Source # 187 </Link>
      </p>
      <p>
        <Link to="/tracks">Tracks </Link>
      </p>
      <p>
        <Link to="/tracks/132">Track # 132 </Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}
