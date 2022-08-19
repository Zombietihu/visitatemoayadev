const key = 'd7ede1df-e630-f8c2-7723-d1d485f03637';

export const getIndicadores  = async( idIndicador ) => {

    const url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${ idIndicador }/es/070000150087/true/BISE/2.0/${ key }?type=json`;
    const resp = await fetch( url );
    const { Series }  = await resp.json();

    const indicadorValue = Series.map( indicador =>({
        value: indicador.OBSERVATIONS[0].OBS_VALUE
    })

    )
    console.log( indicadorValue )
    return indicadorValue;

}

export const indicadores = [
    {
        nombre: 'Habitantes',
        idIndicador: '105766',
        class: "bi bi-people"
    },
    {
        nombre: 'Comunidades',
        idIndicador: '80',
        class: 'bi bi-house'
    },
    {
        nombre: 'Hablantes de otomi',
        idIndicador: '1500',
        class: 'bi bi-book'
    },
    {
        nombre: 'm2 de Territorio',
        idIndicador: '190340',
        class: 'bi bi-megaphone'
    }
];

