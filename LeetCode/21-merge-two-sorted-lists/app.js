function app(list1, list2) {
    
/*     var listConcat = list1.concat(list2) ; 

    var classedList = listConcat.sort((a, b) => a - b);

    return classedList 
    
    Ce code ne fonctionnera que s'il s'agit de tableaux

    */

    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }

    /* The second method works, but I don't undestood everythings about node, need to learn more */

}

module.exports = app;