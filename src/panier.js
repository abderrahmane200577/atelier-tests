const total = (items) =>
  items.reduce((somme, item) => somme + item.prix * item.qte, 0);

module.exports = { total };