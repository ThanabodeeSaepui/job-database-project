import Navbar from "./Navbar";

const CreateJob=()=>{
    return (
        <div>
            <Navbar/>
            <div className="container p-3">
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Category</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>กรุณาเลือกประเภทงานงาน</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Company</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>กรุณาเลือกบริษัท</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <from>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">ตำแหน่ง</label>
                        <input className="form-control" type="text" placeholder="กรุณากรอกตำแหน่งการทำงาน"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">ที่ว่าง</label>
                        <input className="form-control" type="text" placeholder="ที่ว่างคืออะไรครับ"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">ยืนยันการกรอกข้อมูล</label>
                    </div>
                    <button type="submit" className="btn btn-primary">โพสต์งาน</button>
                </from>
            </div>
        </div>
    )
}

export default CreateJob;