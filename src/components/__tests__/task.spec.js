import { describe, test, expect } from 'vitest'
import Task from '@/stores/task'

describe('Task tests', () => {
  test('can create a Task', () => {
    const task = new Task('test')
    expect(task.id).not.toBeNull()
    expect(task.label).toBe('test')
    expect(task.done).toBe(false)
  })

  test('can mark a Task as done', () => {
    const task = new Task('test')
    task.markAsDone()
    expect(task.done).toBe(true)
  })

  test('can rename a Task label', () => {
    const task = new Task('test')
    task.rename('newLabel')
    expect(task.label).toBe('newLabel')
  })

  test('can mark a Task as notDone', () => {
    const task = new Task('test')
    task.done = true
    task.markAsNotDone()
    expect(task.done).toBe(false)
  })

  test('can toggle a Task not done to done', () => {
    const task = new Task('test')
    task.toggle()
    expect(task.done).toBe(true)
    task.toggle()
    expect(task.done).toBe(false)
  })
})
