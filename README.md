What is the use of mongoose libary ?

Schemas: You define the shape of your documents (fields, types, defaults, required fields), so data stays consistent.
Validation: Built-in rules like required, min, max, enum, match, plus custom validators, run before anything is saved.
Models with simple query methods: find, findById, updateOne, deleteMany and so on, with a chainable query builder (.where().sort().limit()).
