import { mulp, splitIntoWords, sum } from "./01";
let a:number;
let b:number;
let c:number;

beforeEach( ()=> {
    a = 1;
    b = 2;
    c = 3;
})
test('sum shuld be correct', () => {
    //подготовительные данные
    // const a = 1;
    // const b = 2;
    // const c = 3;
    //действие
    const result1 = sum(a, b);
    a = 100
    const result2 = sum(a, c);

    //результат
    expect(result1).toBe(3);
    expect(result2).toBe(103);
})
test('mulp shuld be correct', () => {
    //подготовительные данные

    //действие
    const result1 = mulp(a, b);
    const result2 = mulp(b, c);

    //результат
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('spliting intoword shuldbe correct', () => {
    const a = 'Hello my friends';
    const b = 'test more things test!';

    const result1 = splitIntoWords(a);
    const result2 = splitIntoWords(b);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('test');
    expect(result2[1]).toBe('more');
    expect(result2[2]).toBe('things');
    expect(result2[3]).toBe('test');

})