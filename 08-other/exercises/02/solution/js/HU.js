const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date);
    },
    currency(num) {
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        })
        return huCurrency.format(num);
    },
    list(arr) {
        return `${arr.slice(0, -1).join(', ')} és ${arr.slice(-1)}`;
    }
}

export default HU;
