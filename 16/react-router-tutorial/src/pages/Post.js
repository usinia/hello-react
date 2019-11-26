import React from "react";

const Post = ({ match }) => {
  return (
    <div>
      <p>
        포스트 #{match.params.id}
      </p>
    </div>
  );
};

export default Post;
