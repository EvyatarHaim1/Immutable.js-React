import { Map } from 'immutable';
import React from 'react';

function MapExample() {
    let map1 = Map({ a: 1, b: 2, c: 3 });
    let map2 = map1.set('b', 50);
    let map3 = Map({ d: 7, e: 9, f: 4 });
    let deleteMap = map1.delete('c');
    let isMap = console.log(Map.isMap(map1)); // check if it's map and print true as expected
    let isNotMap = console.log(Map.isMap([1, 2, 3])); // check if it's map and print false as expected
    let map4 = map1.merge(map3);
    return (
        <div>
            <h1>setting one property without mutate the original map</h1>
            <h2> map 2 - the hash table which I set the key 'b' in immutable way <strong>{map2}</strong></h2>
            <h2> map 1 - the original hash table which saved its values <strong>{map1}</strong></h2>
            <h1>map4 {map4} which is map1 merged with map3</h1>
            <h1>delete the key "c" in map1 {deleteMap} </h1>
        </div>
    )
}

export default MapExample;

