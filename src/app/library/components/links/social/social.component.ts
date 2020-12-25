import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  youtube = faYoutube;
  instagram = faInstagram;
  facebook = faFacebookF;
  vk = faVk;

  constructor() { }

  ngOnInit(): void {
  }

}
