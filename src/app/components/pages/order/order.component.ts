import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  public buyTeaForm: FormGroup = new FormGroup({});
  public isSuccessForm: boolean = false;
  public dangerTextForm: boolean = false;
  public isDisabledButton: boolean = false;

  constructor(private formService: FormService,
              private orderService: OrderService) {
  }

  ngOnInit() {

    this.buyTeaForm = new FormGroup({
      product: new FormControl({value: this.orderService.product?.title, disabled: true}),
      name: new FormControl('', [Validators.required, Validators.pattern(new RegExp('^[а-яА-Я]'))]),
      phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$'))]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(new RegExp('^[а-яА-Я]'))]),
      country: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.pattern(new RegExp('^[A-Za-z0-9\\s\\/-]*$'))]),
      comment: new FormControl('', []),
    })
  }

  get product() {
    return this.buyTeaForm.get('product');
  }

  get name() {
    return this.buyTeaForm.get('name');
  }

  get phone() {
    return this.buyTeaForm.get('phone');
  }

  get lastName() {
    return this.buyTeaForm.get('last_name');
  }

  get country() {
    return this.buyTeaForm.get('country');
  }

  get zip() {
    return this.buyTeaForm.get('zip');
  }

  get address() {
    return this.buyTeaForm.get('address');
  }

  get comment() {
    return this.buyTeaForm.get('comment');
  }

  public sendOrder(): void {
    this.isDisabledButton = true;
    this.formService.submitForm(this.buyTeaForm.getRawValue()).subscribe(result => {
      this.isSuccessForm = !!result.success;
      this.dangerTextForm = !result.success;
      this.isDisabledButton = false;
    });
    setTimeout(() => {
      this.dangerTextForm = false;
    }, 3000);
  }
}
