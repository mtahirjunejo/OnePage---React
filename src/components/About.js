import './About.css'
function About(props) {
    return (
        <div className="container about-us">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h1>{props.aboutText}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis tempora quisquam voluptatum cupiditate ipsa quia natus accusamus blanditiis quae, saepe ab exercitationem excepturi ullam aliquid, corporis deleniti! Dolorum, voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis tempora quisquam voluptatum cupiditate ipsa quia natus accusamus blanditiis quae, saepe ab exercitationem excepturi ullam aliquid, corporis deleniti! Dolorum, voluptatem?<br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis tempora quisquam voluptatum cupiditate ipsa quia natus accusamus blanditiis quae, saepe ab exercitationem excepturi ullam aliquid, corporis deleniti! Dolorum, voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis tempora quisquam voluptatum cupiditate ipsa quia natus accusamus blanditiis quae, saepe ab exercitationem excepturi ullam aliquid, corporis deleniti! Dolorum, voluptatem?</p>
                </div>
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1609873963505-a5061290ec5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default About;