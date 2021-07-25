import React from "react";
import logo from "./logo.svg";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import styled from "styled-components";
import { Group, Table } from "./Table";

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 8px 12px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #fff;
  margin: 8px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 3fr 3fr 3fr;
  row-gap: 8px;
  div {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

function App() {
  const bangA: Group = {
    name: "Bảng A",
    teams: [
      {
        name: "Mọi người coi vậy có được không?",
        win: 4,
        lose: 0,
      },
      {
        name: "Yang Hồ",
        win: 2,
        lose: 2,
      },
      {
        name: "Chiếp chúa",
        win: 2,
        lose: 2,
      },
      {
        name: "Newbie",
        win: 0,
        lose: 4,
      },
    ],
  };
  const bangB: Group = {
    name: "Bảng B",
    teams: [
      {
        name: "Dậu Vương",
        win: 3,
        lose: 0,
      },
      {
        name: "Gao Ranger",
        win: 1,
        lose: 2,
      },
      {
        name: "Liều ăn nhiều",
        win: 1,
        lose: 2,
      },
      {
        name: "Thầy trò Đường Tăng",
        win: 1,
        lose: 2,
      },
    ],
  };
  return (
    <Wrapper>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Table group={bangA} />
        </Col>
        <Col xs={24} md={12}>
          <Table group={bangB} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default App;
