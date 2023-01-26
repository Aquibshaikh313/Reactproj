import { Link } from "react-router-dom";

export function About() {

    return (
        <div className="container">
            <h1 className="text-primary text-center">About Us</h1><hr/>
            <div className="row">
                <div className="lead col-md-6">
                   <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words.
                    </p>
                    <Link to='/contact' className="btn btn-outline-primary px-3 w-100">Contact Us</Link>
                </div>
                <div className="col-md-6">
                    <img className="ms-6 mt-6" src="/Images/about.png" height="480px" width="550px" />
                </div>
            </div>
        </div>

    )
}