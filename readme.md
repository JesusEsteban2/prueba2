# Entorno de testing.

Vitest
React --> Jest
Angular --> Jasmine

Elementos básicos de Test.

- describe: Agrupa test de una suite.
- test o it: Test unitario (Alias).
- expect: Asercion.
- to ...: Matcher

Coverage: Indica que el código ha pasado por todas las líneas que lo componen.

Mock en: Mockea y Espía.

describe('Given......', () => {
describe('When ...', () => {
test('Then ......', () => {
// Arrange
// Act
// Assert
});
});
});
