import React from "react";
import { TeacherRecommendation } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
    post: TeacherRecommendation;
}

const TeacherRecommendationTile: React.FC<Props> = ({ post }) => {
    return (
        <div className="tile is-parent box is-vertical  is-size-7">
            <div className="tile is-parent  is-size-7" style={{ backgroundColor: "rgba(23, 96, 186, 0.4)" }}>
                <div className="tile is-child">
                    <p>{post.location}</p>
                </div>
                <div className="tile is-child">
                    <p>{formatTimeStamp(post.submissionDate).format("YYYY.MM.DD")}</p>
                </div>
            </div>

            <div className="tile is-parent  is-size-7">
                <div className="tile is-child">
                    <p>{post.name}</p>
                </div>
                <div className="tile  is-child">
                    <p>{post.recommendation}</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherRecommendationTile;
