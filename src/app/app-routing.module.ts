import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { LoginComponent } from './login/login.component';
import { PreUploadComponent } from './pre-upload/pre-upload.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UploaderprofileComponent } from './uploaderprofile/uploaderprofile.component';
import { UploadnotesComponent } from './uploadnotes/uploadnotes.component';
import { AdminComponent } from './admin/admin.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddSemesterComponent } from './admin/add-semester/add-semester.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { ViewNotesComponent } from './admin/view-notes/view-notes.component';
import { HandleRequestsComponent } from './admin/handle-requests/handle-requests.component';
import { ProfileEditComponent } from './admin/profile-edit/profile-edit.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsernotesComponent } from './usernotes/usernotes.component';
import { EditmynotesComponent } from './editmynotes/editmynotes.component';
import { ViewmynotesComponent } from './viewmynotes/viewmynotes.component';
import { NewcategoriesComponent } from './newcategories/newcategories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminViewcategoryComponent } from './admin-viewcategory/admin-viewcategory.component';
import { UploadNotesByadminComponent } from './admin/upload-notes-byadmin/upload-notes-byadmin.component';

const routes: Routes = [
  {path:'',redirectTo:'/layout/home',pathMatch:'full'},
  {path:'layout' ,component:LayoutComponent,
children:[
  {path:'home',component:HomeComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'listproducts',component:ListofproductsComponent},
  {path:'viewcategories',component:NewcategoriesComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'about',component:AboutComponent},
  {path:'aboutauthor',component:AboutAuthorComponent},
  {path:'uploadnotes',component:UploadnotesComponent},
  {path:'uploaderprofile',component:UploaderprofileComponent},
  {path:'subscribe',component:SubscribeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path: 'preupload',component:PreUploadComponent},
  {path: 'userprofileedit',component:EditprofileComponent},
  {path: 'userprofile',component:UserprofileComponent},
  {path: 'usernotes',component:UsernotesComponent},
  {path: 'editnotes',component:EditmynotesComponent},
  {path: 'view',component:ViewmynotesComponent},

]
  
},
{path:'admin',redirectTo:'/admin/dashboard',pathMatch: 'full'},
{path:'admin',component: AdminComponent,
children:[
{path: 'addcourse',component:AddCourseComponent},
{path: 'addsemester',component:AddSemesterComponent},
{path: 'viewstudent',component:ViewStudentComponent},
{path: 'viewnotes',component:ViewNotesComponent},
{path: 'handlerequest',component:HandleRequestsComponent},
{path: 'profileedit',component:ProfileEditComponent},
{path: 'subject',component:AddSubjectComponent},
{path: 'dashboard',component:DashboardComponent},
{path: 'adminviewcategory', component: AdminViewcategoryComponent},
{path: 'uploadnotsadmin', component: UploadNotesByadminComponent}

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
