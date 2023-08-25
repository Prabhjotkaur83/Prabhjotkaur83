import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { AboutComponent } from './about/about.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UploadnotesComponent } from './uploadnotes/uploadnotes.component';
import { UploaderprofileComponent } from './uploaderprofile/uploaderprofile.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PreUploadComponent } from './pre-upload/pre-upload.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { ViewNotesComponent } from './admin/view-notes/view-notes.component';
import { HandleRequestsComponent } from './admin/handle-requests/handle-requests.component';
import { ProfileEditComponent } from './admin/profile-edit/profile-edit.component';
import { AddSemesterComponent } from './admin/add-semester/add-semester.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { AdminComponent } from './admin/admin.component';
import Swal from 'sweetalert2';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsernotesComponent } from './usernotes/usernotes.component';
import { ViewmynotesComponent } from './viewmynotes/viewmynotes.component';
import { EditmynotesComponent } from './editmynotes/editmynotes.component';
import { NewcategoriesComponent } from './newcategories/newcategories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminViewcategoryComponent } from './admin-viewcategory/admin-viewcategory.component';
import { UploadNotesAdminComponent } from './upload-notes-admin/upload-notes-admin.component';
import { UploadNotesByadminComponent } from './admin/upload-notes-byadmin/upload-notes-byadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductdetailsComponent,
    ListofproductsComponent,
    RegisterPageComponent,
    AboutComponent,
    AboutAuthorComponent,
    UploadnotesComponent,
    UploaderprofileComponent,
    SubscribeComponent,
    LoginComponent,
    ContactComponent,
    PreUploadComponent,
    AddCourseComponent,
    ViewStudentComponent,
    ViewNotesComponent,
    HandleRequestsComponent,
    ProfileEditComponent,
    AddSemesterComponent,
    AddSubjectComponent,
    AdminComponent,
    EditprofileComponent,
    UserprofileComponent,
    UsernotesComponent,
    ViewmynotesComponent,
    EditmynotesComponent,
    NewcategoriesComponent,
    DashboardComponent,
    AdminViewcategoryComponent,
    UploadNotesAdminComponent,
    UploadNotesByadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-bottom-right'}), 
      NgxSpinnerModule,
      NgSelectModule,
      ReactiveFormsModule,
      FormsModule,
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
