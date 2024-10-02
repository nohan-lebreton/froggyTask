import { v4 as uuidv4 } from 'uuid'

export default class Task {
  constructor(label, isDone = false, id = null) {
    this.id = id || uuidv4()
    this.label = label
    this.done = isDone
  }

  markAsDone() {
    this.done = true
  }

  markAsNotDone() {
    this.done = false
  }

  rename(newLabel) {
    this.label = newLabel
  }

  toggle() {
    this.done = !this.done
  }
}
