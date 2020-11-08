import React from 'react';
const Context = (props) => {
  return <p style={{ fontSize: props.size === "small" ? 17 : 23, lineHeight: 0, color: props.color }}>{props.content}</p>
}
export default Context