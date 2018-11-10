import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Table } from 'reactstrap';

class SavedCard extends Component {

  state = {
    showDetails: false
  }

  

  toggleDetails = (e) => {
    e.preventDefault();

    this.setState({showDetails: !this.state.showDetails})
    
  }

  renderDetails() {

      return(
        <Card>
          <CardBody>
            <CardTitle>{this.props.order_name}</CardTitle>
            <Table>
            <thead>
              <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{this.props.product_name1}</td>
                  <td>{this.props.size1}</td>
                  <td>${this.props.price1.toFixed(2)}</td>
              </tr>
              { this.props.product_name2 ? 
                (<tr>
                    <td>{this.props.product_name2}</td>
                    <td>{this.props.size2}</td>
                    <td>${this.props.price2.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name3 ? 
                (<tr>
                    <td>{this.props.product_name3}</td>
                    <td>{this.props.size3}</td>
                    <td>${this.props.price3.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name4 ? 
                (<tr>
                    <td>{this.props.product_name4}</td>
                    <td>{this.props.size4}</td>
                    <td>${this.props.price4.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name5 ? 
                (<tr>
                    <td>{this.props.product_name5}</td>
                    <td>{this.props.size5}</td>
                    <td>${this.props.price5.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name6 ? 
                (<tr>
                    <td>{this.props.product_name6}</td>
                    <td>{this.props.size6}</td>
                    <td>${this.props.price6.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name7 ? 
                (<tr>
                    <td>{this.props.product_name7}</td>
                    <td>{this.props.size7}</td>
                    <td>${this.props.price7.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name8 ? 
                (<tr>
                    <td>{this.props.product_name8}</td>
                    <td>{this.props.size8}</td>
                    <td>${this.props.price8.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name9 ? 
                (<tr>
                    <td>{this.props.product_name9}</td>
                    <td>{this.props.size9}</td>
                    <td>${this.props.price9.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name10 ? 
                (<tr>
                    <td>{this.props.product_name10}</td>
                    <td>{this.props.size10}</td>
                    <td>${this.props.price10.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name11 ? 
                (<tr>
                    <td>{this.props.product_name11}</td>
                    <td>{this.props.size11}</td>
                    <td>${this.props.price11.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name12 ? 
                (<tr>
                    <td>{this.props.product_name12}</td>
                    <td>{this.props.size12}</td>
                    <td>${this.props.price12.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name13 ? 
                (<tr>
                    <td>{this.props.product_name13}</td>
                    <td>{this.props.size13}</td>
                    <td>${this.props.price13.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name14 ? 
                (<tr>
                    <td>{this.props.product_name14}</td>
                    <td>{this.props.size14}</td>
                    <td>${this.props.price14.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name15 ? 
                (<tr>
                    <td>{this.props.product_name15}</td>
                    <td>{this.props.size15}</td>
                    <td>${this.props.price15.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name16 ? 
                (<tr>
                    <td>{this.props.product_name16}</td>
                    <td>{this.props.size16}</td>
                    <td>${this.props.price16.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name17 ? 
                (<tr>
                    <td>{this.props.product_name17}</td>
                    <td>{this.props.size17}</td>
                    <td>${this.props.price17.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name18 ? 
                (<tr>
                    <td>{this.props.product_name18}</td>
                    <td>{this.props.size18}</td>
                    <td>${this.props.price18.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name19 ? 
                (<tr>
                    <td>{this.props.product_name19}</td>
                    <td>{this.props.size19}</td>
                    <td>${this.props.price19.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
              { this.props.product_name20 ? 
                (<tr>
                    <td>{this.props.product_name20}</td>
                    <td>{this.props.size20}</td>
                    <td>${this.props.price20.toFixed(2)}</td>
                </tr>) : (<tr></tr>)}
            </tbody>
            </Table>
          </CardBody>
        </Card>
      )
  }

  render() {

    let test = <Card>
    <CardBody>
      <CardTitle>{this.props.order_name}</CardTitle>
      <Table>
      <thead key = {this.props._id}>
        <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>{this.props.product_name1}</td>
            <td>{this.props.size1}</td>
            <td>${this.props.price1.toFixed(2)}</td>
        </tr>
      </tbody>
      </Table>
    </CardBody>
  </Card>
    return(
      <Card onClick = {this.toggleDetails} value = {this.state.showDetails}>
        {!this.state.showDetails ? <CardTitle>{this.props.order_name}</CardTitle> : this.renderDetails()}
      </Card>
    );
  }
}

export default SavedCard;