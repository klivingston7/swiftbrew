import React from "react";
import { Card, CardBody, CardTitle, Table} from 'reactstrap';

import DropDown from './DropDown';

const itemCard = (props) => (
    <Card>
      <CardBody>
        <h2>{props.product_name}</h2>
        {/* <img id="productPic" src={props.product_picture} alt = ""/> */}

        <CardTitle> {props.product_type} {props.product_category}</CardTitle>

        <Table className="table text-center">
          <tbody>
          <tr>
            <th>
              Small <small>(cal)</small>
            </th>
            <th>
              Medium <small>(cal)</small>
            </th>
            <th>
              Large <small>(cal)</small>
            </th>
          </tr>
          <tr>
            <td>
              ${props.social} <small>({props.socialCal})</small></td>
            <td>
              ${props.daily} <small>({props.dailyCal})</small>
            </td>
            <td>
              ${props.kick} <small>({props.kickCal})</small>
            </td>
          </tr>
          </tbody>
        </Table>
        <DropDown />
        <a href="/cart/" className="btn col-Btn" id="to-cart" role="button">
          Add to Cart
        </a>
      </CardBody>
    </Card>
);

export default itemCard;
