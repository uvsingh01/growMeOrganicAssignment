import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table";
import SideBar from "../components/SideBar";

const HomePage = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setDetails(response.data);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const checkType = (data) => {
    const checkedData = data.map((item: any): Post => {
      return {
        id: item.id,
        userId: item.userId,
        body: item.body,
        title: item.title,
      };
    });
    setDetails(checkedData);
  };

  useEffect(() => {
    fetchData();
    if (!localStorage.getItem("userDetails")) {
      navigate("/login",{state:{message:true}});
    }
  }, []);

  useEffect(() => {
    checkType(details);
  }, [details]);

  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        width: "1",
      }}
    >
      <Grid item sm={1}>
        <SideBar></SideBar>
      </Grid>

      <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
        <Table details={details}></Table>
      </Grid>
    </Grid>
  );
};

export default HomePage;
