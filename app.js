
    const modal_overlay = document.querySelector('#modal_overlay');
    const modal = document.querySelector('#modal');


    function openModal (value){
        const modalCl = modal.classList
        const overlayCl = modal_overlay


    
        if(value){
        overlayCl.classList.replace('hidden', 'flex')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
            modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'));
        }
    }

    openModal(false)

    // const modal_overlay2 = document.querySelector('#modal_overlay2');
    // const modal2 = document.querySelector('#modal2');
    
    // function openModal2 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal2(false)

    // const modal_overlay3 = document.querySelector('#modal_overlay3');
    // const modal3 = document.querySelector('#modal3');
    
    // function openModal3 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal3(false)

    // const modal_overlay4 = document.querySelector('#modal_overlay4');
    // const modal4 = document.querySelector('#modal4');
    
    // function openModal4 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal4(false)

    // const modal_overlay5 = document.querySelector('#modal_overlay5');
    // const modal5 = document.querySelector('#modal5');
    
    // function openModal5 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal5(false)

    // const modal_overlay6 = document.querySelector('#modal_overlay6');
    // const modal6 = document.querySelector('#modal6');
    
    // function openModal6 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal6(false)

    // const modal_overlay7 = document.querySelector('#modal_overlay7');
    // const modal7 = document.querySelector('#modal7');
    
    // function openModal7 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal7(false)

    // const modal_overlay8 = document.querySelector('#modal_overlay8');
    // const modal8 = document.querySelector('#modal8');
    
    // function openModal8 (value){
    //     const modalCl = modal.classList
    //     const overlayCl = modal_overlay
    
    //     if(value){
    //     overlayCl.classList.remove('hidden')
    //     setTimeout(() => {
    //         modalCl.remove('opacity-0')
    //         modalCl.remove('-translate-y-full')
    //         modalCl.remove('scale-150')
    //     }, 100);
    //     } else {
    //     setTimeout(() => {
    //         modalCl.add('-translate-y-full')
    //         modalCl.add('opacity-0')
    //         modalCl.add('scale-150')
    //     }, 100);
    //     setTimeout(() => overlayCl.classList.add('hidden'));
    //     }
    // }

    // openModal8(false)




