import { useState } from 'react';
import { Col, Form, FormGroup, InputGroup, Label, Row } from 'reactstrap';
import styled from 'styled-components';
import Button from '../atoms/button';
import Input from '../atoms/input';
import './DessertForm.css';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.red}
`;
// const styled
const AddDessertForm = ({ addToDessertList, name, amount, setName, setAmount }) => {
    // const [name, setName] = useState();
    // const [amount, setAmount] = useState();
    console.log(name, amount);
    return (
        <Form className="AddDessertForm">
            DessertForm
            <Row className='row'>
                <Col lg={3}>
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type={"text"} onChange={(e) => setName(e?.target?.value)} value={name || ""} />
                    </FormGroup>
                </Col>
                <Col lg={3}>
                    <FormGroup>
                        <Label for="Amount">Amount</Label>
                        <Input type={"number"} onChange={(e) => setAmount(e?.target?.value)} value={amount || ""} />
                    </FormGroup>
                </Col>
                <Col lg={3}>
                    <Button onClick={() => { addToDessertList() }}>+</Button>
                </Col>

            </Row>
        </Form>
    );
}

export default AddDessertForm;
