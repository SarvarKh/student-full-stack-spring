import 'unfetch/polyfill'

const checkStatus = response => {
    if (response.ok) {
      return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllStudents = () =>
    fetch("localhost:8080/api/v2/customers")
        .then(checkStatus);