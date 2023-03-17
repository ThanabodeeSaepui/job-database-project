import Navbar from "./Navbar";

const CreateJob=()=>{
    return (
        <div>
            <Navbar/>
            <div class="container">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Category</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>กรุณาเลือกประเภทงานงาน</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Company</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>กรุณาเลือกบริษัท</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <from>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ตำแหน่ง</label>
                        <input class="form-control" type="text" placeholder="กรุณากรอกตำแหน่งการทำงาน"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ที่ว่าง</label>
                        <input class="form-control" type="text" placeholder="ที่ว่างคืออะไรครับ"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">ยืนยันการกรอกข้อมูล</label>
                    </div>
                    <button type="submit" class="btn btn-primary">โพสต์งาน</button>
                </from>
            </div>
        </div>
    )
}

export default CreateJob;