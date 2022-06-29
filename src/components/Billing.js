import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {
  DatatableWrapper,
  Filter,
  TableBody,
  TableHeader
} from 'react-bs-datatable';


// Create table headers consisting of 4 columns.
const headers = [
  { title: 'REFERENCE ID', prop: 'reference' },
  { title: 'DATE', prop: 'date' },
  { title: 'AMOUNT', prop: 'amount' },
  { title: 'INVOICE', prop: 'invoice' }
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const body = Array.from(new Array(7), () => {
  const rd = (Math.random() * 100).toFixed(1);

  if (rd > 0.5) {
    return {
      reference: 'i-am-billy',
      date: `27/06/2022`,
      amount: `$ ${rd}`,
      invoice: <FontAwesomeIcon icon={faFilePdf} />,
    };
  }

  return {
    reference: 'john-nhoj',
    date: `26/06/2022`,
    amount: `$ ${rd}`,
    invoice: <FontAwesomeIcon icon={faFilePdf} />,
  };
});


export const Billing = () => (
  <DatatableWrapper body={body} headers={headers}>
    <Row className="mb-4">
      <Col
        xs={8}
        lg={4}
        className="d-flex flex-col justify-content-end align-items-end"
      >
        <Filter />
      </Col>
      <Col
        xs={8}
        sm={6}
        lg={4}
        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
      >
      </Col>
      <Col
        xs={8}
        sm={6}
        lg={4}
        className="d-flex flex-col justify-content-end align-items-end"
      >
      </Col>
    </Row>
    <Table>
      <TableHeader />
      <TableBody />
    </Table>
  </DatatableWrapper>
);