import './Display.css'
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const listJobSeekers = `
    query ListJobSeekers(
        $filter: ModelJobSeekerFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listJobSeekers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                name
                email
                phone
                jobTitle
                jobType
                comments
            }
            nextToken
        }
    }
`

export default function Display() {
    const [jobSeekers, setJobSeekers] = useState([]);

    async function fetchJobSeekers() {
        const { data } = await API.graphql({
            query: listJobSeekers,
            variables: { limit: 100 }
        });
        setJobSeekers(data.listJobSeekers.items);
    }


    useEffect(() => {
        fetchJobSeekers();
    }, []);
    return (
        <div>
            {jobSeekers.length > 0 ? (
                <div className="display-container">
                    {jobSeekers.map((jobSeeker, index) => (
                        <div key={index}>
                            {card(jobSeeker.name, jobSeeker.email, jobSeeker.phone, jobSeeker.jobTitle, jobSeeker.jobType, jobSeeker.comments)}
                        </div>
                    ))}
                </div>
            )
                : (
                    <h3>No Job Seekers</h3>
                )}
        </div>
    );
}

function card(name, email, phone, jobTitle, jobType, comments) {
    return (
        <div className="display-card">
            <h1>{name}</h1>
            <div className="display-card-content-personal">
                <h3>
                    <a href={"mailto:" + { email }}
                    >{email}</a>
                </h3>
                <h3>{phone}</h3>
            </div>
            <div className="display-card-content-job">
                <div className="display-card-content-job-header">
                    <h3>Job Title</h3>
                    <p>{jobTitle}</p>
                </div>
                <div className="display-card-content-job-header">
                    <h3>Job Type</h3>
                    <p>{jobType}</p>
                </div>
                <div className="display-card-content-header-job-comments">
                    <h3>Comments:</h3>
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    );
}