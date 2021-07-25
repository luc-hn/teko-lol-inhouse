import styled from "styled-components";

export interface Team {
  name: string;
  win: number;
  lose: number;
}

export interface Group {
  name: string;
  teams: Team[];
}

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

const GroupName = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 4px;
  width: 100%;
  text-align: center;
  padding: 2px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: auto;
  margin-bottom: 8px;
`;

export const Table = ({ group }: { group: Group }) => {
  return (
    <>
      <GroupName>{group.name}</GroupName>
      <TableWrapper>
        <Grid>
          <div>STT</div>
          <div>Tên đội</div>
          <div>Số trận</div>
          <div>Thắng</div>
          <div>Thua</div>
        </Grid>
        <Divider />
        <Grid>
          {group.teams.map((team, index) => {
            return (
              <>
                <div>{index + 1}</div>
                <div>{team.name}</div>
                <div>{team.win + team.lose}</div>
                <div>{team.win}</div>
                <div>{team.lose}</div>
              </>
            );
          })}
        </Grid>
      </TableWrapper>
    </>
  );
};
