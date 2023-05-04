import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../common/popup/popup.component";
import {QuestionsService} from "../../../services/questions.service";
import {QuestionType} from "../../../types/question.type";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {
  private timerPopup: any = null;
  public questions: QuestionType[] = this.questionService.allQuestions;

  constructor(private modalService: NgbModal,
              private questionService: QuestionsService) {
  }

  ngOnInit() {
    this.timerPopup = setTimeout(() => {
      this.modalService.open(PopupComponent, {centered: true})
    }, 10000);
  }

  ngOnDestroy() {
    clearTimeout(this.timerPopup);
    this.modalService.dismissAll();
  }
}
