function parseError(error){
    //check type of Error
    //if Array -> express validator, take message and param props from array
    //else if error.name = validationError -> Mongoose Validation, take error.entries => (field, e)  => [field , e.message]
    //else, process regular error, take message prop
    //return { error: [String], field: Object}
}