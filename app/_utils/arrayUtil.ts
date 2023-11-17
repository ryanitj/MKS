export class ArrayUtil {
    static groupBy(array:Array<any>, key:string) {
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
}