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


test('basic', () => {

  let sum = 1+2;
  expect(sum).toBe(3);
});

