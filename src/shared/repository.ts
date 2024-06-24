export interface Repository<T> {
    findAll(): T[] | undefined; // Returns all entities
    findOne(item : {id: string}): T | undefined; // Returns the entity with the given id
    add(item: T): T | undefined; // Adds an entity
    update(item: T): T | undefined; // Updates an entity
    delete(item: {id: string}): T | undefined; // Deletes an entity









}