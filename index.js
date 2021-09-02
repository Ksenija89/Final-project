// form data storing on LG screen

const form = document.querySelector('form');

form.addEventListener('submit', e=>{

    e.preventDefault();
    
    const data = {
        firstName:form.name.value,
        lastName:form.lastName.value,
        email:form.email.value,
        phoneNumber:form.phone.value,
        roomType:form.roomType.value,
        comments:form.coments.value
    };

    // db.collection('Yoga retreat').add(formData).then(()=>{
    //     console.log('Data form added');}).catch(err=>{
    //         console.log(err);
    //     });

        alert('Thank you ' + form.name.value + '. Your retreat is booked successfully!')

        console.log(data);
})