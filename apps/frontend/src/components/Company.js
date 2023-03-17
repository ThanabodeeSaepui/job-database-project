import Navbar from "./Navbar";

const Company=()=>{
    return (
        <div>
            <Navbar/>
            <div class="container p-3">
                <div class="text-center">
                    <h1>ชื่อบริษัท</h1>
                </div>
                <p>Address :</p>
                <p>Contact :</p>
                <p>Description :</p>
            </div>
        </div>
    )
}

export default Company;