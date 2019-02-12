import test from 'ava';
import * as React from 'react';
import {shallow} from 'enzyme';
import {HelloWorld, HelloWorldProps} from '../../src/components/HelloWorld';

test('HelloWorld should be in a h1 title', t => {
    const wrapper = shallow(<HelloWorld
        firstname="GLO-3112"
        lastname="WEB"/>);

    t.is(wrapper.find('h1').length, 1);
});

test('HelloWorld props are defined properly', t => {
    const wrapper = shallow(<HelloWorld
        firstname="GLO-3112"
        lastname="WEB"/>);

    t.is(wrapper.find('h1').text(), 'HELLOOOOOO GLO-3112 WEB!!!!!');
});