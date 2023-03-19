import Navbar from "./Navbar";
import "./style/Serch.css";

const Serch=()=>{
    return (
        <div>
            <Navbar/>
            <div className="box-serch">
                <div className="position-relative">
                    <div className="position-absolute top-0 start-0">
                        <h3>แม่บ้าน</h3>
                    </div>
                    <div className="position-absolute top-0 end-0">
                        <h3>SpaceX</h3>
                    </div>
                </div>

                <div id="btn-delete-edit">
                    <button type="button" className="btn btn-warning">Edit</button> &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                </div>

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

export default Serch;