
describe('Math Suite', function() {

    function add(a, b) {
        return a+b
    }

    it('should add two numbers correctly', () => {
        var result = 2;

        expect(add(1,1)).toEqual(result);
    });

    it('should add two numbers correctly again', () => {
        var result = 2;

        expect(add(1,2)).withContext('Values were expected to be equal').toEqual(result);
    });
})