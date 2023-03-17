import Navbar from "./Navbar";
import "./style/Serch.css";

const Serch=()=>{
    return (
        <div>
            <Navbar/>
            <div className="box-serch">
                <div id="btn-delete-edit">
                    <button type="button" class="btn btn-outline-warning">Warning</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-danger">Danger</button>
                </div>
            </div>
        </div>
    )
}

export default Serch;