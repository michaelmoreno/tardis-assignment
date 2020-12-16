import React, { useState } from 'react'

export default function Tardis(props) {
  const [state, setState] = useState(props)
  const depth = state.depth;
  const onClick = () => {
    if (state.caps) {
        setState({
            depth,
            name: state.name.toLowerCase(),
            caps: !state.caps,
        });
    } else {
        setState({
            depth,
            name: state.name.toUpperCase(),
            caps: !state.caps,
        });
    };
  };

  const childProps = {
    depth: depth - 1,
    name: state.name,
    caps: state.caps,
  }

  let children;

  if (depth == 0) {
    children = <h3>{state.name}</h3>;
  } else if (depth == 1) {
    children = [
      <Tardis {...childProps} />,
      <Tardis {...childProps} />,
    ];
  } else {
    children = <Tardis {...childProps} />;
  }

  return (
      <div onClick={onClick}>
        {children}
      </div>
  );  
}