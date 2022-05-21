import IAnswerResponse from '../interfaces/ebag'
import { fetchDataSource } from '../utils/datasource'
import { EBAG } from '../utils/Ebag'

test('fetch and convert an Ebag assignment', async () => {
  const { documentModel } = await fetchDataSource<IAnswerResponse>(
    'c6c19402-3432-4589-b71e-64254c3c343c'
  )
  console.log(EBAG.toAsgmt(documentModel))
})
