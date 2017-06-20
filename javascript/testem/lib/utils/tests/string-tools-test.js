import { initials } from '../string-tools';

function Person(name) {
  this.name = name;
  this.initials = initials(name);
};

export default Person;
