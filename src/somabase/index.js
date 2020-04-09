function make_soma (base) {
  return function soma (a, b, vaium = false) {
    var ai = base.indexOf(a);
    var bi = base.indexOf(b);

    if (ai === -1) {
      ai = 0
    }
    if (bi === -1) {
      bi = 0
    }

    var abi = ai + bi;
  
    if (vaium) {
      abi = abi + 1;
      vaium = false;
    }

    if (abi > base.length - 1) {
      abi = abi - base.length;
      vaium = true;
    }

    return {
      digito: base[abi],
      vaium
    }
  }
}

module.exports = make_soma