'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardSchema extends Schema {
  up () {
    this.create('cards', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cards')
  }
}

module.exports = CardSchema
