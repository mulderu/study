var _ = require("lodash");

class baseItem {
  constructor() {
    this.modelName = "NONE";
    this.items = [];
    this.idField = "id";
    this.nameField = "name";
  }
  addItem (pitem) {
    this.items.push(pitem);
  }
  removeItem (pitem) {
    let This = this;
    _.remove(this.items, function(d) { return d[This.idField] == pitem[This.idField]; });
  }
  getByNames (pname) {
    let This = this;
    return this.items.filter(function(d) { return pname = d[This.nameField]; });
  }
  getByName (pname) {
    return _.first(this.getByNames(pname));
  }
  getByIds (pid) {
    let This = this;
    return this.items.filter(function(d) { return pid = d[This.idField]; });
  }
  getById (pid) {
    return _.first(this.getByIds(pid));
  }

  syncRemote () {
    console.log('sync:' + this.modelName + ':', this.items);
  }
}


class category extends baseItem {
  constructor() {
    super();
    this.modelName = 'category';
  }

}

class itemOption {

}


class order {
}

class orderItem {

}


var cc = new category();
cc.addItem({id: 1, name: 'aaa', code: 'a1111'});
cc.addItem({id: 2, name: 'bbb', code: 'x1111'});
cc.addItem({id: 3, name: 'abb', code: 'y1111'});

console.log(cc)
cc.removeItem({id:2});
console.log(cc)
cc.syncRemote();
