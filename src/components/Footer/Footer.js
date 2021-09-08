import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "./Footer.css"
import { useHistory } from 'react-router';
function Footer(props) {
    const history = useHistory();
    return (
        <footer className="all_footer">
            
            <div className="doping_image">
                <img src="http://ibsf.info/images/banners/wada_header.png" width="500vw"/>
            </div>

    
        <div className="home_footer" >
        
            <div>
                

                <h2><strong className="first_letter_effect">R</strong>egional Links</h2>
                <hr></hr>
                <ul className="quick_links">
                <li><a>EBSA </a></li>
                <li><a>OBSF </a></li>
                <li><a>ACBS</a></li>
                <li><a>ABSF</a></li>
            </ul>
            </div>

            <div>
            <h2> <strong className="first_letter_effect">O</strong>ther World Links</h2>
            <hr></hr>
            <ul className="quick_links">
                <li><a>World Snooker</a></li>
                <li><a>Union Mondiale De Billiard</a></li>
                <li><a>World Confederation of Billiards Sports</a></li>
                <li><a>World Pool Association</a></li>
                <li><a>Olympic Movement</a></li>

            </ul>
            
            </div>
            <div>
            <h2><strong className="first_letter_effect">C</strong>ategories</h2>
            <hr></hr>
            <ul className="quick_links">
                <li onClick={()=>history.push('/category/1')}><a>World Snooker</a></li>
                <li onClick={()=>history.push('/category/2')}><a>World Billiards</a></li>
                <li onClick={()=>history.push('/category/3')}><a>World 6Reds</a></li>
                <li onClick={()=>history.push('/category/4')}><a>World Team</a></li>
                <li onClick={()=>history.push('/category/5')}><a>World U21</a></li>
                <li onClick={()=>history.push('/category/6')}><a>World U18</a></li>
                <li onClick={()=>history.push('/category/7')}><a>World U17</a></li>
                <li onClick={()=>history.push('/category/8')}><a>World U16</a></li>
                <li onClick={()=>history.push('/category/9')}><a>World Cup</a></li>
            </ul>
            </div>
            <div>
            <h2><strong className="first_letter_effect">S</strong>ocial</h2>
            <hr></hr>
            <div className="social_links">
            <MailOutlineIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;