import React from "react";
import { useState, useEffect } from "react";
import { url } from "./Data";
import "./Main.css";
import Tours from "./Tours";

export default function Main() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!setLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          <Tours tours={tours} />
        </div>
      </>
    );
  }
}
