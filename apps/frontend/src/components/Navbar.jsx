import * as React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <span className="text-warning">Jobs</span>G7
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" style={{ color: "white" }} href="/">
                  หน้าหลัก
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ color: "white" }}
                  href="/createjob"
                >
                  โพสต์งาน
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  style={{ color: "white" }}
                  href="/createcompany"
                >
                  เพิ่มบริษัท
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
