import { initials } from '../utils/string-tools';

function Person(name) {
  this.name = name;
  this.initials = initials(name);
};

export default Person;
