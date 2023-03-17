import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style/Homepage.css";

const Homepage=()=>{
    return (
        <div>
            <Navbar/>
            <div>
                <div className="box">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ประเภทงาน</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>กรุณาเลือกประเภทงานที่สนใจ</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ชื่อตำแหน่ง</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>กรุณาเลือกตำแหน่งที่สนใจ</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">ชื่อบริษัท</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>กรุณาเลือกบริษัทที่สนใจ</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">ค้นหา</button>
                </div>

                <div className="box1">
                    <h1>Box1</h1>
                </div>
                <div className="box2">
                    <h1>Box2</h1>
                </div>
                <div className="box3">
                    <h1>Box3</h1>
                </div>
                <div className="box4">
                    <h1>Box4</h1>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;