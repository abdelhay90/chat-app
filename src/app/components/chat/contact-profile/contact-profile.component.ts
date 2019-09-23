import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../../services/current-user.service';
import {UserProfile} from '../../../model/user-profile';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss']
})
export class ContactProfileComponent implements OnInit {
  social_icons = ['fa-facebook', 'fa-twitter'];
  userProfile: UserProfile;

  constructor(
    private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    this.currentUserService.getUserProfile().subscribe(data => this.userProfile = data);
  }
}
