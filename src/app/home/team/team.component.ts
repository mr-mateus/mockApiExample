import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { UserTeam } from '../../models/userTeam';
import { TeamView } from '../../models/teamView';
import { TeamService } from '../../core/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public team: Team;
  public teamView: TeamView;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamEmployees().subscribe(response => {
      this.team = response;
    }, error => {
    }, () => {
    });
  }

  toggle(user: UserTeam): void {
    user.salaryIsVisible = !user.salaryIsVisible;
  }
}
