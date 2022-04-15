import React from "react";
import ReactDOM from 'react-dom';

//Pensando em React: Passo 2  
export default function AppPensandoReact(){
    //row em portugues é linha 
    class ProductCategoryRow extends React.Component {
        render() {
          const category = this.props.category;
          return (
            <tr>
              <th colSpan="2">
                {category}
              </th>
            </tr>
          );
        }
      }
      
      class ProductRow extends React.Component {
        render() {
          const product = this.props.product;
          const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
              {product.name}
            </span>;
      
          return (
            <tr>
              <td>{name}</td>
              <td>{product.price}</td>
            </tr>
          );
        }
      }
      
      class ProductTable extends React.Component {
        render() {
          const rows = [];
          let lastCategory = null;
          
          this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
              rows.push(
                <ProductCategoryRow
                  category={product.category}
                  key={product.category} />
              );
            }
            rows.push(
              <ProductRow
                product={product}
                key={product.name} />
            );
            lastCategory = product.category;
          });
      
          return (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          );
        }
      }
      
      class SearchBar extends React.Component {
        render() {
          return (
            <form>
              <input type="text" placeholder="Procurar..." />
              <p>
                <input type="checkbox" />
                {' '}
                Mostrar apenas produtos em estoque
              </p>
            </form>
          );
        }
      }
      
      class FilterableProductTable extends React.Component {
        render() {
          return (
            <div>
              <SearchBar />
              <ProductTable products={this.props.products} />
            </div>
          );
        }
      }
      
      
      const PRODUCTS = [
        {category: 'Artigos Esportivos', price: 'R$234.77', stocked: true, name: 'Futebol americano' },
        {category: 'Artigos Esportivos', price: 'R$46.92', stocked: true, name: 'Beisebol' },
        {category: 'Artigos Esportivos', price: 'R$140.84', stocked: false, name: 'Basquetebol' },
        {category: 'Eletronicos', price: 'R$469.58', stocked: true, name: 'IPod Touch' },
        {category: 'Eletronicos', price: 'R$1878.47', stocked: true, name: 'IPhone6' },
        {category: 'Eletronicos', price: 'R$939.21', stocked: false, name: 'Nexus 7' }
      ];
       
      ReactDOM.render(
        <FilterableProductTable products={PRODUCTS} />,
        document.getElementById('root')
      );
}


