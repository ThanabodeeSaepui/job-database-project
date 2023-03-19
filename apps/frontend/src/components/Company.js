import Navbar from "./Navbar";

const Company=()=>{
    return (
        <div>
            <Navbar/>
            <div className="container p-3">
                <div className="text-center">
                    <h1>ชื่อบริษัท</h1>
                </div>
                <p>Address :</p>
                <p>Contact :</p>
                <p>Description :</p>
                <button type="button" className="btn btn-warning">Edit</button> &nbsp; &nbsp;
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">ลบข้อมูล</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>ต้องการที่จะลบข้อมูลหรือไม่</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Yes</button>
                                <button type="button" className="btn btn-secondary">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;