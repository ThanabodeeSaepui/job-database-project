import Navbar from "./Navbar";

const Description=()=>{
    return (
        <div>
            <Navbar/>
            <div className="container p-3">
                <div className="text-center">
                    <h1>ชื่อบริษัท</h1>
                </div>
                <p>ตำแหน่ง :</p>
                <p>Description :</p>
            </div>
        </div>
    )
}

export default Description;