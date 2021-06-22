import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/http/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() drawerToggled = new EventEmitter();
  
  user: any | undefined;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(res => {
      this.user = res;
    });
  }

  toggleDrawer = () => {
    this.drawerToggled.emit('toggle');
  }

}
