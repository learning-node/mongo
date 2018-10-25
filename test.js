function makeObj(name) {
    const newObj = {};
    newObj.dbName = name;
    newObj.collections = [];
    newObj.save = function(doc) {
        newObj.collections.push(doc);
        return newObj;
    };
    newObj.getAll = function() {
        return newObj.collections;
    }
    return newObj;
}

const allPizzas = makeObj("pizza")
    .save({ name: 'supreme', size: 'large' })
    .getAll();
console.log(allPizzas);

/*
1) allPizzas is declared.
2) The compiler sees it needs to calculate "makeObj("pizza").save({ name: 'supreme', size: 'large' }).getAll();" in order to know what to save into allPizzas.
3) In order to do #2, it needs to know what object .getAll() is coming from.
4) In order to do #3, it needs to know what object .save() is coming from.
5) In order to do #4, it needs to know what makeObj() is returning.
*/