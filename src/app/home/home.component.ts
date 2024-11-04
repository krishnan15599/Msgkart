import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  template: `
    <section class="container">
      <!-- Left side: Image -->
      <img src="/msgkart.jfif" alt="MsgKart Image" class="responsive-image">

      <!-- Right side: Form -->
      <form class="right-section" #registrationForm="ngForm" (ngSubmit)="onSubmit(registrationForm)">
        <div>
          <div class="image-container">
            <img src="/logo.png" alt="Logo Image" class="left-image">
            <div class="right-side-content">
              <img src="/aiimage.png" alt="AI Image" class="right-image">
              <h4>AI Powered CRM</h4>
            </div>
          </div>
          <div class="center-content">
            <h1>Registration</h1>
            <p class="center-content-para">Join us and take control of your business growth</p>
            <div class="registration-form">
              
              <!-- Company Name -->
              <div class="input-wrapper">
                <img src="Building.png" alt="Company Icon" class="input-icon">
                <input 
                  class="input-field" 
                  type="text" 
                  id="company-name" 
                  name="companyName" 
                  placeholder="Company Name"
                  ngModel
                  #companyName="ngModel"
                  required>
                <div *ngIf="companyName.invalid && companyName.touched" class="error">Company name is required.</div>
              </div>

              <!-- Website -->
              <div class="input-wrapper">
                <img src="CardsThree.png" alt="Website Icon" class="input-icon">
                <input 
                  class="input-field" 
                  type="url" 
                  id="website" 
                  name="website" 
                  placeholder="Website"
                  ngModel
                  #website="ngModel"
                  pattern="https?://.+">
                <div *ngIf="website.invalid && website.touched" class="error">Enter a valid URL starting with http or https.</div>
              </div>

              <!-- Email -->
              <div class="input-wrapper">
                <img src="EnvelopeSimple.png" alt="Email Icon" class="input-icon">
                <input 
                  class="input-field" 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email"
                  ngModel
                  #email="ngModel"
                  required
                  email>
                <div *ngIf="email.invalid && email.touched" class="error">Enter a valid email address.</div>
              </div>

              <!-- GST Number -->
              <div class="input-wrapper">
                <input 
                  class="input-field-gst" 
                  type="text" 
                  id="gst-number" 
                  name="gstNumber" 
                  placeholder="Enter GST Number"
                  ngModel
                  #gstNumber="ngModel"
                  minlength="15" maxlength="15">
                <div *ngIf="gstNumber.invalid && gstNumber.touched" class="error">GST Number must be 15 characters.</div>
              </div>

              <!-- No GST Checkbox -->
              <div class="form-group">
                <input 
                  class="form-group-input" 
                  type="checkbox" 
                  id="no-gst" 
                  name="noGst" 
                  ngModel>
                <label for="no-gst">I don’t have GST</label>
              </div>

              <!-- Submit Button -->
              <button type="submit" [disabled]="registrationForm.invalid">Register</button>
              <p class="registration-form-para">Already have an account? <a class="registration-form-link" href="#">Sign in</a></p>
            </div>

            <div>
              <p class="registration-form-paragraph">You will receive an email with your credentials.</p>
              <p class="registration-form-paragraph">Please use the same to Sign In.</p>
            </div>
            
            <!-- Social Icons -->
            <div class="social">
              <p class="social-para">Multi Channel Engagement</p>
              <div class="divider"></div>
              <div class="social-icons">
                  <img src="insta.png" alt="Instagram" class="social-icon">
                  <img src="gis_globe.png" alt="Globe" class="social-icon">
                  <img src="Group 6065.png" alt="Facebook" class="social-icon">
                  <img src="Group 6069.png" alt="WhatsApp" class="social-icon">
                  <img src="Group 6067.png" alt="Messenger" class="social-icon">
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form Submitted!", form.value);
    }
  }
}
