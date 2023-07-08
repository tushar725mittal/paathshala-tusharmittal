import './Form.css'
import React, { useState } from 'react';
import { API } from 'aws-amplify';

const createJobSeeker = `
    mutation CreateJobSeeker(
        $input: CreateJobSeekerInput!
        $condition: ModelJobSeekerConditionInput
    ) {
        createJobSeeker(input: $input, condition: $condition) {
            id
            name
            email
            phone
            jobTitle
            jobType
            comments
        }
    }
`

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [comments, setComments] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !phone || !jobTitle || !jobType || !comments) {
            alert('Please fill all the fields');
            return;
        }
        if (!/^[0-9]{10}$/.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }

        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        await createNewJobSeeker();
        setName('');
        setEmail('');
        setPhone('');
        setJobTitle('');
        setJobType('');
        setComments('');
    }

    async function createNewJobSeeker() {
        const newJobSeeker = await API.graphql({
            query: createJobSeeker,
            variables: {
                input: {
                    name,
                    email,
                    phone,
                    jobTitle,
                    jobType,
                    comments
                }
            }
        })
        console.log(newJobSeeker);
        if (newJobSeeker.data.createJobSeeker) {
            alert('Thank you for submitting your job details. We will get back to you soon.');
        }
        else {
            alert('Something went wrong. Please try again.');
        }
    }


    return (
        <div className="form-container">
            <h1>Give your job details</h1>
            <form>
                <div className="form-group">
                    <div className="form-group-header">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" placeholder='Name:' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder='Email:' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder='Phone:' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="job">Job Title:</label>
                        <input type="text" id="job" name="job" placeholder='Job Title:' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                    </div>

                    <div className="form-group-header">
                        <label htmlFor="job-type">Types of Job:</label>
                        <select id="job-type" name="job-type" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                            <option value="fulltime">All Jobs</option>
                            <option value="fulltime">Fulltime</option>
                            <option value="halftime">Halftime</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>

                    <div className="form-group-header-comments">
                        <label htmlFor="comments">Your Comments:</label>
                        <textarea id="comments" name="comments" rows="5" cols="33" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
                    </div>

                    <input type="submit" value="Submit" onClick={handleSubmit} />

                </div>
            </form>
        </div>

    );
} 