function requestValidator(object) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /\.*\w*\.+\w*/g;
    const messagePattern = /[<>\\&'"]/g;

    if (!methods.includes(object.method) || object.method === undefined) {
        errorText('Method');
    } else if (object.uri === undefined) {
        errorText('URI');
    } else if (object.uri.match(uriPattern) === null || object.uri.length === 0) {
        errorText('URI');
    } else if (!versions.includes(object.version) || object.version === undefined) {
        errorText('Version');
    } else if (object.message === undefined) {
        errorText('Message');
    } else if (object.message.match(messagePattern) !== null) {
        errorText('Message');
    }

    return object;

    function errorText(errorType) {
        throw new Error(`Invalid request header: Invalid ${errorType}`);
    }
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })
  

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  );