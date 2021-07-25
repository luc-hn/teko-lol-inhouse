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
        win: 4,
        lose: 0,
      },
      {
        name: "Gao Ranger",
        win: 1,
        lose: 3,
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
