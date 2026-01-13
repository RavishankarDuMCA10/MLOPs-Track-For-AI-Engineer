"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [idea, setIdea] = useState<string>("...loading");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setIdea)
      .catch(err => setIdea("Error: " + err.message));
  }, []);

  return <div>{idea}</div>;
}

export default function Home() {
  const [idea, setIdea] = useState("");

  return <div>{idea}</div>;
}