import Persistance from './persistance'

export default class LocalStoragePersistance extends Persistance {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  load(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  delete(key) {
    localStorage.removeItem(key)
  }
}
