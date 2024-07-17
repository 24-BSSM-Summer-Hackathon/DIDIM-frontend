import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./style.css";

const Randing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/start');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <Logo className="logo" />
    </div>
  );
};

export default Randing;
