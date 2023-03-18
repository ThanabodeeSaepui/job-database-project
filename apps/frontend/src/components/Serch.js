import Navbar from "./Navbar";
import "./style/Serch.css";

const Serch=()=>{
    return (
        <div>
            <Navbar/>
            <div className="box-serch">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0">
                        <h3>แม่บ้าน</h3>
                    </div>
                    <div class="position-absolute top-0 end-0">
                        <h3>SpaceX</h3>
                    </div>
                </div>

                <div id="btn-delete-edit">
                    <button type="button" class="btn btn-warning">Edit</button> &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">ลบข้อมูล</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>ต้องการที่จะลบข้อมูลหรือไม่</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Yes</button>
                                <button type="button" class="btn btn-secondary">No</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Serch;