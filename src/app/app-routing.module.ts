import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterviewComponent} from './pages/interview/interview.component';
import {CandidateComponent} from './pages/candidate/candidate.component';
import {InterviewfeedbackComponent} from './pages/interviewfeedback/interviewfeedback.component';
import {VacancyComponent} from './pages/vacancy/vacancy.component';
import {AppComponent} from './app.component';
import {CandidatePageComponent} from './pages/candidate/candidate-page/candidate-page.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'interview', component: InterviewComponent},
  {path: 'candidate', component: CandidateComponent},
  {path: 'interviewfeedback', component: InterviewfeedbackComponent},
  {path: 'vacancy', component: VacancyComponent},
  {path: 'candidate/:candidateId', component: CandidatePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
