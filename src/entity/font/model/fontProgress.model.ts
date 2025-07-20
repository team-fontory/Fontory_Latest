import { formatIsoToDateTime } from '@/shared/lib'

import type { FontProgress } from '../types/font.type'

class FontProgressModel {
  id: FontProgress['id']
  name: FontProgress['name']
  createdAt: FontProgress['createdAt']
  status: FontProgress['status']

  constructor(data: FontProgress) {
    this.id = data.id
    this.name = data.name
    this.createdAt = formatIsoToDateTime(data.createdAt)
    this.status = data.status
  }
}

export class FontProgressListModel {
  fontList: FontProgressModel[]

  constructor(data: FontProgress[]) {
    this.fontList = data.map((item) => new FontProgressModel(item))
  }

  get isEmpty() {
    return this.fontList.length === 0
  }
}
