const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg py-3 px-5 bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ชื่อเว็บไซต์</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">หน้าหลัก</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/CreateCompany">เพิ่มบริษัท</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/CreateJob">โพสต์งาน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Serch">ค้นหา</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Description">รายละเอียด</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Company">บริษัท</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;