function parseError(error) {
  //check type of Error
  //if Array -> express validator, take message and param props from array
  //else if error.name = validationError -> Mongoose Validation, take error.entries => (field, e)  => [field , e.message]
  //else, process regular error, take message prop
  //return { error: [String], field: Object}

  const result = {
    messages: [],
    fields: {},
  };

  if (error.name == "ValidationError") {
    for (let [field, e] of Object.entries(error.errors)) {
      result.messages.push(e.message);
      result.fields[field] = field;
    }
    //mongoose
    result.fields = Object.fromEntries(
      Object.keys(error.errors).map((k) => [k, k])
    );
  } else if (Array.isArray(error)) {
    //validator
    result.messages = error.map((e) => e.msg);
    result.fields = Object.fromEntries(error.map((e) => [e.param, e.param]));
  } else {
    result.messages.push(error.message);
  }
  return result;
}


module.exports = {
    parseError,
}