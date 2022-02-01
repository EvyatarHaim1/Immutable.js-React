import { Map } from 'immutable';
import React from 'react';

function MapExample() {
    let map1 = Map({ a: 1, b: 2, c: 3 });
    let map2 = map1.set('b', 50);
    return (
        <div>
            <h2> map 2 - the hash table which I set the key 'b' in immutable way <strong>{map2}</strong></h2>
            <h2> map 1 - the original hash table which saved its values <strong>{map1}</strong></h2>
        </div>
    )
}

export default MapExample;

