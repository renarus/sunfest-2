import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';
import { faPinterestP} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faDribbble,faBehance} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  pinterestIcon=faPinterestP;
  facebookIcon=faFacebookF;
  twitterIcon=faTwitter;
  dribbleIcon=faDribbble;
  behanceIcon=faBehance;
  linkedinIcon=faLinkedinIn;
}
