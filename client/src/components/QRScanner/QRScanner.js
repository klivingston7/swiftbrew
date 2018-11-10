import React, { Component } from 'react';
import "./QRScanner.css"
// import 'https://raw.githubusercontent.com/sitepoint-editors/jsqrcode/master/src/qr_packed.js';
//https://www.sitepoint.com/create-qr-code-reader-mobile-website/

class QRScanner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userid: ''
    }

  }

  openQRCamera(node) {
    // var reader = new FileReader();
    // reader.onload = function() {
    //   node.value = "";
    //   qrcode.callback = function(res) {
    //     if(res instanceof Error) {
    //       alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
    //     } else {
    //       node.parentNode.previousElementSibling.value = res;
    //     }
    //   };
    //   qrcode.decode(reader.result);
    // };
    // reader.readAsDataURL(node.files[0]);

    console.log("To be fixed")
  }



  render(){
    return(
      <div>
        <input type="text" id="qrcode-text"
        /><label id="qrcode-text-btn">
            <input type="file"
              accept="image/*"
              capture="environment"
              onClick={this.openQRCamera}
              tabIndex = {-1} />
        </label>
      </div>
    )
  }
}



export default QRScanner;