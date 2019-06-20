import React from "react";

export default ({ data }) => data.map((o, i) => <div key={`${i}-${o}`}><strong>{`${i + 1}: `}</strong>{o}</div>)