import {
  System,
  World,
  Component,
  Entity,
  EntityRef,
  EntitySet,
  EntityObject,
  Query,
} from 'ape-ecs';

const ECS = {
  World,
  System: System,
  Component,
};

// import {iterateBranches} from '../src/server/lib'


test('basic', () => {

  // iterateBranches('/home/x/work/DoubleRay');

  let sum = 1+2;
  expect(sum).toBe(3);
});

