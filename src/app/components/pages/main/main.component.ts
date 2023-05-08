import {Component, OnDestroy} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../common/popup/popup.component";
import {QuestionsService} from "../../../services/questions.service";
import {QuestionType} from "../../../types/question.type";
import {ProductService} from "../../../services/product.service";

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
    // this.productService.setSearchTitle('');
  }
}
