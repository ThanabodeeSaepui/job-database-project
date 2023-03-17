import Navbar from "./Navbar";

const CreateCompany=()=>{
    return (
        <div>
            <Navbar/>
            <div class="container p-3">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ชื่อบริษัท</label>
                        <input class="form-control" type="text" placeholder="กรุณากรอกชื่อบริษัท"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                        <input class="form-control" type="text" placeholder="กรุณากรอกที่อยู่บริษัท"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Contact</label>
                        <input class="form-control" type="text" placeholder="กรุณากรอกช่องทางการติดต่อ"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">ยืนยันการกรอกข้อมูล</label>
                    </div>
                    <button type="submit" class="btn btn-primary">เพิ่มบริษัท</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCompany;