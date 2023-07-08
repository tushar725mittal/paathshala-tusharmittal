import './Display.css'

export default function Display() {
    return (
        <div className="display-container">
            <div className="display-card">
                <h1>John Doe</h1>
                <div className="display-card-content-personal">
                    <h3>
                        <a href="mailto:
                            t@gmail.com">t@gmail.com</a>
                    </h3>
                    <h3>1234567890</h3>
                </div>
                <div className="display-card-content-job">
                    <div className="display-card-content-job-header">
                        <h3>Job Title</h3>
                        <p>Software Engineer</p>
                    </div>
                    <div className="display-card-content-job-header">
                        <h3>Job Type</h3>
                        <p>Fulltime</p>
                    </div>
                    <div className="display-card-content-header-job-comments">
                        <h3>Comments:</h3>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}