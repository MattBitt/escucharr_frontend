import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <p>
        <Link to="/">Home</Link>
      </p>

      <p>
        <Link to="/whats-playing">Whats Playing</Link>
      </p>
      <p>
        <Link to="/sources">Source Selector</Link>
      </p>
      <p>
        <Link to="/tracks">Track Selector</Link>
      </p>
      <p>
        <Link to="/asdf">404 Test</Link>
      </p>
    </nav>
  )
}

export default NavigationBar
