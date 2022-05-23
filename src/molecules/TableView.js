import { Col, Row } from "reactstrap";
import Button from "../atoms/button";
import "./TableView.css";

const TableView = ({ dessertsList, updateDessertsList }) => {
    return (
        <Row>{
            Array.isArray(dessertsList) && dessertsList.length > 0 && dessertsList.map((item, index) => {
                return (
                    <>
                        <Col lg={3}>
                            <div>{item.id + 1}</div>
                        </Col>
                        <Col lg={3}>
                            <div>{item.name}</div>
                        </Col>
                        <Col lg={3}>
                            <div>{item.amount}</div>
                        </Col>
                        <Col lg={3}>
                            <Button onClick={() => { updateDessertsList(index) }}>Remove</Button>
                        </Col>
                    </>
                )
            })
        }</Row>
    );
}

export default TableView;
