import React, { useEffect, useContext } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import ParentPostTile from "./ParentPostTile";
import { ParentPostContext } from "./ParentPostProvider";
import Typography from "@material-ui/core/Typography";
import { ParentFilterContext } from "./ParentFilterProvider";

interface Props {}

const ParentPosts: React.FC<Props> = () => {
    const [parentPosts, setParentPosts] = useContext(ParentPostContext);

    const [parentFilters, setParentFilters] = useContext(ParentFilterContext);

    useEffect(() => {
        const fetch = (): void => {
            apiGet(parentPostsRoute + "listall", (jsonResponse: any) => {
                setParentPosts(jsonResponse);
            });
        };
        fetch();
    }, [setParentPosts]);

    let filteredPosts: any = [];

    console.log(parentPosts);
    for (var key in parentPosts) {
        // console.log(key);
        // console.log(parentPosts[key]);
        var current = parentPosts[key];
        if (
            (parentFilters.personalPositive === true &&
                current.positiveMessage === true &&
                current.commentType === "PERSONAL") ||
            (parentFilters.materialNegative === true &&
                current.positiveMessage === false &&
                current.commentType === "MATERIAL") ||
            (parentFilters.personalNegative === true &&
                current.positiveMessage === false &&
                current.commentType === "PERSONAL")
        ) {
            console.log(current);
            filteredPosts.push(parentPosts[key]);
        }
    }

    // for (var post of parentPosts) { //parentpposts is not iterable
    //     console.log("From of loop" + post);
    // }
    // console.log(filteredPosts);

    // for (var i = 0; i < parentPosts.length; i++) {
    //     console.log("From of loop" + parentPosts[i]);
    // }
    function filterFunc(element: { positiveMessage: boolean }, index: any, array: any) {
        return element.positiveMessage === true;
    }
    console.log(parentPosts);
    // var testFiltered = parentPosts.filter(filterFunc); // undefined-nak látja már ebben a sorban. az előző sorból még ki tudta írni.....
    // console.log(testFiltered);
    // const filterTest = parentPosts.filter(key:(any: any) => parentPosts[key].positiveMessage === true);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Szülők mondták
            </Typography>
            <div className="tile is-child">
                {parentPosts &&
                    filteredPosts.map((parentPost: ParentPost) => {
                        return <ParentPostTile key={parentPost.id} post={parentPost} />;
                    })}
            </div>
        </div>
    );
};

export default ParentPosts;
