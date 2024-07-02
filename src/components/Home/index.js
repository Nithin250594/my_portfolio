import NavBar from "../NavBar"
import "./index.css"

const Home=()=> {
  return (
    <div className='home-bg'>
    <NavBar/>
    <div className="home-container">
    <div className="home-text-section">
       <h1 className="home-text">Hi, <br/>
        I'm <span className="name-span"> Nithin Sai Peddiraju</span><br/>
        MERN Full Stack Developer </h1>
        <button type="button" className="contact-button">Contact</button>
       </div>
       <img src="https://res.cloudinary.com/dg14m0ern/image/upload/v1719918444/photo-4_e8mci3.png" alt="my Identity" className="my-photo-style"/>
    </div>
       
    </div>
    
  )
}

export default Home