import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import AddDessertForm from './molecules/DessertForm';
import { useCallback, useEffect, useState } from 'react';
import TableView from './molecules/TableView';
import { Col, Row } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import PieChart from './molecules/PieChart';


const App = () => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [dessertsList, setDessertslist] = useState([]);
  const data = [
    { "id": 0, "name": "aslfkj", "amount": "884" },
    { "id": 1, "name": "jjf", "amount": "99" },
    { "id": 2, "name": "jlsf", "amount": "8493" },
    { "id": 3, "name": "lskjf", "amount": "8934" },
    { "id": 4, "name": "ksjf", "amount": "8943" }
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
    <Row className=''>
      <Col lg={8}>
        <AddDessertForm addToDessertList={() => addToDessertsList()} name={name} amount={amount} setName={setName} setAmount={setAmount} />
        <TableView dessertsList={dessertsList} updateDessertsList={updateDessertsList} />
      </Col>
      <Col lg={4}>
        <PieChart dessertsList={dessertsList} />
      </Col>
    </Row>
  );
}

export default App;
