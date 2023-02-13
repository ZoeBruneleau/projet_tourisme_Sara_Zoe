import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Tourisme} from "../mock/Tourisme";
import {AuthService} from "../service/auth.service";
import {User} from "../mock/User";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public currUser: User | undefined;
  public user: User[] = [];
  public list: Tourisme[] | undefined = [];

  public id?: string | null = "";

  constructor(private router: Router, private route: ActivatedRoute, private service: UserService, private authService: AuthService) {

    if (!(this.service.currUser == undefined)) {
      this.id = this.service.currUser.id.toString();
      this.currUser = this.service.currUser;
    } else {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getCurrUserById(this.id);
    }
    this.service.getUserList(this.id);
    this.list = this.service.lieus
  }

  ngOnInit(): void {
  }


  getCurrUserById(id: string | null) {
    this.service.getUserById(id)
      .subscribe((res) => {
        this.currUser = res;
      });

  }

  logout() {
    this.authService.logout();
    alert("Vous êtes déconnecté");
    this.router.navigate(['/home']);

  }


}
