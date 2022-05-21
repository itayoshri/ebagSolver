import { IDocumentModel, IEbagPage, IEbagQuestion } from '../interfaces'

export class EBAG {
  static toQuestion(q: IEbagQuestion) {
    const question = q.e_cloze

    if (question.e_dropdownField) {
      return {
        type: 'dropdown',
        correctAnswer: question.e_dropdownField.correctOptionValue,
      }
    }

    if (question.e_textField) {
      return {
        type: 'textField',
        correctAnswer: question.e_textField,
      }
    }
  }

  static toPage(page: IEbagPage) {
    const questions = []
    for (const question of page.e_question) {
      questions.push(this.toQuestion(question))
    }
    return questions
  }

  static toAsgmt(document: IDocumentModel) {
    const pages = []
    const r_pages = document.e_questionnaire.e_page
    for (const page of r_pages) {
      pages.push(this.toPage(page))
    }

    return pages
  }
}
