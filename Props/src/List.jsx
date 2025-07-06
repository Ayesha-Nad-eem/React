

function List({ category = "Category", items = [] }) {
    const categorys = category;
    const itemlist = items;
    
    const listitems = itemlist.map((fruit) => (
        <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>
    ));

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); // ascending order
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); // descending order
    //fruits.sort((a, b) => a.calories - b.calories);    // ascending order
    // fruits.sort((a, b) => b.calories - a.calories); // descending order

    // const lowcalfruits = fruits.filter((fruit) => fruit.calories < 65);
    // const listitems = lowcalfruits.map((fruit) => (
    //     <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>
    // ));

    // const highcalfruits = fruits.filter((fruit) => fruit.calories >= 65);
    // const listitems = highcalfruits.map((fruit) => (
    //     <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>
    // ));


    return (
        <>
            <h1 className="list-category">{categorys}</h1>
            {/* <ol className="list-items">{listitems}</ol> */}
            <ul className="list-items">{listitems}</ul>
        </>
    );
}

export default List;