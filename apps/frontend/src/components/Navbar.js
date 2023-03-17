const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg py-3 px-5 bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">ชื่อเว็บไซต์</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">หน้าหลัก</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/CreateCompany">เพิ่มบริษัท</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/CreateJob">โพสต์งาน</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Serch">ค้นหา</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Description">รายละเอียด</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Company">บริษัท</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;