class Person {
  public name: string = ''

  public greeting(name: string): string {
    return `Hello ${name}`
  }
}

export default new Person()
