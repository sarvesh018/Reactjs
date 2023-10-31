import React,{useState} from 'react'
import { Products } from './Constants'
import GoBack from './GoBack'


//productCategoryComponent
function ProductCategoryRow({category}){
  return(
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow({product}){
  const name = product.stocked ? product.name :
  <span style={{color:'red'}}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}


//product table to print data
function ProductTable({products, filterText, inStock}){
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(
      filterText.toLowerCase()) === -1
    ){
      return ;
    }
    if(inStock && !product.stocked){
      return;
    }
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow 
        category={product.category} 
        key={product.category}/>
      );
    }
    rows.push(
      <ProductRow 
      product={product} 
      key={product.name}/>
    );
    lastCategory = product.category;
  });

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function SearchBar({filterText, inStock, onFilterTextChange, onStockChange}){
  return(
    <form className='flex flex-col gap-2 bg-[#898888] px-4 py-8 rounded-sm'>
      <input
      className='px-2 py-2 rounded-lg'
        type='text' value={filterText} 
        placeholder='Search...'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
          type='checkbox'
          checked={inStock}
          onChange={(e) => onStockChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  )
}

export default function MockUp() {
  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false);
  return (
    <div className='flex flex-col gap-10'>
    <div className='flex flex-col gap-10 items-center rounded-lg justify-center pb-10 bg-[#5c3c3c]'>
      <SearchBar
        filterText={filterText}
        inStock={inStock}
        onFilterTextChange={setFilterText}
        onStockChange={setInStock}
      />
      <ProductTable
        products={Products}
        filterText={filterText}
        inStock={inStock}
      />
    </div>
    <div>
      <GoBack/>
    </div>
    </div>
  )
}