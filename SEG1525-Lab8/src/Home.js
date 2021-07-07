import homeimg from "./images/homeimg.jpg";
const Home = () => {
    return ( 
        <div className="home">

            <div className="homepage">
                <img className="homeimg" src={homeimg}/>
                <div className="homebox">
                    <p className="homeboxtext1">Browse Our Fences and Get a Free<br></br>Personalized Quote!</p>
                    <br></br>
                    <p className="homeboxtext2">We specialize in wood, vinyl/PVC, chain link and iron fences!</p>
                    <button className="browseOptions">Browse Options {">"}</button>
                </div>
            </div>



        </div>
     );
}
 
export default Home;