import operate from '../operate';

describe('Operate logic component test', () => {
  it('Addition:', () => {
    expect(operate(3, 2, '+')).toEqual('5');
  });
  it('Division by zero:', () => {
    expect(operate(3, 0, '÷')).toEqual("Can't divide by 0.");
  });
  it('Modulus:', () => {
    expect(operate(3, 1, '%')).toEqual('0');
  });
  it('Unknown operator:', () => {
    expect(() => operate(1, 2, 'y')).toThrow("Unknown operation 'y'");
  });
  it('Unknown operand:', () => {
    expect(() => operate('a', 2, 'x')).toThrow('');
  });
});
