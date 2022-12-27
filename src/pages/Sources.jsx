import { Link, Outlet } from 'react-router-dom';


const Sources = ( {sources} ) => {
  return ( 
    <>
    <h1>Sources</h1>;
    <h2> Data table should go here</h2>
    <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <Link to={source.id}>
              {source.fullName}
            </Link>
          </li>
        ))}
      </ul>

      
      <Outlet />
    </>
    )
  };
    
  export default Sources;
  