import React from "react";
import { Card, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Job = ({ job }) => {
  const input =
    '<p>email resume to: <a href="mailto:communityventurepartners@comcast.net">communityventurepartners@comcast.net</a></p>';
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div>
              <a target="no-opener" href={job.url}>
                Apply
              </a>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Job;
