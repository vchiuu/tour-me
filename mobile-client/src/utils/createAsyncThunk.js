const createAsyncThunk = (actionType, callback) => (...args) => async dispatch => {
  dispatch({ type: `${actionType}_REQUEST` });
  try {
    const isAsync = callback[Symbol.toStringTag] === 'AsyncFunction';
    const payload = isAsync ? await callback(...args) : callback(...args);
    dispatch({ type: `${actionType}_SUCCESS`, payload });
  } catch (error) {
    dispatch({ type: `${actionType}_FAILURE`, error });
  }
};

export default createAsyncThunk;
