var debug = require('debug')('findmypast:Person'),
    Person = require('./Person'),
    _ = require('lodash');

var Relations = function(data){
  this.data = data;
};

Relations.prototype.getPersonData = function(personId){
  var personData = {},
      person = this.getPerson(personId);
  
  if(person){    
    personData.givenName = person.getGivenName();
    personData.familyName = person.getSurname();
  }
  
  return personData;
}

Relations.prototype.getPerson = function(personId){
  debug('getPerson:' + personId);
  var person = _.find(this.data.Persons, function(person){
    return person.Id == personId;
  });
  if(person){
    return new Person(person);
  }
}

module.exports = Relations;