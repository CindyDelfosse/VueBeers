export default (value, currency = '€') => {
    if (!value) return ''
    value = parseFloat(value)
    if (isNaN(value)) return ''
    return value.toFixed(2) + ' ' + currency
}