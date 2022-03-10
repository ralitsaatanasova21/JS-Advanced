function extensibleObject() {
  let proto = {};
  let extobj = Object.create(proto);
  extobj.extend = function (template) {
    for (const key in template) {
      if (typeof template[key] === "function") {
        let proto = Object.getPrototypeOf(this);
        proto[key] = template[key];
        continue;
      }
      this[key] = template[key];
    }
  };
  return extobj;
}
const myObj = extensibleObject();
