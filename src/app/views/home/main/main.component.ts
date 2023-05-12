import {Component, OnDestroy} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../../shared/services/product.service";
import {QuestionsService} from "../../../shared/services/questions.service";
import {QuestionType} from "../../../shared/types/question.type";
import {PopupComponent} from "../../../shared/layout/popup/popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnDestroy {
  private timerPopup = setTimeout(() => {
    this.modalService.open(PopupComponent, {centered: true})
  }, 10000);
  public questions: QuestionType[] = this.questionService.allQuestions;

  constructor(private modalService: NgbModal,
              private questionService: QuestionsService,
              private productService: ProductService) {
  }

  ngOnDestroy() {
    clearTimeout(this.timerPopup);
    this.modalService.dismissAll();
  }

  public goToCatalog(): void {
    this.productService.setSearchTitle('');
  }
}
