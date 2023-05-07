import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {OrderService} from "../../../services/order.service";
import {CreateOrderInputType} from "../../../types/create-order-input.type";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  public isSuccessForm = false;
  public dangerTextForm = false;
  public isDisabledButton = false;
  private readonly nameRegex = new RegExp('^[а-яА-Я]');
  private readonly phoneRegex = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');
  private readonly addressRegex = new RegExp('^[А-Яа-я0-9\\s\\/-]*$');
  private readonly countryRegex = new RegExp('^[а-яА-Я]+(?:[\\s-][а-яА-Я]+)*$');
  private readonly zipRegex = new RegExp('^\\d{5}(?:[-\\s]\\d{4})?$');
  public buyTeaForm = this.fb.group({
    product: {value: '', disabled: true},
    name: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
    phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
    last_name: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
    country: ['', [Validators.required, Validators.pattern(this.countryRegex)]],
    zip: ['', [Validators.required, Validators.pattern(this.zipRegex)]],
    address: ['', [Validators.required, Validators.pattern(this.addressRegex)]],
    comment: '',
  });

  constructor(private formService: FormService,
              private orderService: OrderService,
              private fb: NonNullableFormBuilder,) {
  }

  ngOnInit() {
    this.buyTeaForm.patchValue({
      product: this.orderService.product?.title,
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
    this.buyTeaForm.markAllAsTouched();
    if (this.buyTeaForm.invalid) {
      this.isDisabledButton = false;
      this.isSuccessForm = false;
      this.dangerTextForm = true;
      setTimeout(() => {
        this.dangerTextForm = false;
      }, 3000);
      return;
    };
    const data: CreateOrderInputType = this.buyTeaForm.getRawValue();
    this.formService
      .createOrder(data)
      .subscribe(result => {
        if (result.success === 0) {
          this.isSuccessForm = false;
          this.dangerTextForm = true;
        } else if (result.success === 1) {
          this.isSuccessForm = true;
          this.dangerTextForm = false;
        }
        this.isDisabledButton = false;
      });
  }
}
