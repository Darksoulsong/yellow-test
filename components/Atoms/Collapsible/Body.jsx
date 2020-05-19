import React from 'react';
import { CollapsibleBody } from './styles';

export default function Body({ children }) {
  const [height, setHeight] = React.useState(0);
  const bodyRef = React.useRef();

  React.useLayoutEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, [bodyRef.current]);

  return (
    <CollapsibleBody ref={bodyRef} style={{ height }}>
      {children}
    </CollapsibleBody>
  );
}
