import React from 'react';
import { Table } from 'react-bootstrap';

export const Billing = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Reference Id</th>
        <th>DATE</th>
        <th>AMOUNT</th>
        <th>INVOICE</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Otto</td>
        <td>26/06/2022</td>
        <td>$10</td>
        <td>PDF</td>

      </tr>
      <tr>
        <td>Thornton</td>
        <td>26/06/2022</td>
        <td>$25</td>
        <td>PDF</td>
      </tr>
      <tr>
        <td>@twitter</td>
        <td>26/06/2022</td>
        <td>$30</td>
        <td>PDF</td>
      </tr>
      <tr>
        <td>Otto</td>
        <td>26/06/2022</td>
        <td>$25</td>
        <td>PDF</td>
      </tr>
      <tr>
        <td>Thornton</td>
        <td>26/06/2022</td>
        <td>$45</td>
        <td>PDF</td>
      </tr>
      <tr>
        <td>@twitter</td>
        <td>26/06/2022</td>
        <td>$33</td>
        <td>PDF</td>
      </tr>
    </tbody>
  </Table>
);