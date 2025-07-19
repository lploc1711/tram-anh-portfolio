import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  contactInfo = {
    email: 'lengoctr001@e.ntu.edu.sg',
    phone: '+46 769632438',
    linkedIn: 'https://linkedin.com/in/ngoc-tram-anh-le-873541150',
    linkedInDisplay: 'Le Ngoc Tram Anh',
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );

      const mailtoLink = `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      // Reset form
      this.contactForm.reset();
    }
  }
}
