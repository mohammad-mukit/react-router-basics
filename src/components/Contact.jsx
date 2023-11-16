import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData()

    return ( 
        <div className="contact-main">
            <Form method="post" action="/help/contact">
                <label>
                    <span>Name: </span>
                    <input name="name" type="text" placeholder="Name" />
                </label>
                <label>
                    <span>Email: </span>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    <span>Question: </span>
                    <textarea name="message" placeholder="Ask your query?"></textarea>
                </label>
                <button type="submit">Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
     );
}
 
export default Contact;


export const contactAction = async ({request}) => {
    const data = await request.formData();

    const submission ={
        email: data.get('email'),
        message: data.get('message')

    }

    if(submission.message.length < 10 ){
        return {error: 'Message must be more than ten character'}
    }

    return redirect('/')
}