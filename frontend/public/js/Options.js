const tareas = document.getElementById('ejercicios');
const rutina = document.getElementById('rutina');

const lista_ejercicios = Sortable.create(ejercicios, {
    group:{
        name:"lista-ejercicios",
        pull:"clone",
        put: false

    },
    animation: 300,
    easing: "cubic-bezier(0.87, 0, 0.13, 1)",
    store: {
        set: function(){
            console.log('Cambio en la lista de ejercicios');

        }
    }
});

const lista_rutina = Sortable.create(rutina, {
    removeOnSpill: true,
    group:{
        name:"lista-ejercicios",
        

    },
    animation: 300,
    easing: "cubic-bezier(0.87, 0, 0.13, 1)"
});