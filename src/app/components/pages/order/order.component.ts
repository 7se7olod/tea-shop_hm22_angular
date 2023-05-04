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
  private readonly nameRegex: RegExp = new RegExp('^[а-яА-Я]');
  private readonly phoneRegex: RegExp = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');
  private readonly addressRegex: RegExp = new RegExp('^[А-Яа-я0-9\\s\\/-]*$');
  private readonly countryRegex: RegExp = new RegExp('^[а-яА-Я]+(?:[\\s-][а-яА-Я]+)*$');
  private readonly zipRegex: RegExp = new RegExp('^\\d{5}(?:[-\\s]\\d{4})?$');

  constructor(private formService: FormService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.buyTeaForm = new FormGroup({
      product: new FormControl({value: this.orderService.product?.title, disabled: true}),
      name: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
      country: new FormControl('', [Validators.required, Validators.pattern(this.countryRegex)]),
      zip: new FormControl('', [Validators.required, Validators.pattern(this.zipRegex)]),
      address: new FormControl('', [Validators.required, Validators.pattern(this.addressRegex)]),
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
