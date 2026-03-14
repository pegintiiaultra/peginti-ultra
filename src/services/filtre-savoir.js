const boOivini = require('./bo-oivini');

module.exports = async (input) => {
  const start = Date.now();
  const resultat = boOivini.validerSavoir(input);
  console.log(`🚀 Filtre: ${Date.now()-start}ms → ${resultat}`);
  return resultat === 'VALIDÉ' ? boOivini.bipSuperCerveau(input) : null;
};
