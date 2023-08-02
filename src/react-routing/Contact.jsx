import {Link} from "react-router-dom";
function Contact()
{
    return(
        <div>
            <p>Contact</p>
            <Link to={"/about"}>
            About
            </Link>
           
        </div>
    )
}
export default Contact;