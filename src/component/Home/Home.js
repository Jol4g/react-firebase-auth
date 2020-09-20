import React from "react";
import fire from "../../config/Fire";
import "./Home.css";
import { Button, Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function Home() {
  const SingOut = () => {
    fire.auth().signOut();
  };
  return (
    <Layout >
      <Header className="Header">
        <div className="Welcome">
          <h1>Hey you are Home Now</h1>
        </div>
        <div className="Signout">
          <Button onClick={SingOut} type="primary">
          <a href='/' > Sign Out</a> 
          </Button>
        </div>
      </Header>
      <Content className="Content" style={{ height: window.innerHeight-135 }}>
       <h2> Chnage your code === Change your life</h2>
       <h3>Chase Your dream!</h3>
      </Content>
      <Footer className="Footer">Happy Coding #Fedi_Sarray</Footer>
    </Layout>
  );
}
