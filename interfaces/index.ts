export * from './ebag'

type Question = 'textField' | 'dropdown'

export interface IQuestion {
  type: Question
}

export interface ITextFieldQuestion extends IQuestion {
  id: string
  correctAnswer: string
}

export interface IDropdownQuestion extends IQuestion {
  correctAnswer: number
}
