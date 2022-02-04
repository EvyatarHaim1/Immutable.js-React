import { List } from 'immutable';
import React from 'react';

function ListExample() {
    let list1 = List([1, 2, 3]);
    let list2 = List(["a", "b", "c"]);
    let getIndexList = list1.get(1);
    let setIndexList = list1.set(0, 100);
    let mergeLists = list1.merge(list2);
    return (
        <div>
            <h1> an example list {list1}</h1>
            <h1>getting the index 1 of the list {getIndexList}</h1>
            <h1>setting the index 0 of the list {setIndexList}</h1>
            <h1>merging lists 1 and 2 {mergeLists}</h1>
        </div>);
}

export default ListExample;
