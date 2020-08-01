# Async Handler

Handling the errors of the controllers async functions in `express` middleware by passing the error to the `next` function.

This util also can handle the nesting objects that contain async functions.

## Usage

Just pass the object/function to it and it wraps them in a handler.

For example:

```javascript
const controllers = {
  authController: {
    register: async () => {},
    login: async () => {},
    logout: async () => {},
  },
  userController: {
    get: {
      getOne: async () => {},
      getAll: async () => {},
    },
    set: async () => {}
  }
}

modules.exports = asyncHandler(controllers);
```

It digs into the object and finds the functions and wraps them in a handler, then gives you the same object with the same key names.
