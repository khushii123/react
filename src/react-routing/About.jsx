import {Link} from "react-router-dom";
function About()
{
    return(
        <div>
            <p>About</p>
            <Link to={"/contact"}>
                Contact
            </Link>
       </div>
    )
}
export default About;