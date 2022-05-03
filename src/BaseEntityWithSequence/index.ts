import { EntityWithSequence } from "../EntityWithSequence";
import { BaseEntity } from 'typeorm'

interface BaseEntityWithSequence extends EntityWithSequence, BaseEntity { }
class BaseEntityWithSequence { }

function applyMixins(derivedConstructor: any, constructors: any[]) {
  constructors.forEach((baseConstructor) => {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseConstructor.prototype, name) ||
        Object.create(null)
      );
    });
  });
}

applyMixins(BaseEntityWithSequence, [EntityWithSequence, BaseEntity]);
