import './Form.css'

export default function Form() {
    return (
        <div className="form-container">
            <h1>Give your job details</h1>
            <form>
                <div className="form-group">
                    <div className="form-group-header">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" placeholder='Name:' />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder='Email:' />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder='Phone:' />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="job">Job Title:</label>
                        <input type="text" id="job" name="job" placeholder='Job Title:' />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="job-type">Types of Job:</label>
                        <select id="job-type" name="job-type">
                            <option value="fulltime">All Jobs</option>
                            <option value="fulltime">Fulltime</option>
                            <option value="halftime">Halftime</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>

                    <div className="form-group-header-comments">
                        <label htmlFor="comments">Your Comments:</label>
                        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
                    </div>

                    <input type="submit" value="Submit" />

                </div>
            </form>
        </div>

    );
} 