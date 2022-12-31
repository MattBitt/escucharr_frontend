// import SourceForm from '../components/SourceForm'
// import TrackForm from '../components/TrackForm'

// export default function Home() {
//   return (
//     <div className="container">
//         <div className="row">
//           <div className="right-pane col"><SourceForm /></div>
//           <div className="left-pane col"><TrackForm /></div>
//         </div>
//       </div>
//   )
// }

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Customize Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <button type="submit" className="btn btn-primary">
              <span className="bi-pencil-square" /> Search
            </button>
            <button type="submit" className="btn btn-secondary">
              <span className="bi-search" /> Search
            </button>

            <div className="col-xl pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              laborum hic, quia maiores animi nobis eligendi est eos saepe
              architecto reiciendis! Aliquam inventore distinctio reprehenderit
              corporis amet assumenda officiis dolorem, animi delectus sunt
              dolor commodi. Adipisci nam nemo labore eligendi quas, rem ipsum
              iusto eveniet itaque vero necessitatibus! Quas, cupiditate tempora
              unde nam exercitationem libero aut labore deserunt nesciunt
              voluptate dignissimos quis porro reprehenderit maiores excepturi,
              esse, nisi dolores sit tenetur voluptatum corrupti alias provident
              pariatur? Quam illo unde autem, fugit numquam dolores, odio sed
              rem saepe exercitationem fuga, nisi soluta sunt officiis!
              Similique, vero repudiandae quae dignissimos fuga natus!
            </div>

            <div className="col-xl pt-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              aliquid, cumque nisi tenetur similique labore repudiandae voluptas
              qui hic blanditiis beatae sapiente autem dolore! Quam, cupiditate
              nostrum laboriosam blanditiis vel ratione, repellat, incidunt modi
              tempore soluta ab nesciunt? Ab similique illum suscipit
              exercitationem et, aut quisquam neque atque recusandae rem
              delectus facilis. Magnam rerum fugit minus explicabo vel! Hic
              quibusdam laudantium dolorum, pariatur ipsam veritatis voluptate
              animi, nesciunt dolorem autem dicta. Debitis quae nam dicta autem
              ipsum mollitia! Ipsum ipsa, molestias fugiat officiis aut illum
              ullam architecto maxime labore vitae. Ipsum quos neque rerum, esse
              iste quo explicabo eos ipsa?
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5 mb-5 text-center">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
      </div>
    </div>
  )
}
