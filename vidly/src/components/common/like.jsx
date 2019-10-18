import React from 'react';

// Input: Liked: boolean
// Output: onClick
// Whenever you use Stateless functional Component then you should get rid of props
const Like = props => {
  let classes = 'fa fa-heart';
  if (!props.liked) classes += '-o';
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
