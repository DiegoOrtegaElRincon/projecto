import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-brand mt-2 mt-lg-0" href="/">
                <img
                  src="https://yt3.googleusercontent.com/BBAPlDK2ReTnCELrSQooEChlJVwqaJtW_W9ZioszSyDm_Vdun_0XW4QMD1o8VyMyKAOSAxToZw=s176-c-k-c0x00ffffff-no-rj"
                  height="50"
                  alt="Woohojin logo"
                  loading="lazy"
                />
              </a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/vods">VODS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/reviews">REVIEWS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/forum">FORUM</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;