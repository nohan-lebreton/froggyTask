import { describe, expect, test, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTaskListStore } from '@/views/TaskList/taskList'
import Task from '@/views/TaskList/task'

describe('TaskList store tests', () => {
  let taskListStore

  beforeEach(() => {
    setActivePinia(createPinia())
    taskListStore = useTaskListStore()
  })

  test('can add a task', () => {
    const task = new Task('test')
    taskListStore.add(task)
    expect(taskListStore.list).toStrictEqual([task])
  })

  test('can remove a task', () => {
    const task1 = new Task('Task 1')
    const task2 = new Task('Task 2')
    const task3 = new Task('Task 3')
    taskListStore.list.push(task1, task2, task3)

    taskListStore.remove(task2)
    expect(taskListStore.list).toStrictEqual([task1, task3])
  })

  test('can search in tasklist', () => {
    const task1 = new Task('test1')
    const task2 = new Task('vitest')
    const task3 = new Task('nohan')

    taskListStore.list.push(task1, task2, task3)

    const searchList = taskListStore.searchTask('test')
    expect(searchList).toStrictEqual([task1, task2])
  })
})
