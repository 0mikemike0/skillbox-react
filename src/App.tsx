import React from "react";
import "./styles.css";
import "./main.global.css";
import { Layout } from "./Layout";
import { Header } from "./Header";
import { Content } from "./Content";
import { CardList } from "./CardList";

export default function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardList />
      </Content>
    </Layout>
  );
}
