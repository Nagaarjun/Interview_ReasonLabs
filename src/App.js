import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import AddDessertForm from './molecules/DessertForm';
import { useCallback, useEffect, useState } from 'react';
import TableView from './molecules/TableView';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import PieChart from './molecules/PieChart';

const StyledDashboardText = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-left: 20px;
  margin-bottom: 1rem;
`;

const DessertCard = styled(Card)`
  margin-bottom: 1rem;
`;

const ChartCard = styled(Card)`
  margin-bottom: 1rem;
`;

const TableCard = styled(Card)`
  margin-bottom: 1rem;
  & > div{
    max-height:40rem;
    overflow-y:auto;
  }
`;
const App = () => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [dessertsList, setDessertslist] = useState([]);
  const data = [
    { "id": 0, "name": "Cake", "amount": "884" },
    { "id": 1, "name": "Jalebi", "amount": "99" },
    { "id": 2, "name": "Laddu", "amount": "8493" },
    { "id": 3, "name": "Kaju", "amount": "8934" },
    { "id": 4, "name": "Halwa", "amount": "8943" }
  ];
  useEffect(() => {
    setDessertslist(data);
  }, []);

  const addToDessertsList = () => {
    console.log(name, amount);
    if (name && amount)
      setDessertslist([...dessertsList, { id: dessertsList.length, name, amount }]);
    setAmount(undefined);
    setName(undefined);
  }

  const updateDessertsList = (index) => {
    let updatedDessertsList = [...dessertsList];
    updatedDessertsList.splice(index, 1);
    updatedDessertsList = updatedDessertsList.length > 0 && updatedDessertsList?.map((item, index) => { return { ...item, id: index } });
    setDessertslist(updatedDessertsList);
  }

  return (
    <>
      <StyledDashboardText>Welcome to Desserts Dashboard!!!</StyledDashboardText>
      <Row className=''>
        <Col lg={8}>
          <DessertCard>
            <CardBody>
              <AddDessertForm addToDessertList={() => addToDessertsList()} name={name} amount={amount} setName={setName} setAmount={setAmount} />
            </CardBody>
          </DessertCard>
          <TableCard>
            <CardBody>
              <TableView dessertsList={dessertsList} updateDessertsList={updateDessertsList} />
            </CardBody>
          </TableCard>
        </Col>
        <Col lg={4}>
          <ChartCard>
            <CardBody>
              <PieChart dessertsList={dessertsList} />
            </CardBody>
          </ChartCard>
        </Col>
      </Row>
    </>

  );
}

export default App;
