import React from "react";
import Badge from "react-bootstrap/Badge";
import './Footer.css';
    
const Footer = ({Text}) => {
    return (
    <div>
        <Badge className="footer" bg="red">
            {Text}
        </Badge>
    </div>
    ); 
    };

export default Footer;