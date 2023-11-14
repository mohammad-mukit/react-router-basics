const Contact = () => {
    return ( 
        <div className="contact-main">
            <form className="form">
                <label>
                    <span>Name: </span>
                    <input type="text" placeholder="Name" />
                </label>
                <label>
                    <span>Email: </span>
                    <input type="email" placeholder="Email" />
                </label>
                <label>
                    <span>Question: </span>
                    <textarea placeholder="Ask your query?"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Contact;