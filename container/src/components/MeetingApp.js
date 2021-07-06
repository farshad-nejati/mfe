import { run } from "meeting/MeetingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    run(ref.current);
  }, []);

  return <div ref={ref} id="_meeting-dev-root" />;
};
