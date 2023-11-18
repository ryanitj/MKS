import { GroupBy } from "../_interfaces/GroupBy";

export class ArrayUtil {
    static groupBy<T>(array:Array<T | any>, key:string) : GroupBy<T>  {
        return array.reduce(function (acc, item) {
        const groupKey = item[key];
    
        // Se a chave do grupo ainda não existir no acumulador, crie um array vazio para ela
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
    
        // Adicione o item ao array do grupo correspondente
        acc[groupKey].push(item);
    
        return acc;
        }, {});
    }

    static removeItemByKey<T>(array:Array<T>, object:T | any, key:string){
        const auxProducts = array;
        const indexParaRemover = auxProducts.findIndex((item:T | any) => item[key] === object[key]);
    
        if (indexParaRemover !== -1) {
          auxProducts.splice(indexParaRemover, 1);
        }

        return auxProducts;
    }
}