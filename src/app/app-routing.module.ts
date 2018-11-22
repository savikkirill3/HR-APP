import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterviewComponent} from './pages/interview/interview.component';
import {CandidateComponent} from './pages/candidate/candidate.component';
import {VacancyComponent} from './pages/vacancy/vacancy.component';
import {CandidatePageComponent} from './pages/candidate/candidate-page/candidate-page.component';

const routes: Routes = [
  {path: '', component: InterviewComponent},
  {path: 'interview', component: InterviewComponent},
  {path: 'candidates', component: CandidateComponent},
  {path: 'vacancy', component: VacancyComponent},
  {path: 'candidates/:id', component: CandidatePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
