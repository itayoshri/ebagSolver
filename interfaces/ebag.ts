export default interface IAnswerResponse {
  documentId: string
  documentModel: IDocumentModel
}

export interface IDocumentModel {
  e_questionnaire: { e_page: IEbagPage[] }
}

export interface IEbagPage {
  e_question: IEbagQuestion[]
}

export interface IEbagQuestion {
  e_cloze: IEbagCloseQuestion
}

export interface IEbagCloseQuestion {
  e_dropdownField?: IEbagQDropdown
  e_textField?: IEbagQeTextField[]
}

export interface IEbagQDropdown {
  localId: string
  correctOptionValue: number
}

export interface IEbagQeTextField {
  localId: string
  correctAnswer: string[]
}
