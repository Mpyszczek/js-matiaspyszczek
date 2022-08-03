
function gen_prestamos() {
    let monto = parseInt(prompt("monto a solicitar"))
    let cuotas = parseInt(prompt("cantidad de cuotas"))
    let interes = prompt("intereses")


    if(monto>0) {
        for( i=1 ; i<=cuotas; i++)
        {
            mc= monto/cuotas;
            m1=mc.toFixed(2);
            mi=(((monto*interes)/100)/cuotas);
            m2=mi.toFixed(2);
            t=mc+mi;
            m3=t.toFixed(2);
        }
        total=m3*cuotas;
        m4=total.toFixed(2);

        console.log('valor de cada cuota sin interes',m1);
        console.log( 'valor de cada cuto con interes', m2);
        console.log('valor de cuota con interes',m3)
        console.log('total a devolever', m4);


    }else{
        prompt('cargar numero mayor a 0');
    }
}

