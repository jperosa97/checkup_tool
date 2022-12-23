module.exports = function() {
    const faker = require('faker');
    const _ = require('lodash');

    return{
        people: _.times(50, function(n) {
            return{
                id: n + 1,
                company: faker.company.bs(), //firmenname
                date_past: faker.date.past().toLocaleDateString(), //Datum abgelaufen
                date_recent: faker.date.recent().toLocaleDateString(), //Datum verspätet
                date_soon: faker.date.future().toLocaleDateString(), //Datum zukunft    
                website: faker.internet.url()            
            }
        })
    }
}