import { expect } from 'chai';
import sayHello from '../src/hello';

it('should return Hello World!', () => {
	expect(sayHello()).to.equal('Hello World!');
});
