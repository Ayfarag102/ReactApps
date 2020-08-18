import React from "react";
import "../Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ name, username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={name}
          src="assets/imgs/avatar-00.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      {/* image */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
        <span role="img" aria-label="">
          🥰
        </span>
      </h4>
      {/*username + caption */}
    </div>
  );
}

export default Post;
