export const getChartTableDates = (state) => {
    return [...state.raport.dates].sort(function(a, b){
        const datea = new Date(a.date);
        const dateb = new Date(b.date);
        return datea - dateb
    })
}