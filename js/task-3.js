function getElementWidth(content, padding, border) {
    // Преобразуем текстовые значения в числа
    const contentValue = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);

    // Рассчитываем ширину
    let width = contentValue + paddingValue * 2 + borderValue * 2;
    const message = `The element's width is ${width} pixels`;
    return message;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
