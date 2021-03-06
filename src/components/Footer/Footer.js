import React from 'react';
import './Footer.css';
import '../../components/Navbar/Navbar.css';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <div className="footer-content">
              <div className="section-padding">
                <p className="p1 p-color">Our fantastic team of professional designers is here to help.

                    Committed to producing high-quality but low-cost goods

                    graphic design merchandise</p><br />
              </div>
              <div className="section-padding">
                <h4 className="head4">SERVICE SUPPORT</h4>&nbsp;
                <p className="p-color">Tuesday - Thursday:</p> 
                <p className="p-color">8:00 a.m.–22:00 p.m</p>
                <p className="p-color">Saturday - Sunday:</p>
                <p className="p-color"> 12:00 p.m.–5:00 p.m</p>
              </div><br />
              <div className="section-padding">
                <h4 className="head4">CUSTOMER SERVICE</h4>&nbsp;
                <p className="p-color">
                 Help Centre
                </p>
                <p className="p-color">
                 Delivery Offer
                </p>
                <p className="p-color">
                 Returns Policy
                </p>
                <p className="p-color">
                 Product Recalls
                </p>
                <p className="p-color">
                 Scam Warnings
                </p>
                <p className="p-color">
                 Track Your Order
                </p><br />
              </div>
              <div className="section-padding">
              <h4>FOLLOW US</h4><br />
              <div className="social-icons fa-color">
                <i className="fab fa-facebook fa-padding"></i>
                <i className="fab fa-instagram fa-padding"></i>
                <i className="fab fa-linkedin fa-padding"></i>
                <i class="fab fa-twitter fa-padding"></i>
              </div><br />
              </div>
              </div>
              <hr className="p-color" />
              <div className="footer-bg"><br />
                <p>Copyright © 2021 TRInno</p>
                <p>All rights reserved</p>
                <p>Design by: TRInno.com</p>
              </div>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;