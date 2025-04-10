import React from 'react';
import SingleItem from "./SingleItem";
import { Link, useLocation } from 'react-router-dom';


export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Criando variável da quantidade de exibição de itens nas telas Condicional para verificar se o número de itens deve ser igual ao já estabelecido ou um infinito de elementos  
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
        <div className="item-list__header">
            <h2>{title} Populares</h2>
              {/* Usando a variável isHome para identficarmos se estamos na home ou não */}
              {isHome ? (
                <Link to={path} className="item-list__link">
                  Mostrar tudo
                </Link>
                ) : (
                <></>
                )}
        </div>
    
        <div className="item-list__container">
            {/* Sequencia dos componentes/icones dos artistas */}
                
            {/* Englobando os "SingleItems" em um único elemento/fragmento pois o React não permite a passagem de mais de um elemento de texto dentro da função */}

            {/* Automatizando a exibição dos Single Items com um loop e exibindo um número especifíco de ícones */}
            {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (
                <SingleItem    
                // Spread operator: serve para resgatar todos os valores de um objeto, permite a cópia dos valores de um array/obj
                {...currObj} 
                // O componente "Item List" está recebendo o idPath e passando-o
                idPath={idPath}
                key={`${title}-${index}`}  
                /> 
                // Identificando os elementos com uma "key"
            ))}
        </div>
    </div>
  );
};

export default ItemList;

