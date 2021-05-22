import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSlides, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tax',
  templateUrl: 'tax.page.html',
  styleUrls: ['tax.page.scss'],
})
export class TaxPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) taxSlides: IonSlides;
  taxForm: FormGroup;

  slideOpts = {
    initialSlide: 0,
  };

  activeSlide = 0;
  nextBtnText = 'Next';
  prevBtnText = 'Back';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.taxForm = new FormGroup({
      taxFileNo: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      dob: new FormControl(''),
      address: new FormControl(''),
      postal: new FormControl(''),
      australianResident: new FormControl(),
      willYouLodgeTax: new FormControl(),
      incomeStatement: new FormArray([this.incomeForm()]),
      interest: new FormArray([this.interestForm()]),
    });
  }

  moveTo() {
    this.taxSlides.getActiveIndex().then((value) => {
      this.activeSlide = value;
      this.nextBtnText = value === 2 ? 'Finish' : 'Next';
    });
  }

  next() {
    if (this.activeSlide === 2) {
      this.save();
      return;
    }
    this.taxSlides.slideNext();
  }

  back() {
    this.taxSlides.slidePrev();
  }

  get incomeStatement(): FormArray {
    return this.taxForm.get('incomeStatement') as FormArray;
  }

  get interest(): FormArray {
    return this.taxForm.get('interest') as FormArray;
  }

  get progress() {
    if (this.activeSlide === 1) {
      return 0.5;
    }
    if (this.activeSlide === 2) {
      return 0.8;
    }
    return 0;
  }

  addIncome() {
    this.incomeStatement.push(this.incomeForm());
  }

  removeIncome(index) {
    this.incomeStatement.removeAt(index);
  }

  incomeForm() {
    return new FormGroup({
      companyName: new FormControl(''),
      income: new FormControl(''),
      taxWithheld: new FormControl(''),
    });
  }

  addBank() {
    this.interest.push(this.interestForm());
  }

  removeBank(index) {
    this.interest.removeAt(index);
  }

  interestForm() {
    return new FormGroup({
      bankName: new FormControl(''),
      income: new FormControl(''),
      taxWithheld: new FormControl(''),
    });
  }

  save() {
    const { value, invalid } = this.taxForm;
    if (invalid) {
      this.toastController
        .create({
          message: `Name is missing, Please provide name to continue.`,
          duration: 1000,
        })
        .then((toast) => toast.present());
      return;
    }
    this.toastController
      .create({
        message: `Enquiry for ${value.name} has been submitted successfully.`,
        duration: 3000,
      })
      .then((toast) => toast.present());
    this.navCtrl.back();
  }
}
