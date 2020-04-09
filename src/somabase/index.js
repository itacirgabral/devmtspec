function make_soma (base) {
  return function soma (a, b, vaium = false) {
    var ai = base.indexOf(a);
    var bi = base.indexOf(b);
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