import React from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
  return (
    <div className="container section post-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Post Title!  {id}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam illum dolorem rem nam aspernatur eos. Laudantium dicta reprehenderit hic error facere! Sint laboriosam animi veritatis temporibus consequatur fugiat deleniti.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Aboba1759</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails;